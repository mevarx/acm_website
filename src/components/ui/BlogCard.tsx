"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <BorderGlow borderRadius={12}>
        <Link
          href={`/blog/${post.slug}`}
          className="block group h-full"
        >
        {/* Cover image or color band */}
        <div
          className="h-40 sm:h-48 w-full relative bg-surface overflow-hidden"
        >
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center opacity-20"
              style={{ backgroundColor: post.coverColor }}
            >
              <ImageIcon size={48} className="text-dark-text" />
            </div>
          )}
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
          <h3 className="font-display text-base sm:text-lg font-bold text-dark-text mb-2 group-hover:text-acm-blue transition-colors leading-snug line-clamp-2">
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
