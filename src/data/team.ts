export interface TeamMember {
  name: string;
  role: string;
  tier: number;
  bio: string;
  linkedin: string;
  initials: string;
  color: string;
  image?: string;
}

export interface FacultySponsor {
  name: string;
  designation: string;
  department: string;
  initials: string;
  color: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Numair",
    role: "Chair",
    tier: 1,
    bio: "Overall leadership, strategic direction, and external representation of the chapter.",
    linkedin: "https://linkedin.com",
    initials: "N",
    color: "#1565C0",
    image: "/numair 2.jpeg",
  },
  {
    name: "Santiago Jerald",
    role: "Vice Chair",
    tier: 2,
    bio: "Oversees internal operations and cross-domain coordination across all verticals.",
    linkedin: "https://linkedin.com",
    initials: "SJ",
    color: "#1E88E5",
    image: "/santiago.jpeg",
  },
  {
    name: "Ram Teja",
    role: "Treasurer",
    tier: 3,
    bio: "Financial operations, budget planning, fund allocation, and chapter accounting.",
    linkedin: "https://linkedin.com",
    initials: "RT",
    color: "#2196F3",
    image: "/Ram Teja.jpeg",
  },
  {
    name: "Shammy",
    role: "Secretary",
    tier: 3,
    bio: "Meeting minutes, official documentation, inter-domain communication, and day-to-day administration.",
    linkedin: "https://linkedin.com",
    initials: "S",
    color: "#42A5F5",
    image: "/shammy.jpeg",
  },
  {
    name: "Dhruv Bajaj",
    role: "Membership Chair",
    tier: 4,
    bio: "Member recruitment, onboarding, retention, engagement, and database management.",
    linkedin: "https://linkedin.com",
    initials: "DB",
    color: "#1976D2",
    image: "/Dhruv bajaj.jpeg",
  },
];

export const facultySponsor: FacultySponsor = {
  name: "Dr. Priyanka Singh",
  designation: "Faculty Advisor",
  department: "Department of Computer Science & Engineering",
  initials: "PS",
  color: "#0D47A1",
  image: "/Priyanka.jpg",
};

export const advisors: TeamMember[] = [
  {
    name: "Vishnu",
    role: "Advisory Board",
    tier: 5,
    bio: "Advising the chapter on strategic growth and opportunities.",
    linkedin: "https://linkedin.com",
    initials: "V",
    color: "#475569",
    image: "/vishnu.jpeg",
  },
  {
    name: "Naman Pant",
    role: "Advisory Board",
    tier: 5,
    bio: "Advising the chapter on academic and industry integration.",
    linkedin: "https://linkedin.com",
    initials: "NP",
    color: "#64748B",
    image: "/naman pant.jpeg",
  },
];

