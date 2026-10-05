import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LAMBO GEEZ",
  description: "Official Lambo Geez clothing and collections.",
  icons: {
    icon: "/lamboslogo.png",
    shortcut: "/lamboslogo.png",
    apple: "/lamboslogo.png",
  },
  openGraph: {
    title: "LAMBO GEEZ",
    description: "Official Lambo Geez clothing and collections.",
    siteName: "LAMBO GEEZ",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}