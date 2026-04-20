export interface TeamMember {
  name: string;
  role: string;
  tier: number;
  bio: string;
  linkedin: string;
  initials: string;
  color: string;
}

export interface FacultySponsor {
  name: string;
  designation: string;
  department: string;
  initials: string;
  color: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Arjun Mehta",
    role: "Chair",
    tier: 1,
    bio: "Overall leadership, strategic direction, and external representation of the chapter.",
    linkedin: "https://linkedin.com",
    initials: "AM",
    color: "#1565C0",
  },
  {
    name: "Kavya Nair",
    role: "Vice Chair",
    tier: 2,
    bio: "Oversees internal operations and cross-domain coordination across all verticals.",
    linkedin: "https://linkedin.com",
    initials: "KN",
    color: "#1E88E5",
  },
  {
    name: "Rohit Sharma",
    role: "Treasurer",
    tier: 3,
    bio: "Financial operations, budget planning, fund allocation, and chapter accounting.",
    linkedin: "https://linkedin.com",
    initials: "RS",
    color: "#2196F3",
  },
  {
    name: "Divya Krishnan",
    role: "Secretary",
    tier: 3,
    bio: "Meeting minutes, official documentation, inter-domain communication, and day-to-day administration.",
    linkedin: "https://linkedin.com",
    initials: "DK",
    color: "#42A5F5",
  },
  {
    name: "Prateek Joshi",
    role: "Membership Chair",
    tier: 4,
    bio: "Member recruitment, onboarding, retention, engagement, and database management.",
    linkedin: "https://linkedin.com",
    initials: "PJ",
    color: "#1976D2",
  },
];

export const facultySponsor: FacultySponsor = {
  name: "Dr. Ramesh Venkataraman",
  designation: "Associate Professor",
  department: "Department of Computer Science & Engineering",
  initials: "RV",
  color: "#0D47A1",
};
