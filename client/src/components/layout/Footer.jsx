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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                }}
              >
                SN
              </div>
              <div>
                <div className="font-display font-bold text-white">
                  {PROFILE.name}
                </div>
                <div className="text-xs text-slate-500">{PROFILE.title}</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-5 max-w-xs">
              Final-year B.Tech CSE student at Nirma University. Building
              production-ready web & AI systems. Open to full-time SDE roles in
              2026.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              {SOCIAL.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl border text-slate-500 transition-all ${color}`}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs text-slate-500 hover:text-blue-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-start gap-2 text-xs text-slate-500 hover:text-blue-400 transition-colors"
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0" />
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-xs text-slate-500 hover:text-white transition-colors"
                >
                  <Github size={13} className="mt-0.5 flex-shrink-0" />
                  github.com/Sarth00718
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-xs text-slate-500 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={13} className="mt-0.5 flex-shrink-0" />
                  sarth-narola-223002323
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                Surat, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-slate-600">
            © {YEAR} {PROFILE.name} · All rights reserved
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-600">
            Built with <Code2 size={11} className="text-blue-500" /> React +
            Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
