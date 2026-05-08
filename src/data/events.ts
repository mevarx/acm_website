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
    id: "acm-india-rocs",
    title: "ACM India Research Opportunities in Computer Science (ROCS)",
    date: "May 2025",
    venue: "APJ Abdul Kalam Auditorium, SRM University AP",
    mode: "On-Campus",
    status: "past",
    description:
      "ACM India's Research Opportunities in Computer Science (ROCS) is a flagship academic initiative aimed at introducing undergraduate and postgraduate students to emerging research areas in computing. The program brings together distinguished researchers, academicians, and industry experts to deliver lectures, tutorials, and interactive sessions spanning core and interdisciplinary computer science domains. ROCS is designed to bridge the gap between classroom learning and research exposure, enabling students to explore advanced topics, understand research pathways, and engage with the broader computing community. By hosting ROCS, SRM University–AP seeks to foster a strong research culture, encourage academic inquiry, and provide students with access to national-level expertise and mentorship in computing research.",
    speakers: [],
    keyTakeaways: [
      "Exposure to emerging research areas in computer science",
      "Lectures and tutorials from distinguished researchers and academicians",
      "Bridging the gap between classroom learning and research",
      "Engagement with the national-level computing research community",
      "Guidance on research pathways and mentorship opportunities",
    ],
    registrationLink: "https://www.explara.com/e/rocs-at-srm-university-amaravati",
    recapLink: "https://events.srmap.edu.in/event/acm-india-research-opportunities-in-computer-science/",
  },
];
