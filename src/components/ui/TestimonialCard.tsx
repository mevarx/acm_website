"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl border border-border p-6 sm:p-8 hover:shadow-lg hover:shadow-acm-blue/5 transition-all duration-300 relative"
    >
      {/* Quote icon */}
      <Quote
        size={32}
        className="text-acm-blue/10 absolute top-5 right-5"
        fill="currentColor"
      />

      {/* Quote text */}
      <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ backgroundColor: testimonial.color }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-dark-text">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
