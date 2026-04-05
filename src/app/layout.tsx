import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedFavicon } from "./components/AnimatedFavicon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kay — Senior UX Designer",
  description:
    "12 years designing products people love. Explore my work through AI chat, a Spanish learning game, and full case studies.",
  openGraph: {
    title: "Kay — Senior UX Designer",
    description:
      "12 years designing products people love. Explore my work through AI chat, a Spanish learning game, and full case studies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

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
        <AnimatedFavicon />
        {children}
      </body>
    </html>
  );
}
