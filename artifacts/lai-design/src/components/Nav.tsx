import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Our Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navBg = isHome
    ? isScrolled
      ? "bg-background/92 backdrop-blur-xl shadow-sm shadow-black/5 py-4"
      : "bg-transparent py-6"
    : "bg-background/95 backdrop-blur-xl shadow-sm shadow-black/5 py-4 border-b border-border";

  const logoColor = isHome && !isScrolled ? "text-white" : "text-foreground";
  const linkColor = isHome && !isScrolled ? "text-white/90 hover:text-white" : "text-foreground/70 hover:text-foreground";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <span className={`font-sans text-sm font-semibold tracking-[0.26em] uppercase cursor-pointer transition-colors duration-300 ${logoColor}`}>
              LAI Design Associates
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const active = location === link.href;
              return (
                <Link key={link.name} href={link.href}>
                  <span className={`font-sans text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-colors duration-300 relative pb-1 ${linkColor} ${active ? "after:scale-x-100" : "after:scale-x-0"} after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <button
            className={`md:hidden transition-colors ${isHome && !isScrolled ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — sibling of nav so backdrop-blur on nav doesn't trap it */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-7 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="absolute top-7 left-6">
              <span className="font-sans text-sm font-semibold tracking-[0.26em] uppercase text-foreground">LAI Design Associates</span>
            </div>
            <div className="flex flex-col items-center space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link href={link.href}>
                    <span className="font-display text-4xl tracking-widest uppercase text-foreground hover:text-primary transition-colors cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
