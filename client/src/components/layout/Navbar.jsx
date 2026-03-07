import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Github, Linkedin } from "lucide-react";
import { useTheme } from "@context/ThemeContext";
import { PROFILE } from "@data/achievements";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathon" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  {
    label: "CP",
    href: "#competitive-programming",
    title: "Competitive Programming",
  },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting);
        if (vis.length) setActiveHash("#" + vis[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href) => {
    setMobileOpen(false);
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const glassBg = scrolled
    ? isDark
      ? "rgba(10,15,30,0.92)"
      : "rgba(248,250,252,0.92)"
    : "transparent";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: glassBg,
                backdropFilter: "blur(16px)",
                borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 sm:gap-2.5"
              aria-label="Scroll to top"
            >
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                }}
              >
                SN
              </div>
              <div className="hidden xs:block text-left">
                <div
                  className="text-xs sm:text-sm font-bold font-display leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Sarth Narola
                </div>
                <div
                  className="text-[10px] sm:text-xs leading-tight"
                  style={{ color: "var(--text-muted)" }}
                >
                  Full Stack · AI
                </div>
              </div>
            </motion.button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    title={item.title}
                    className="relative px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:bg-white/5"
                    style={{
                      color: isActive ? "#93c5fd" : "var(--text-secondary)",
                      background: isActive
                        ? "rgba(37,99,235,0.1)"
                        : "transparent",
                    }}
                    aria-label={`Navigate to ${item.title || item.label}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full"
                        style={{
                          background: "linear-gradient(90deg,#1d4ed8,#2563eb)",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {/* Social icons - hidden on mobile */}
              <div className="hidden md:flex items-center gap-0.5">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                  className="w-8 h-8 flex items-center justify-center rounded-lg transition-all hover:bg-white/5"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <Github size={15} />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                  className="w-8 h-8 flex items-center justify-center rounded-lg transition-all hover:bg-white/5"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60a5fa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <Linkedin size={15} />
                </a>
              </div>

              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border transition-all"
                style={{
                  borderColor: "var(--border-glass)",
                  background: "var(--bg-card)",
                }}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <Sun size={13} className="sm:w-3.5 sm:h-3.5 text-amber-400" />
                ) : (
                  <Moon size={13} className="sm:w-3.5 sm:h-3.5 text-blue-600" />
                )}
              </motion.button>

              {/* Resume - hidden on smallest screens */}
              <a
                href="/resume.pdf"
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-semibold text-white transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                }}
                aria-label="Download Resume"
              >
                Resume
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg transition-all"
                style={{
                  color: "var(--text-secondary)",
                  background: "var(--bg-card)",
                }}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 lg:hidden max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto"
            style={{
              background: isDark
                ? "rgba(10,15,30,0.97)"
                : "rgba(248,250,252,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
            }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                    style={{
                      color: isActive ? "#93c5fd" : "var(--text-secondary)",
                      background: isActive ? "rgba(37,99,235,0.1)" : "transparent",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.title || item.label}
                  </button>
                );
              })}
              {/* Mobile social */}
              <div
                className="flex flex-wrap gap-3 pt-3 px-4 border-t mt-2"
                style={{ borderColor: "var(--border-glass)" }}
              >
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs hover:text-white transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="GitHub Profile"
                >
                  <Github size={13} /> GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs hover:text-blue-400 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={13} /> LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  aria-label="Download Resume"
                >
                  Resume ↓
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
