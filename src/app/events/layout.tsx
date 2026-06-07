import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore workshops, hackathons, symposiums, and tech talks hosted by the ACM Student Chapter at SRM University AP. See upcoming and past events.",
  openGraph: {
    title: "Events — ACM SRM AP",
    description:
      "Workshops, hackathons, symposiums, and more from ACM SRM AP.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events — ACM SRM AP",
    description:
      "Workshops, hackathons, symposiums, and more from ACM SRM AP.",
  },
  alternates: {
    canonical: "/events/",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
