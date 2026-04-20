export type BlogCategory = "Tech Insights" | "Event Coverage" | "Tutorials";

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  coverColor: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-web-development-2026",
    title: "The Future of Web Development in 2026: Trends Every Student Should Know",
    category: "Tech Insights",
    author: "Arjun Mehta",
    date: "April 10, 2026",
    readTime: "8 min read",
    excerpt:
      "From server components to AI-assisted coding, the web development landscape is shifting faster than ever. Here's what every aspiring developer needs to know to stay ahead of the curve.",
    content: `The web development ecosystem in 2026 looks dramatically different from just a few years ago. With the maturation of React Server Components, the rise of edge computing, and AI-powered development tools becoming mainstream, students entering the field today have both incredible opportunities and important choices to make.

## Server Components Are Now the Default

React Server Components have moved from experimental to the default architecture in most modern frameworks. Next.js, Remix, and others have fully embraced this paradigm, and for good reason — the performance gains are substantial.

Server Components allow you to render components on the server, sending only the HTML to the client. This means smaller JavaScript bundles, faster initial page loads, and better SEO out of the box.

## AI-Assisted Development

Tools like GitHub Copilot, Cursor, and various AI coding assistants have evolved from novelty to necessity. The key skill is no longer just writing code — it's knowing how to effectively prompt and collaborate with AI tools to accelerate development.

However, understanding fundamentals remains critical. AI tools are most effective when the developer has deep knowledge of the underlying technologies and can evaluate, debug, and optimize the generated code.

## Edge Computing Goes Mainstream

Edge functions and edge databases have made it possible to deploy globally distributed applications with minimal latency. Platforms like Vercel, Cloudflare Workers, and Deno Deploy have made this accessible even to individual developers and student projects.

## What Students Should Focus On

1. **TypeScript** — Type safety is now expected, not optional
2. **Server-side rendering patterns** — Understanding SSR, SSG, and ISR
3. **Database design** — SQL fundamentals and ORMs like Prisma and Drizzle
4. **System design basics** — Even for frontend developers
5. **AI tool proficiency** — Learn to leverage AI effectively

The best time to start building is now. Join our workshops and bootcamps to get hands-on experience with these technologies.`,
    coverColor: "#1565C0",
  },
  {
    slug: "responsible-ai-symposium-recap",
    title: "Inside the Responsible AI Symposium: Key Moments and Takeaways",
    category: "Event Coverage",
    author: "Kavya Nair",
    date: "March 25, 2026",
    readTime: "6 min read",
    excerpt:
      "A comprehensive recap of our flagship AI conference — featuring highlights from keynote sessions, panel discussions, and the student hackathon that brought ethical AI concepts to life.",
    content: `Our Responsible AI Symposium brought together over 300 attendees from across the university and industry partners for two days of deep discussions on the future of ethical AI development.

## Day 1: Setting the Stage

The symposium kicked off with a powerful keynote on "AI Governance in the Age of Large Language Models" that highlighted the growing need for frameworks that ensure AI systems are fair, transparent, and accountable.

The panel discussion on bias in machine learning featured perspectives from researchers, industry practitioners, and policy advocates. Key themes included the importance of diverse training data, the role of human oversight in AI decision-making, and the need for standardized auditing procedures.

## Day 2: Hands-On Learning

The second day focused on practical workshops where participants got hands-on experience with fairness-aware ML tools. Teams worked on real datasets to identify and mitigate bias, learning techniques like adversarial debiasing, calibrated equalized odds, and fairness constraints in model training.

## Student Hackathon Results

The 6-hour mini-hackathon challenged teams to build responsible AI prototypes. The winning team created an automated bias detection tool for hiring algorithms that evaluates candidate scoring models across multiple demographic dimensions.

## Looking Ahead

The success of this symposium has reinforced our commitment to responsible computing education. We're already planning follow-up workshops and a semester-long reading group on AI ethics.`,
    coverColor: "#FFC107",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js: A Beginner's Guide to Modern React",
    category: "Tutorials",
    author: "Rohit Sharma",
    date: "March 15, 2026",
    readTime: "12 min read",
    excerpt:
      "Step-by-step guide to building your first Next.js application — from project setup to deployment. Perfect for students transitioning from vanilla React to a production-ready framework.",
    content: `Next.js has become the go-to framework for building production-ready React applications. In this tutorial, we'll walk through everything you need to know to get started.

## Prerequisites

Before diving in, make sure you have:
- Node.js 18+ installed
- Basic understanding of React (components, props, state)
- Familiarity with JavaScript/TypeScript

## Setting Up Your Project

Creating a new Next.js project is straightforward:

\`\`\`bash
npx create-next-app@latest my-first-app --typescript --tailwind --app
cd my-first-app
npm run dev
\`\`\`

This creates a new project with TypeScript, Tailwind CSS, and the App Router — the recommended configuration for new projects in 2026.

## Understanding the App Router

The App Router uses a file-system based routing approach. Every folder inside \`src/app/\` becomes a route, and a \`page.tsx\` file inside that folder defines the page component.

## Server vs Client Components

By default, all components in the App Router are Server Components. If you need interactivity (event handlers, state, effects), add the \`"use client"\` directive at the top of your file.

## Fetching Data

Server Components can fetch data directly — no useEffect needed:

\`\`\`tsx
async function BlogPage() {
  const posts = await fetch('https://api.example.com/posts');
  return <div>{/* render posts */}</div>;
}
\`\`\`

## Deploying to Vercel

Deployment is as simple as pushing to GitHub and connecting your repo to Vercel. The platform automatically detects Next.js and configures everything for optimal performance.

## Next Steps

Once you're comfortable with the basics, explore:
- Dynamic routes and route groups
- Server Actions for form handling
- Middleware for authentication
- Image optimization with next/image

Happy coding! Join our next Web Dev Bootcamp for hands-on mentorship.`,
    coverColor: "#1E88E5",
  },
  {
    slug: "competitive-programming-roadmap",
    title: "The Complete Competitive Programming Roadmap for Beginners",
    category: "Tech Insights",
    author: "Prateek Joshi",
    date: "February 28, 2026",
    readTime: "10 min read",
    excerpt:
      "A structured 6-month roadmap to go from zero to competitive programming proficiency — curated by our Foundry domain leads with resources, problem sets, and weekly targets.",
    content: `Competitive programming (CP) is one of the best ways to sharpen your problem-solving skills and prepare for technical interviews. Here's our recommended roadmap, designed for students with basic programming knowledge.

## Month 1-2: Foundations

Focus on understanding basic data structures and implementing them from scratch:
- Arrays, Strings, and Matrices
- Linked Lists, Stacks, and Queues
- Basic Sorting and Searching algorithms
- Time and Space complexity analysis (Big O)

**Weekly target:** 15-20 easy problems on LeetCode/Codeforces

## Month 3-4: Intermediate Concepts

Build on your foundation with more complex structures and algorithms:
- Trees and Binary Search Trees
- Graphs (BFS, DFS, shortest paths)
- Dynamic Programming (1D and 2D)
- Greedy algorithms
- Two pointers and sliding window

**Weekly target:** 10-15 medium problems

## Month 5-6: Advanced Topics

Push into contest-level problem solving:
- Segment Trees and Binary Indexed Trees
- Advanced graph algorithms (network flow, strongly connected components)
- String algorithms (KMP, Z-algorithm, Trie)
- Number theory and combinatorics
- Advanced DP patterns

**Weekly target:** 5-10 hard problems + 1 virtual contest

## Resources We Recommend

1. **CSES Problem Set** — Comprehensive and well-structured
2. **Codeforces** — Best for contests and editorial quality
3. **CP-Algorithms** — Excellent reference for algorithm implementations
4. **LeetCode** — Best for interview preparation overlap

## Join Our CP Study Group

Our Foundry domain runs weekly CP sessions every Saturday. Drop by to practice with peers, discuss approaches, and learn from experienced competitive programmers.`,
    coverColor: "#0D47A1",
  },
];
