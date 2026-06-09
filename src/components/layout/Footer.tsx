import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blogs" },
  { href: "/team", label: "Core Team" },
  { href: "/join", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/srm-ap-acm", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://www.instagram.com/acmsrmap.studentchapter", icon: InstagramIcon, label: "Instagram" },
  { href: "mailto:acm.core@srmap.edu.in", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/acm-logo.png"
                alt="ACM Logo"
                width={36}
                height={36}
                unoptimized
              />
              <div>
                <h3 className="font-display text-lg font-bold">ACM Student Chapter</h3>
                <p className="text-sm text-gray-400">SRM University AP</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Accelerating innovation in computing — connecting students with
              cutting-edge technology, hands-on learning, and a professional
              computing community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-acm-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-gray-400 hover:bg-acm-blue hover:text-white transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              acm.core@srmap.edu.in
            </p>
            <p className="text-sm text-gray-400 mt-1">
              SRM University AP, Neerukonda, Andhra Pradesh
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ACM Student Chapter, SRM University AP. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>A chapter of</span>
            <a
              href="https://www.acm.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-acm-yellow hover:underline font-medium"
            >
              Association for Computing Machinery
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
