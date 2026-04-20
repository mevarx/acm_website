"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  BookOpen,
  Network,
  Globe,
  Lightbulb,
  Send,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import JoinBanner from "@/components/ui/JoinBanner";

const benefits = [
  {
    icon: Users,
    title: "Vibrant Community",
    desc: "Connect with 500+ like-minded students passionate about computing and technology.",
  },
  {
    icon: Trophy,
    title: "Competitions & Hackathons",
    desc: "Participate in nationwide hackathons, coding contests, and innovation challenges.",
  },
  {
    icon: BookOpen,
    title: "Workshops & Learning",
    desc: "Access exclusive workshops on web dev, AI/ML, cloud computing, and more.",
  },
  {
    icon: Network,
    title: "Industry Networking",
    desc: "Interact with professionals from top tech companies through events and mentorship.",
  },
  {
    icon: Globe,
    title: "ACM Global Access",
    desc: "Unlock ACM's global resources — digital library, publications, and SIG conferences.",
  },
  {
    icon: Lightbulb,
    title: "Leadership & Growth",
    desc: "Develop leadership skills by organizing events and leading domain-specific initiatives.",
  },
];

const formFields = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe" },
  { name: "email", label: "Email Address", type: "email", placeholder: "john@srmap.edu.in" },
  {
    name: "year",
    label: "Year of Study",
    type: "select",
    options: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
  },
  {
    name: "branch",
    label: "Branch / Department",
    type: "text",
    placeholder: "Computer Science & Engineering",
  },
  {
    name: "domain",
    label: "Domain of Interest",
    type: "select",
    options: [
      "Technical (Foundry)",
      "Public Relations (Amplifier)",
      "Sponsorship (Elevators)",
      "Creatives (Canvas)",
      "Events (Orchestrators)",
    ],
  },
  {
    name: "whyJoin",
    label: "Why do you want to join ACM?",
    type: "textarea",
    placeholder: "Tell us about your motivation and what you hope to contribute...",
  },
];

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Join ACM SRM AP"
            subtitle="Become a member of one of the most active student chapters in the country. Here's why you should."
            center
          />

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 sm:mb-20">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-acm-blue/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-acm-blue/10 flex items-center justify-center text-acm-blue shrink-0">
                  <b.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-dark-text">{b.title}</h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-text tracking-tight">
                Membership Application
              </h2>
              <p className="text-muted mt-2">
                Fill out the form below to express your interest in joining ACM
                SRM AP.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-surface rounded-xl border border-border"
              >
                <CheckCircle size={48} className="text-acm-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-text">
                  Application Submitted!
                </h3>
                <p className="text-muted mt-2 max-w-md mx-auto">
                  Thank you for your interest in ACM SRM AP. Our team will
                  review your application and get back to you via email.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-border p-6 sm:p-8 space-y-5"
              >
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-semibold text-dark-text mb-1.5"
                    >
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-acm-blue/30 focus:border-acm-blue transition-colors"
                      >
                        <option value="">Select...</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={4}
                        required
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-acm-blue/30 focus:border-acm-blue transition-colors resize-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        required
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-acm-blue/30 focus:border-acm-blue transition-colors"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-acm-blue text-white font-semibold rounded-lg hover:bg-acm-blue-dark transition-colors shadow-sm hover:shadow-md text-sm sm:text-base"
                >
                  <Send size={16} />
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <JoinBanner
        title="Have questions? We're here to help."
        ctaText="Contact Us"
        ctaLink="/contact"
      />
    </>
  );
}
