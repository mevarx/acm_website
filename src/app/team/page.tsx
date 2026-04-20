import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ReflectiveCard, { FacultyReflectiveCard } from "@/components/ui/ReflectiveCard";
import { teamMembers, facultySponsor } from "@/data/team";

export const metadata: Metadata = {
  title: "Core Team",
  description:
    "Meet the leadership team of the ACM Student Chapter at SRM University AP — guiding the chapter's vision, operations, and community growth.",
};

export default function TeamPage() {
  const tier1 = teamMembers.filter((m) => m.tier === 1);
  const tier2 = teamMembers.filter((m) => m.tier === 2);
  const tier3 = teamMembers.filter((m) => m.tier === 3);
  const tier4 = teamMembers.filter((m) => m.tier === 4);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Core Team"
          subtitle="The leadership driving our mission — each member plays a critical role in shaping the chapter's direction and impact."
          center
        />

        <div className="space-y-12 sm:space-y-16">
          {/* Tier 1 — Chair */}
          <div className="flex justify-center">
            {tier1.map((m, i) => (
              <ReflectiveCard key={m.name} member={m} index={i} featured />
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-acm-blue/20 flex-1 max-w-24" />
            <div className="w-2 h-2 rounded-full bg-acm-blue/30" />
            <div className="h-px bg-acm-blue/20 flex-1 max-w-24" />
          </div>

          {/* Tier 2 — Vice Chair */}
          <div className="flex justify-center">
            {tier2.map((m, i) => (
              <ReflectiveCard key={m.name} member={m} index={i} featured />
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-acm-blue/20 flex-1 max-w-24" />
            <div className="w-2 h-2 rounded-full bg-acm-blue/30" />
            <div className="h-px bg-acm-blue/20 flex-1 max-w-24" />
          </div>

          {/* Tier 3 — Secretariat */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {tier3.map((m, i) => (
              <ReflectiveCard key={m.name} member={m} index={i} />
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-acm-blue/20 flex-1 max-w-24" />
            <div className="w-2 h-2 rounded-full bg-acm-blue/30" />
            <div className="h-px bg-acm-blue/20 flex-1 max-w-24" />
          </div>

          {/* Tier 4 — Operations */}
          <div className="flex justify-center">
            {tier4.map((m, i) => (
              <ReflectiveCard key={m.name} member={m} index={i} />
            ))}
          </div>

          {/* Faculty Sponsor */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-center text-lg font-bold text-dark-text mb-8">
              Faculty Advisor
            </h3>
            <div className="flex justify-center">
              <FacultyReflectiveCard sponsor={facultySponsor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
