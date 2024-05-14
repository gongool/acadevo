"use client";

import * as z from "zod";
import axios from "axios";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Chapter, MuxData } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Video } from "lucide-react";
import toast from "react-hot-toast";
import { FileUpload } from "@/components/file-upload";
import MuxPlayer from "@mux/mux-player-react";

interface ChapterVideoFormProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        values
      );
      toast.success("Chapter updated successfully!");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("An error occurred. Please try again!");
    }
  };

  return (
    <div className=" mt-6 border rounded-md p-4  bg-slate-100 dark:bg-gray-900">
      <div className="font-medium flex items-center justify-between">
        Chapter Video
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="h-4 w-4 m-2" />
              Add a Video
            </>
          )}

          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Video
            </>
          )}
        </Button>
      </div>

      {!isEditing &&
        (!initialData.videoUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md mt-2">
            <Video className="h-10 w-10  text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <MuxPlayer
              playbackId={initialData?.muxData?.playbackId || ""}
              streamType="on-demand"
            />
            
          </div>
        ))}

      {isEditing && (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-sm  text-muted-foreground mt-4 italic ">
            Upload this Chapter&apos;s Video
          </div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-sm text-muted-foreground mt-2 italic">
          Please note that video processing may require several minutes. If the
          video does not appear, kindly consider refreshing the page
        </div>
      )}
    </div>
  );
};

export default ChapterVideoForm;
