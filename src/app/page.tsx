"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Megaphone,
  Handshake,
  Palette,
  CalendarCheck,
} from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";
import BlogCard from "@/components/ui/BlogCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import JoinBanner from "@/components/ui/JoinBanner";
import TextType from "@/components/ui/TextType";
import HeroTerminal from "@/components/ui/HeroTerminal";
import { events } from "@/data/events";
import { blogPosts } from "@/data/blog";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: 100, suffix: "+", label: "Hackathons Won" },
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 20, suffix: "+", label: "Events Conducted" },
  { value: 10, suffix: "+", label: "Industry Partners" },
];

const domains = [
  {
    icon: Code,
    name: "Foundry",
    alias: "Technical",
    desc: "CP/DSA, Web/Cloud, AI/ML",
  },
  {
    icon: Megaphone,
    name: "Amplifier",
    alias: "Public Relations",
    desc: "Social media, outreach, branding",
  },
  {
    icon: Handshake,
    name: "Elevators",
    alias: "Sponsorship",
    desc: "Industry partnerships & funding",
  },
  {
    icon: Palette,
    name: "Canvas",
    alias: "Creatives",
    desc: "UI/UX, Graphic Design, Media",
  },
  {
    icon: CalendarCheck,
    name: "Orchestrators",
    alias: "Events",
    desc: "Event logistics & management",
  },
];

export default function HomePage() {
  const featuredEvents = events.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-acm-blue/5 text-acm-blue text-sm font-medium rounded-full mb-6 border border-acm-blue/10">
                <span className="w-2 h-2 rounded-full bg-acm-yellow" />
                ACM Student Chapter
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-text tracking-tight leading-[1.1] min-h-[3em]">
                Accelerating{" "}
                <TextType
                  as="span"
                  text={["INNOVATION", "EXCELLENCE", "COMMUNITY", "LEADERSHIP"]}
                  typingSpeed={75}
                  deletingSpeed={40}
                  pauseDuration={2000}
                  className="text-acm-blue"
                  cursorClassName="text-acm-blue"
                />
                <br />
                in Computing
              </h1>

              <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
                The official ACM Student Chapter at SRM University AP — building
                the next generation of computing professionals through hands-on
                learning, cutting-edge workshops, and a vibrant tech community.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-acm-blue text-white font-semibold rounded-lg hover:bg-acm-blue-dark transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  Join the Chapter <ArrowRight size={16} />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-acm-blue text-acm-blue font-semibold rounded-lg hover:bg-acm-blue/5 transition-all duration-200 text-sm sm:text-base"
                >
                  View Events
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-shrink-0 w-full lg:w-auto"
            >
              <HeroTerminal />
            </motion.div>
          </div>
        </div>

        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-acm-blue/[0.02] to-transparent pointer-events-none" />
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About the Chapter"
            subtitle="Building the future of computing, one student at a time."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted leading-relaxed text-base sm:text-lg">
                The ACM Student Chapter at SRM University AP is the official
                collegiate chapter affiliated with the{" "}
                <strong className="text-dark-text">
                  Association for Computing Machinery (ACM)
                </strong>
                , the world&apos;s largest computing society. Our mission is to
                accelerate innovation in computing by connecting students with
                cutting-edge technology, hands-on learning opportunities, and a
                professional community of peers, mentors, and industry leaders.
              </p>
              <p className="text-muted leading-relaxed mt-4 text-base sm:text-lg">
                Through workshops, hackathons, symposiums, and collaborative
                projects, we empower students to develop the skills and mindset
                needed to excel in the rapidly evolving world of technology.
              </p>
            </motion.div>

            {/* Domains Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {domains.map((domain, i) => (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border hover:border-acm-blue/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-acm-blue/10 flex items-center justify-center text-acm-blue shrink-0">
                    <domain.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark-text">
                      {domain.name}
                    </p>
                    <p className="text-xs text-muted">{domain.alias}</p>
                    <p className="text-xs text-muted mt-0.5">{domain.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED EVENTS ==================== */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-12">
            <SectionHeading
              title="Featured Events"
              subtitle="Stay updated with our latest workshops, hackathons, and conferences."
            />
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-acm-blue hover:text-acm-blue-dark transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} compact />
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-acm-blue"
            >
              View All Events <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== LATEST BLOG POSTS ==================== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-12">
            <SectionHeading
              title="Latest from the Blog"
              subtitle="Tech insights, tutorials, and event coverage from our community."
            />
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-acm-blue hover:text-acm-blue-dark transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-acm-blue"
            >
              View All Posts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What People Say"
            subtitle="Hear from our faculty, alumni, and industry partners."
            center
          />

          <div className="grid md:grid-cols-3 gap-6 mt-2">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== JOIN CTA ==================== */}
      <JoinBanner />
    </>
  );
}
