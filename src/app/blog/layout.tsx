import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tech insights, in-depth tutorials, and event coverage from the ACM Student Chapter at SRM University AP. Stay updated with computing trends.",
  openGraph: {
    title: "Blog — ACM SRM AP",
    description:
      "Tech insights, tutorials, and event coverage from the ACM SRM AP community.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — ACM SRM AP",
    description:
      "Tech insights, tutorials, and event coverage from the ACM SRM AP community.",
  },
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
