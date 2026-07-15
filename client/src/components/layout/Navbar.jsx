import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Github, Linkedin, Download } from "lucide-react";
import { useTheme } from "@context/ThemeContext";
import { PROFILE } from "@data/achievements";

const NAV_ITEMS = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Hacks",    href: "#hackathon", title: "Hackathons" },
  { label: "Wins",     href: "#achievements", title: "Achievements" },
  { label: "Certs",    href: "#certificates", title: "Certificates" },
  { label: "CP",       href: "#competitive-programming", title: "Competitive Programming" },
  { label: "Contact",  href: "#contact" },
];

const navSpring = { type: "spring", stiffness: 200, damping: 25, mass: 0.5 };

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [atTop, setAtTop] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setAtTop(y < 10);
      setLastScroll(y);
    };
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
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const navHeight = scrolled ? "h-14" : "h-16";
  const logoSize = scrolled ? "w-7 h-7" : "w-8 h-8";
  const logoText = scrolled ? "hidden" : "hidden sm:block";

  const navBg = scrolled
    ? isDark ? "rgba(5,8,15,0.88)" : "rgba(250,251,253,0.88)"
    : "transparent";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-white focus:outline-none"
        style={{ background: "linear-gradient(135deg,#3b82f6,#2563eb)" }}
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          animate={{
            height: scrolled ? 56 : 64,
            background: navBg,
            backdropFilter: scrolled ? "blur(28px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(28px)" : "blur(0px)",
            borderBottom: scrolled
              ? isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(59,130,246,0.08)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? isDark ? "0 4px 32px rgba(0,0,0,0.4)" : "0 4px 32px rgba(59,130,246,0.05)"
              : "0 4px 32px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 no-min-size"
            aria-label="Go to top"
          >
            <motion.div
              layout
              transition={navSpring}
              className={`${logoSize} rounded-lg flex items-center justify-center font-display font-black text-xs`}
              style={{
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(59,130,246,0.35)",
              }}
            >
              SN
            </motion.div>
            <AnimatePresence>
              {!scrolled && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="font-display font-bold text-sm"
                  style={{
                    letterSpacing: "-0.03em",
                    color: isDark ? "#e8ecf4" : "#0f0f1a",
                  }}
                >
                  Sarth Narola
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <motion.button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  title={item.title || item.label}
                  className="relative px-2.5 py-2 rounded-lg text-xs font-medium transition-colors no-min-size"
                  style={{
                    color: isActive
                      ? "#60a5fa"
                      : isDark ? "#8892a4" : "#6b7280",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#60a5fa" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-1.5">
            {/* Social icons — desktop only */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { icon: Github, href: PROFILE.github, label: "GitHub" },
                { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
              ].map((item) => {
                const SocialIcon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.1, y: -1 }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg no-min-size transition-colors"
                    style={{ color: isDark ? "#64748b" : "#9ca3af" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#64748b" : "#9ca3af"; }}
                  >
                    <SocialIcon size={15} />
                  </motion.a>
                );
              })}
            </div>

            {/* Resume CTA */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold no-min-size"
              style={{
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.22)",
                color: "#60a5fa",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.18)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.1)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.22)";
              }}
              aria-label="Download Resume"
            >
              <Download size={12} />
              Resume
            </motion.a>

            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg no-min-size relative"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(59,130,246,0.06)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(59,130,246,0.12)"}`,
              }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Sun size={14} style={{ color: "#60a5fa" }} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Moon size={14} style={{ color: "#6b7280" }} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg no-min-size"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(59,130,246,0.06)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(59,130,246,0.12)"}`,
                color: isDark ? "#8892a4" : "#6b7280",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t"
              style={{
                background: isDark ? "rgba(5,8,15,0.98)" : "rgba(250,251,253,0.98)",
                backdropFilter: "blur(24px)",
                borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(59,130,246,0.08)",
              }}
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = activeHash === item.href;
                  return (
                    <motion.button
                      key={item.label}
                      onClick={() => scrollTo(item.href)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium no-min-size"
                      style={{
                        color: isActive ? "#60a5fa" : isDark ? "#8892a4" : "#6b7280",
                        background: isActive ? "rgba(59,130,246,0.08)" : "transparent",
                        fontFamily: "'Inter', sans-serif",
                        borderLeft: isActive ? "2px solid #60a5fa" : "2px solid transparent",
                      }}
                    >
                      <span>{item.title || item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "#60a5fa" }}
                        />
                      )}
                    </motion.button>
                  );
                })}
                <div className="pt-2 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(59,130,246,0.08)" }}>
                  <a
                    href="/resume.pdf"
                    download
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold mt-2"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                      color: "#fff",
                    }}
                  >
                    <Download size={14} />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
