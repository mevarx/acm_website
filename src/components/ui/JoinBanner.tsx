"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface JoinBannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function JoinBanner({
  title = "Become a part of the ACM community at SRM University AP.",
  subtitle,
  ctaText = "Apply Now",
  ctaLink = "/join",
}: JoinBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5 }}
      className="bg-acm-blue"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-snug">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-blue-100 text-base sm:text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <Link
          href={ctaLink}
          className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-acm-yellow text-dark-text font-bold rounded-lg hover:bg-acm-yellow-dark transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          {ctaText} <ArrowRight size={16} />
        </Link>
      </div>
    </motion.section>
  );
}
