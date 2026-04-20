"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface TeamCardProps {
  member: TeamMember;
  index?: number;
  featured?: boolean;
}

export default function TeamCard({ member, index = 0, featured = false }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-acm-blue/5 transition-all duration-300 ${
        featured ? "max-w-sm" : "max-w-xs"
      } w-full`}
    >
      {/* Blue top border accent */}
      <div className="h-1.5 bg-gradient-to-r from-acm-blue to-acm-blue-light" />

      <div className={`${featured ? "p-8" : "p-6"} text-center`}>
        {/* Avatar */}
        <div
          className={`mx-auto rounded-full flex items-center justify-center text-white font-bold ${
            featured ? "w-24 h-24 text-2xl mb-5" : "w-20 h-20 text-xl mb-4"
          }`}
          style={{ backgroundColor: member.color }}
        >
          {member.initials}
        </div>

        {/* Name */}
        <h3
          className={`font-bold text-dark-text ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-acm-blue font-semibold text-sm mt-1">
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-muted text-sm mt-3 leading-relaxed">
          {member.bio}
        </p>

        {/* LinkedIn */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-acm-blue hover:text-acm-blue-dark transition-colors text-sm font-medium"
        >
          <LinkedinIcon size={15} />
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
}
