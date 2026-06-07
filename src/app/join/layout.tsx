import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join ACM SRM AP",
  description:
    "Become a member of the ACM Student Chapter at SRM University AP. Access workshops, hackathons, mentorship, and a vibrant computing community.",
  openGraph: {
    title: "Join ACM SRM AP — Membership Application",
    description:
      "Join 500+ students in the ACM Student Chapter at SRM University AP.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join ACM SRM AP — Membership Application",
    description:
      "Join 500+ students in the ACM Student Chapter at SRM University AP.",
  },
  alternates: {
    canonical: "/join/",
  },
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
