import { Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          <div>
            <span className="font-display text-lg tracking-widest uppercase text-foreground">LAI GROUP</span>
            <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed">
              Plan · Design · Engineer · Construct
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-1">
              Florida · South Carolina · Nationwide
            </p>
          </div>

          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Location</p>
            <p className="font-sans text-sm text-foreground leading-relaxed">
              9911 Corkscrew Road #202<br />
              Estero, Florida 33928
            </p>
            <a href="tel:+12394056888" className="font-sans text-sm text-foreground hover:text-primary transition-colors mt-2 inline-block">
              239-405-6888
            </a>
          </div>

          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Navigate</p>
            <div className="flex flex-col space-y-2">
              {[
                { name: "Our Work", href: "/work" },
                { name: "About", href: "/about" },
                { name: "Team", href: "/team" },
                { name: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.name} href={l.href}>
                  <span className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{l.name}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="border-y border-border py-7 mb-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_3fr] md:gap-12">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground">Licensing</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { state: "FL", licenses: "#CA-28421  #AR95581" },
                { state: "LA", licenses: "#AF0841" },
                { state: "NC", licenses: "#53876" },
                { state: "SC", licenses: "#101758" },
                { state: "TN", licenses: "#5482" },
              ].map((license) => (
                <div key={license.state}>
                  <p className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-foreground mb-1.5">{license.state}</p>
                  <p className="font-sans text-xs leading-relaxed text-muted-foreground">{license.licenses}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-0 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/laigroupfl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/lai-design-associates-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <p className="font-sans text-xs text-muted-foreground tracking-wide">
              © {new Date().getFullYear()} LAI Group
            </p>
          </div>
          <a
            href="https://www.carmonacreations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] text-muted-foreground/60 hover:text-muted-foreground transition-colors tracking-[0.12em]"
          >
            Crafted by Carmona Creations LLC
          </a>
        </div>

      </div>
    </footer>
  );
}
