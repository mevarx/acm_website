import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ACM Student Chapter — SRM University AP",
    template: "%s | ACM SRM AP",
  },
  description:
    "The official ACM Student Chapter at SRM University AP — accelerating innovation in computing through events, workshops, hackathons, and a professional computing community.",
  keywords: [
    "ACM",
    "SRM University AP",
    "Student Chapter",
    "Computing",
    "Technology",
    "Hackathons",
    "Workshops",
  ],
  openGraph: {
    title: "ACM Student Chapter — SRM University AP",
    description:
      "Accelerating innovation in computing — connecting students with cutting-edge technology and hands-on learning.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACM Student Chapter — SRM University AP",
    description:
      "Accelerating innovation in computing — connecting students with cutting-edge technology and hands-on learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
