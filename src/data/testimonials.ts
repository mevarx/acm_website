export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The ACM Student Chapter at SRM AP has consistently demonstrated excellence in fostering a culture of innovation and technical rigor. Their events are among the best-organized on campus, and the students show remarkable initiative in bridging academic learning with real-world applications.",
    name: "Dr. Ramesh Venkataraman",
    role: "Faculty Sponsor, Department of CSE",
    initials: "RV",
    color: "#0D47A1",
  },
  {
    quote:
      "Being part of ACM SRM AP was a transformative experience. The workshops, hackathons, and mentorship I received shaped my approach to problem-solving and directly contributed to my successful placement at a top tech company. I highly recommend joining to every student.",
    name: "Aditi Raghavan",
    role: "Alumni, Batch of 2025 — SDE at Amazon",
    initials: "AR",
    color: "#1565C0",
  },
  {
    quote:
      "We've been impressed by the caliber of students coming from the ACM chapter at SRM University AP. Their technical skills, collaborative mindset, and professionalism during our recruitment hackathon were outstanding. We look forward to continued partnership with the chapter.",
    name: "Nikhil Gupta",
    role: "Engineering Manager, Flipkart",
    initials: "NG",
    color: "#1E88E5",
  },
];
