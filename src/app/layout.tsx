import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Pratik Kulkarni | Automation Test Engineer & SDET",
  description:
    "Portfolio of Pratik Kulkarni — Automation Test Engineer, SDET, and Data Science Enthusiast. Explore projects, skills, experience, and athletic achievements.",
  keywords: [
    "Pratik Kulkarni",
    "SDET",
    "Automation Test Engineer",
    "Portfolio",
    "Test Automation",
    "Data Science",
    "Athlete",
  ],
  authors: [{ name: "Pratik Kulkarni" }],
  openGraph: {
    title: "Pratik Kulkarni | Automation Test Engineer & SDET",
    description:
      "Portfolio of Pratik Kulkarni — Automation Test Engineer, SDET, and Data Science Enthusiast.",
    type: "website",
    locale: "en_US",
    // [EDIT ME] Add your OG image:
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Kulkarni | Portfolio",
    description:
      "Automation Test Engineer, SDET, Data Science Enthusiast, and Athlete.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      style={{ background: "#0A0F1F" }}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0A0F1F] text-[#E2E8F0]">
        {children}
      </body>
    </html>
  );
}
