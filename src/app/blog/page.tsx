"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts, type BlogCategory } from "@/data/blog";

type FilterTab = "All" | BlogCategory;

const tabs: FilterTab[] = ["All", "Tech Insights", "Event Coverage", "Tutorials"];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredPosts =
    activeTab === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeTab);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blog"
          subtitle="Tech insights, in-depth tutorials, and coverage of our events — all from the ACM SRM AP community."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-acm-blue text-white shadow-sm"
                  : "bg-surface text-muted hover:text-dark-text hover:bg-gray-100 border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-lg">
              No posts in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
