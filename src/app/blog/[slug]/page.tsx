import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const categoryColors: Record<string, { bg: string; text: string }> = {
    "Tech Insights": { bg: "bg-acm-blue/10", text: "text-acm-blue" },
    "Event Coverage": { bg: "bg-acm-yellow/15", text: "text-amber-700" },
    Tutorials: { bg: "bg-emerald-50", text: "text-emerald-700" },
  };

  const catColor = categoryColors[post.category] || categoryColors["Tech Insights"];

  // Simple markdown-like rendering — split by double newlines for paragraphs,
  // handle ## headings and code blocks
  const renderContent = (content: string) => {
    const blocks = content.split("\n\n");
    return blocks.map((block, i) => {
      // Heading
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-xl sm:text-2xl font-bold text-dark-text mt-8 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }

      // Code block
      if (block.startsWith("```")) {
        const lines = block.split("\n");
        const lang = lines[0].replace("```", "");
        const code = lines.slice(1, -1).join("\n");
        return (
          <pre
            key={i}
            className="bg-dark-text text-gray-200 rounded-xl p-5 overflow-x-auto my-6 text-sm leading-relaxed"
          >
            {lang && (
              <span className="text-xs text-gray-500 block mb-2 uppercase">
                {lang}
              </span>
            )}
            <code>{code}</code>
          </pre>
        );
      }

      // Numbered list
      if (block.match(/^\d+\./m)) {
        const items = block.split("\n").filter((l) => l.trim());
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="text-muted leading-relaxed">
                {item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
              </li>
            ))}
          </ol>
        );
      }

      // Bullet list
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.trim());
        return (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li
                key={j}
                className="text-muted leading-relaxed flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-acm-blue mt-2 shrink-0" />
                {item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1")}
              </li>
            ))}
          </ul>
        );
      }

      // Regular paragraph
      return (
        <p key={i} className="text-muted leading-relaxed my-4">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-acm-blue transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${catColor.bg} ${catColor.text} mb-4`}
          >
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-text tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-muted">
            <span className="font-medium text-dark-text">{post.author}</span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <article className="prose-custom">{renderContent(post.content)}</article>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-acm-blue hover:text-acm-blue-dark transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
