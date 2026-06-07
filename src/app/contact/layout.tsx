import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the ACM Student Chapter at SRM University AP. Reach out for collaborations, queries, or partnership opportunities.",
  openGraph: {
    title: "Contact Us — ACM SRM AP",
    description:
      "Reach out to ACM SRM AP for collaborations, queries, or partnerships.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us — ACM SRM AP",
    description:
      "Reach out to ACM SRM AP for collaborations, queries, or partnerships.",
  },
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
