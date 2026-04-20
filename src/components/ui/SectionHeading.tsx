"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 sm:mb-12 ${center ? "text-center" : ""}`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-text tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-12 bg-acm-yellow rounded-full ${
          center ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
