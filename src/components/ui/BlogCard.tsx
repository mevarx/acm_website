"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import BorderGlow from "@/components/ui/BorderGlow";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Tech Insights": { bg: "bg-acm-blue/10", text: "text-acm-blue" },
  "Event Coverage": { bg: "bg-acm-yellow/15", text: "text-amber-700" },
  Tutorials: { bg: "bg-emerald-50", text: "text-emerald-700" },
};

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const catColor = categoryColors[post.category] || categoryColors["Tech Insights"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <BorderGlow borderRadius={12}>
        <Link
          href={`/blog/${post.slug}`}
          className="block group h-full"
        >
        {/* Cover color band */}
        <div
          className="h-36 sm:h-40 flex items-center justify-center"
          style={{ backgroundColor: post.coverColor + "12" }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
            style={{ backgroundColor: post.coverColor }}
          >
            {post.title.charAt(0)}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {/* Category + Read time */}
          <div className="flex items-center justify-between mb-3">
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-semibold ${catColor.bg} ${catColor.text}`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-dark-text mb-2 group-hover:text-acm-blue transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          {/* Author + Date */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-xs font-medium text-dark-text">
              {post.author}
            </span>
            <span className="text-xs text-muted">{post.date}</span>
          </div>

          {/* Read more */}
          <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-acm-blue group-hover:gap-2 transition-all">
            Read More <ArrowRight size={14} />
          </span>
        </div>
        </Link>
      </BorderGlow>
    </motion.div>
  );
}
