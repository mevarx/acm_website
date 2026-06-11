"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkedinIcon, InstagramIcon, GithubIcon, TwitterIcon } from "@/components/ui/icons";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/srm-ap-acm",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/acmsrmap.studentchapter",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://github.com/mevarx",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/acmsrmap",
    icon: TwitterIcon,
    label: "Twitter/X",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };


  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question, idea, or collaboration proposal? We'd love to hear from you."
          center
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface rounded-xl border border-border p-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-acm-blue/10 flex items-center justify-center text-acm-blue shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-text">Email</p>
                  <a
                    href="mailto:acm@srmap.edu.in"
                    className="text-sm text-acm-blue hover:underline"
                  >
                    acm@srmap.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-acm-blue/10 flex items-center justify-center text-acm-blue shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-text">
                    Location
                  </p>
                  <p className="text-sm text-muted">
                    SRM University AP, Neerukonda,
                    <br />
                    Mangalagiri, Andhra Pradesh 522240
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-surface rounded-xl border border-border p-6">
              <h3 className="text-sm font-semibold text-dark-text mb-4">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-border bg-white hover:border-acm-blue/20 transition-all text-sm font-medium text-dark-text hover:text-acm-blue"
                  >
                    <social.icon size={16} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 bg-surface rounded-xl border border-border"
                aria-live="polite"
              >
                <CheckCircle size={48} className="text-acm-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-text">
                  Message Sent!
                </h3>
                <p className="text-muted mt-2">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-border p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-dark-text mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-acm-blue/30 focus:border-acm-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-dark-text mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-acm-blue/30 focus:border-acm-blue transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-semibold text-dark-text mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-acm-blue/30 focus:border-acm-blue transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-dark-text mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message..."
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-acm-blue/30 focus:border-acm-blue transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-acm-blue text-white font-semibold rounded-lg hover:bg-acm-blue-dark transition-colors shadow-sm hover:shadow-md text-sm sm:text-base"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
