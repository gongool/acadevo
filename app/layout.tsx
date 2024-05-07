import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from '@/components/theme-provider'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acadevo - Learning Management System",
  description:
    "Acadevo is a professional-grade Learning Management System (LMS) developed by Ahmed Jamal (Gongool). Powered by Next.js, Prisma ORM, Shadcn/ui, Clerk, and Stripe, it provides educators and learners with a seamless online learning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        className='scroll-smooth antialiased'
        suppressHydrationWarning
      >
        <body className={`flex min-h-screen flex-col ${inter.className}`}>
          <ThemeProvider
            enableSystem
            attribute='class'
            defaultTheme='system'
            disableTransitionOnChange
          >
            {/* <Header /> */}

            <main className='grow'>{children}</main>
            {/* <Footer /> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
