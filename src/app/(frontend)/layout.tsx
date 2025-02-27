import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ReadNest",
  description: "A Blog using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-roboto-mono bg-slate-900 text-slate-50 xl:mx-72 border-x border-slate-600 p-4 sm:p-8 min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
