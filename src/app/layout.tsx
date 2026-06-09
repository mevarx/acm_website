import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalClickSpark from "@/components/ui/GlobalClickSpark";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srmap.hosting.acm.org"),
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
    "SRM AP",
    "ACM India",
  ],
  openGraph: {
    title: "ACM Student Chapter — SRM University AP",
    description:
      "Accelerating innovation in computing — connecting students with cutting-edge technology and hands-on learning.",
    type: "website",
    locale: "en_IN",
    siteName: "ACM Student Chapter — SRM University AP",
    images: [
      {
        url: "/acm-logo.png",
        width: 512,
        height: 512,
        alt: "ACM Student Chapter SRM University AP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACM Student Chapter — SRM University AP",
    description:
      "Accelerating innovation in computing — connecting students with cutting-edge technology and hands-on learning.",
    images: ["/acm-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <GlobalClickSpark />
        <Navbar />
        <main className="flex-1 relative z-10 overflow-x-hidden w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
