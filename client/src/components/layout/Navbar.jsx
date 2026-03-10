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

  const navBg = scrolled
    ? isDark
      ? "rgba(10,15,30,0.95)"
      : "rgba(248,250,252,0.95)"
    : "transparent";

  const navBorder = scrolled
    ? isDark
      ? "1px solid rgba(255,255,255,0.07)"
      : "1px solid rgba(0,0,0,0.07)"
    : "1px solid transparent";

  return (
    <>
      {/* Skip to main content — Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)" }}
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: navBg,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: navBorder,
                boxShadow: isDark
                  ? "0 4px 24px rgba(0,0,0,0.3)"
                  : "0 4px 24px rgba(0,0,0,0.06)",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between"
            style={{ height: "64px" }}
          >
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5"
              aria-label="Scroll to top"
            >
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-black text-white flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                }}
              >
                SN
              </div>
              <div className="hidden xs:block text-left">
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontFamily: "'Outfit', 'Inter', sans-serif",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Sarth Narola
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.2,
                  }}
                >
                  Full Stack · AI/ML
                </div>
              </div>
            </motion.button>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    title={item.title}
                    className="relative rounded-lg transition-all duration-200"
                    style={{
                      padding: "6px 14px",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: isActive ? "#60a5fa" : "var(--text-secondary)",
                      background: isActive
                        ? "rgba(37,99,235,0.1)"
                        : "transparent",
                    }}
                    aria-label={`Navigate to ${item.title || item.label}`}
                    aria-current={isActive ? "page" : undefined}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        e.currentTarget.style.background = isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
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
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Social icons — hidden on mobile */}
              <div className="hidden md:flex items-center gap-1">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <Github size={16} />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60a5fa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <Linkedin size={16} />
                </a>
              </div>

              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all"
                style={{
                  borderColor: "var(--border-glass)",
                  background: "var(--bg-card)",
                  color: isDark ? "#fbbf24" : "#1d4ed8",
                }}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </motion.button>

              {/* Resume button */}
              <a
                href="/resume.pdf"
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.02em",
                }}
                aria-label="Download Resume"
              >
                Resume ↓
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                style={{
                  color: "var(--text-secondary)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-glass)",
                }}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={17} /> : <Menu size={17} />}
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
            className="fixed top-16 left-0 right-0 z-40 lg:hidden overflow-y-auto"
            style={{
              maxHeight: "calc(100vh - 4rem)",
              background: isDark
                ? "rgba(10,15,30,0.98)"
                : "rgba(248,250,252,0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: isDark
                ? "1px solid rgba(255,255,255,0.07)"
                : "1px solid rgba(0,0,0,0.07)",
            }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-5 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="w-full text-left px-4 py-3.5 rounded-xl transition-all"
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: isActive ? "#60a5fa" : "var(--text-secondary)",
                      background: isActive
                        ? "rgba(37,99,235,0.1)"
                        : "transparent",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.title || item.label}
                  </button>
                );
              })}

              {/* Mobile social + resume */}
              <div
                className="flex flex-wrap gap-4 pt-4 px-4 mt-2 border-t"
                style={{ borderColor: "var(--border-glass)" }}
              >
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors"
                  style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
                  aria-label="GitHub Profile"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors"
                  style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
                  aria-label="LinkedIn Profile"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60a5fa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-1.5 transition-colors"
                  style={{ fontSize: "0.875rem", color: "#60a5fa" }}
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
