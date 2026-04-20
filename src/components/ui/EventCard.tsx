"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import type { Event } from "@/data/events";

const statusColors = {
  upcoming: { bg: "bg-acm-blue/10", text: "text-acm-blue", dot: "bg-acm-blue" },
  ongoing: { bg: "bg-acm-yellow/15", text: "text-amber-700", dot: "bg-acm-yellow" },
  past: { bg: "bg-gray-100", text: "text-muted", dot: "bg-gray-400" },
};

interface EventCardProps {
  event: Event;
  index?: number;
  compact?: boolean;
}

export default function EventCard({ event, index = 0, compact = false }: EventCardProps) {
  const status = statusColors[event.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl border border-border hover:border-acm-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-acm-blue/5 group overflow-hidden"
    >
      {/* Blue top accent */}
      <div className="h-1 bg-gradient-to-r from-acm-blue to-acm-blue-light" />

      <div className="p-5 sm:p-6">
        {/* Status + Date row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.text}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Calendar size={13} />
            {event.date}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-dark-text mb-2 group-hover:text-acm-blue transition-colors leading-snug">
          {event.title}
        </h3>

        {/* Venue */}
        <div className="flex items-center gap-1.5 text-sm text-muted mb-3">
          <MapPin size={14} />
          <span>{event.venue}</span>
          <span className="px-2 py-0.5 bg-surface rounded text-xs font-medium">
            {event.mode}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
          {event.description}
        </p>

        {!compact && (
          <>
            {/* Speakers */}
            {event.speakers.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-dark-text uppercase tracking-wider mb-2">
                  Speakers
                </p>
                <div className="space-y-1.5">
                  {event.speakers.map((speaker, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-dark-text">
                          {speaker.name}
                        </span>
                        <span className="text-xs text-muted ml-2">
                          {speaker.designation}
                        </span>
                      </div>
                      {speaker.linkedin && (
                        <a
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-acm-blue hover:text-acm-blue-dark"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Takeaways */}
            {event.keyTakeaways.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-dark-text uppercase tracking-wider mb-2">
                  Key Takeaways
                </p>
                <ul className="space-y-1">
                  {event.keyTakeaways.map((takeaway, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-acm-yellow mt-2 shrink-0" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div className="pt-2">
          {event.status === "past" ? (
            <a
              href={event.recapLink || "#"}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-dark-text transition-colors"
            >
              View Recap <ArrowRight size={14} />
            </a>
          ) : (
            <a
              href={event.registrationLink || "#"}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-acm-blue hover:text-acm-blue-dark transition-colors"
            >
              Register Now <ArrowRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
