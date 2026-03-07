import { Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";
import { PROFILE } from "@data/achievements";

const YEAR = new Date().getFullYear();

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathon" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Competitive Programming", href: "#competitive-programming" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  {
    icon: Github,
    href: PROFILE.github,
    label: "GitHub",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    href: PROFILE.linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    href: `mailto:${PROFILE.email}`,
    label: "Email",
    color: "hover:text-blue-400",
  },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className="border-t"
      style={{
        background: "rgba(8,12,25,0.97)",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-black text-white text-sm"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                }}
              >
                SN
              </div>
              <div>
                <div className="font-display font-bold text-white text-base sm:text-lg">
                  {PROFILE.name}
                </div>
                <div className="text-xs sm:text-sm text-slate-500">{PROFILE.title}</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 sm:mb-5 max-w-md">
              Final-year B.Tech CSE student at Nirma University. Building
              production-ready web & AI systems. Open to full-time SDE roles in
              2026.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2 sm:gap-2.5">
              {SOCIAL.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl border text-slate-500 transition-all ${color}`}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Icon size={16} className="sm:w-[17px] sm:h-[17px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest mb-3 sm:mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs sm:text-sm text-slate-500 hover:text-blue-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest mb-3 sm:mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 hover:text-blue-400 transition-colors break-all"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" />
                  <span className="break-all">{PROFILE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 hover:text-white transition-colors"
                >
                  <Github size={14} className="mt-0.5 flex-shrink-0" />
                  <span className="break-all">github.com/Sarth00718</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={14} className="mt-0.5 flex-shrink-0" />
                  <span className="break-all">sarth-narola-223002323</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Surat, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-5 sm:pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs sm:text-sm text-slate-600">
            © {YEAR} {PROFILE.name} · All rights reserved
          </p>
          <p className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600">
            Built with <Code2 size={12} className="text-blue-500" /> React +
            Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
