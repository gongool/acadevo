import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acadevo - Learning Management System (LMS)",
  description:
    "Acadevo is a professional-grade Learning Management System (LMS) developed by Ahmed Jamal (Gongool). Powered by Next.js, Prisma ORM, Shadcn/ui, and Stripe, it provides educators and learners with a seamless online learning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
