// ---------- generic renderer ----------

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ---------- pre-built schemas ----------

const SITE_URL = "https://srmap.hosting.acm.org";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ACM Student Chapter — SRM University AP",
        url: SITE_URL,
        logo: `${SITE_URL}/acm-logo.png`,
        description:
          "The official ACM Student Chapter at SRM University AP — accelerating innovation in computing through events, workshops, hackathons, and a professional computing community.",
        sameAs: [
          "https://www.linkedin.com/company/srm-ap-acm",
          "https://www.instagram.com/acmsrmap.studentchapter",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "acm.core@srmap.edu.in",
          contactType: "General Inquiry",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Association for Computing Machinery",
          url: "https://www.acm.org",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "SRM University AP, Neerukonda",
          addressLocality: "Mangalagiri",
          addressRegion: "Andhra Pradesh",
          postalCode: "522240",
          addressCountry: "IN",
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ACM Student Chapter — SRM University AP",
        url: SITE_URL,
        publisher: {
          "@type": "Organization",
          name: "ACM Student Chapter — SRM University AP",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/acm-logo.png`,
          },
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_URL}${item.href}`,
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  author,
  datePublished,
}: {
  title: string;
  description: string;
  slug: string;
  author: string;
  datePublished: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: `${SITE_URL}/blog/${slug}/`,
        author: {
          "@type": "Person",
          name: author,
        },
        datePublished,
        publisher: {
          "@type": "Organization",
          name: "ACM Student Chapter — SRM University AP",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/acm-logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${slug}/`,
        },
      }}
    />
  );
}
