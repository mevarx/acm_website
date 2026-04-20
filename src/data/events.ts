export type EventStatus = "upcoming" | "ongoing" | "past";
export type EventMode = "On-Campus" | "Online" | "Hybrid";

export interface Speaker {
  name: string;
  designation: string;
  linkedin?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  venue: string;
  mode: EventMode;
  status: EventStatus;
  description: string;
  speakers: Speaker[];
  keyTakeaways: string[];
  registrationLink?: string;
  recapLink?: string;
  image?: string;
}

export const events: Event[] = [
  {
    id: "responsible-ai-symposium",
    title: "Responsible AI Symposium 2026",
    date: "May 15, 2026",
    endDate: "May 16, 2026",
    venue: "Main Auditorium, SRM University AP",
    mode: "Hybrid",
    status: "upcoming",
    description:
      "A flagship two-day conference exploring the ethical, societal, and technical dimensions of responsible AI development. Featuring keynotes from leading AI researchers and interactive panel discussions on bias mitigation, fairness in ML, and AI governance frameworks.",
    speakers: [
      {
        name: "Dr. Priya Sharma",
        designation: "AI Ethics Lead, Google Research India",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Prof. Rajesh Kumar",
        designation: "Head of CS Department, SRM University AP",
        linkedin: "https://linkedin.com",
      },
    ],
    keyTakeaways: [
      "Understanding bias detection and mitigation in ML pipelines",
      "Frameworks for responsible AI deployment in production",
      "Hands-on workshop on fairness-aware machine learning",
      "Networking with industry AI practitioners",
    ],
    registrationLink: "#",
  },
  {
    id: "ideaforge-2026",
    title: "IdeaForge — Rapid Prototyping Challenge",
    date: "April 28, 2026",
    venue: "Innovation Lab, Block C",
    mode: "On-Campus",
    status: "upcoming",
    description:
      "A 12-hour rapid ideation and prototyping event where teams of 3–4 students tackle real-world problems with creative tech solutions. From wireframe to working MVP — all in one day. Mentored by industry professionals and faculty advisors.",
    speakers: [
      {
        name: "Ankit Verma",
        designation: "Senior SWE, Microsoft India",
        linkedin: "https://linkedin.com",
      },
    ],
    keyTakeaways: [
      "Rapid prototyping and MVP development skills",
      "Design thinking methodology in practice",
      "Team collaboration under time constraints",
      "Pitch presentation and stakeholder communication",
    ],
    registrationLink: "#",
  },
  {
    id: "web-dev-bootcamp",
    title: "Full-Stack Web Development Bootcamp",
    date: "March 20, 2026",
    endDate: "March 22, 2026",
    venue: "Computer Lab 3, Block A",
    mode: "On-Campus",
    status: "past",
    description:
      "An intensive 3-day bootcamp covering modern full-stack web development with Next.js, TypeScript, and cloud deployment. Participants built and deployed their own portfolio websites by the end of the program.",
    speakers: [
      {
        name: "Sneha Reddy",
        designation: "Frontend Lead, Razorpay",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Vikram Patel",
        designation: "Cloud Architect, AWS",
        linkedin: "https://linkedin.com",
      },
    ],
    keyTakeaways: [
      "React and Next.js fundamentals with App Router",
      "TypeScript best practices for scalable applications",
      "Database design with PostgreSQL and Prisma ORM",
      "CI/CD pipeline setup and Vercel deployment",
    ],
    recapLink: "#",
  },
  {
    id: "recruitment-drive-spring-2026",
    title: "Spring 2026 Recruitment Drive",
    date: "February 10, 2026",
    venue: "Seminar Hall 2, Block B",
    mode: "On-Campus",
    status: "past",
    description:
      "The official ACM SRM AP spring recruitment drive — featuring chapter presentations, domain showcases, an interactive Q&A session, and on-the-spot registrations. Over 200 students attended and 80+ new members joined the chapter.",
    speakers: [
      {
        name: "ACM SRM AP Core Team",
        designation: "Student Chapter Leadership",
      },
    ],
    keyTakeaways: [
      "Overview of all 5 functional domains",
      "Membership benefits and opportunities",
      "Live demonstrations of past projects",
      "Networking with current chapter members",
    ],
    recapLink: "#",
  },
];
