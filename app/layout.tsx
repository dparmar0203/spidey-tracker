import type { Metadata } from "next";
import { Geist, Geist_Mono, Bangers } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-comic",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spidey Tracker",
  description:
    "A city-wide tracker logging 18 months of reported sightings of a masked vigilante swinging across a New York-inspired city.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${geistSans.variable} ${geistMono.variable} ${bangers.variable}`}
    >
      <body className="min-h-full flex bg-background text-foreground">
        <Sidebar />
        <div className="min-h-screen min-w-0 w-full flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
