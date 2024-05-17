"use client";

import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import axios from "axios";

import { useConfettiStore } from "@/hooks/use-confetti-store";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface CourseProgressButtonProps {
  chapterId: string;
  courseId: string;
  isCompleted?: boolean;
  nextChapterId?: string;
}

const CourseProgressButton = ({
  chapterId,
  courseId,
  isCompleted,
  nextChapterId,
}: CourseProgressButtonProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.put(
        `/api/courses/${courseId}/chapters/${chapterId}/progress`,
        {
          isCompleted: !isCompleted,
        }
      );

      if (!isCompleted && !nextChapterId) {
        confetti.onOpen();
      }

      if (!isCompleted && nextChapterId) {
        router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
      }

      toast.success("Progress Updated Successfully");
      router.refresh();
      
    } catch {
      toast.error("An error occurred. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const Icon = isCompleted ? XCircle : CheckCircle;

  return (
    <Button
      onClick={onClick}
      type="button"
      disabled={isLoading}
      variant={isCompleted ? "outline" : "success"}
      className="w-full md:w-auto"
    >
      {isCompleted ? "Mark as Not Completed" : "Mark as Complete"}
      <Icon className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default CourseProgressButton;
