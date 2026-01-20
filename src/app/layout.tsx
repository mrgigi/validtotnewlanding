import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL('https://validtot.com'), // Replace with actual domain when live
  title: "ValidToT - Stop Guessing. Get Real Answers.",
  description: "Create instant, anonymous polls and get verified votes from real humans. No paywalls. No bots. Just honest, unbiased feedback.",
  keywords: ["polls", "market research", "feedback", "anonymous voting", "verified votes"],
  authors: [{ name: "ValidToT Team" }],
  openGraph: {
    title: "ValidToT - Stop Guessing. Get Real Answers.",
    description: "Create instant, anonymous polls and get verified votes from real humans.",
    url: 'https://validtot.com',
    siteName: 'ValidToT',
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValidToT - Stop Guessing. Get Real Answers.",
    description: "Create instant, anonymous polls and get verified votes from real humans.",
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6", // Primary color
};

import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
