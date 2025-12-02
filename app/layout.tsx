import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kolaa Pravin - Developer Portfolio",
  description: "MERN Stack & Cloud Developer",
  icons: {
    icon: [
      {
        url: "/cloud.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/cloud.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/cloud.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/cloud.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
