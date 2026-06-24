import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between border px-4 py-3 transition-all duration-300 md:px-5 ${
            isScrolled
              ? "border-white/80 bg-white/86 shadow-[0_18px_60px_rgba(16,72,102,0.12)] backdrop-blur-xl"
              : "border-white/58 bg-white/54 backdrop-blur-md"
          }`}
        >
          <Link href="/">
            <span className="inline-flex cursor-pointer items-center gap-3">
              <BrandMark className="h-9 w-9" />
              <span>
                <span className="block font-sans text-[11px] font-extrabold uppercase tracking-[0.24em] text-foreground">
                  LAI
                </span>
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Design Associates
                </span>
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const active = location === link.href;

              return (
                <Link key={link.name} href={link.href}>
                  <span
                    className={`cursor-pointer px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.17em] transition-colors ${
                      active ? "bg-primary text-primary-foreground" : "text-foreground/68 hover:bg-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center border border-border bg-white text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex flex-col bg-[#e9f4f7] px-6 py-6 text-foreground"
          >
            <div className="flex items-center justify-between">
              <Link href="/">
                <span className="inline-flex cursor-pointer items-center gap-3">
                  <BrandMark className="h-10 w-10" />
                  <span className="font-sans text-xs font-extrabold uppercase tracking-[0.22em]">LAI Design</span>
                </span>
              </Link>
              <button
                className="flex h-11 w-11 items-center justify-center border border-border bg-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-20 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link href={link.href}>
                    <span className="block border-b border-border py-5 font-display text-5xl text-foreground">
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
