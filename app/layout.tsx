import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Next-Auth",
  description: "A simple example of Next.js with next-auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster position="top-center" richColors />
            <Footer/>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
