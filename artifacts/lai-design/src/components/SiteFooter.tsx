import { Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { BrandMark } from "@/components/BrandMark";

const footerLinks = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const connectedCompanies = [
  { name: "LAI Design Associates", href: "/" },
  { name: "LAI Construction", href: "#" },
  { name: "LAI Civil", href: "#" },
];

const licenseDetails = [
  { state: "Florida", detail: "License number pending client confirmation" },
  { state: "Louisiana", detail: "License number pending client confirmation" },
  { state: "North Carolina", detail: "License number pending client confirmation" },
  { state: "South Carolina", detail: "License number pending client confirmation" },
  { state: "Tennessee", detail: "License number pending client confirmation" },
  { state: "Wisconsin", detail: "License number pending client confirmation" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#d8edf3]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <BrandMark className="mb-6 h-16 w-16" />
            <p className="font-display text-3xl leading-tight text-foreground md:text-4xl">LAI Design Associates</p>
            <p className="mt-4 max-w-md font-sans text-sm leading-7 text-muted-foreground">
              Architecture, documentation, and technical coordination backed by LAI construction and civil insight.
            </p>
          </div>

          <div>
            <p className="mb-4 font-sans text-[10px] font-extrabold uppercase tracking-[0.26em] text-primary">Studio</p>
            <p className="font-sans text-sm leading-7 text-foreground">
              9911 Corkscrew Road #202<br />
              Estero, Florida 33928
            </p>
            <a href="tel:+12394056888" className="mt-3 inline-block font-sans text-sm font-bold text-primary transition-colors hover:text-foreground">
              239-405-6888
            </a>
            <div className="mt-5 flex gap-3">
              <a href="https://www.instagram.com/laigroupfl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-white/70 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/lai-design-associates-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-white/70 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-sans text-[10px] font-extrabold uppercase tracking-[0.26em] text-primary">Pages</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span className="cursor-pointer font-sans text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-primary/18 md:grid-cols-3">
          {connectedCompanies.map((company) => (
            <Link key={company.name} href={company.href}>
              <span className="block cursor-pointer bg-white/66 p-5 font-sans text-xs font-extrabold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-white hover:text-primary">
                {company.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 border-y border-primary/18 py-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-sans text-[10px] font-extrabold uppercase tracking-[0.26em] text-primary">Licensing</p>
              <p className="mt-2 max-w-2xl font-sans text-xs leading-6 text-muted-foreground">
                Professional license and certificate information can be listed here for states that require public website disclosure.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:min-w-[430px]">
              {licenseDetails.map((license) => (
                <div key={license.state} className="bg-white/66 p-4">
                  <p className="font-sans text-xs font-extrabold uppercase tracking-[0.18em] text-foreground">{license.state}</p>
                  <p className="mt-1 font-sans text-xs leading-5 text-muted-foreground">{license.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-sans text-xs tracking-wide text-muted-foreground">
            (c) {new Date().getFullYear()} LAI Design Associates
          </p>
          <a
            href="https://www.carmonacreations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] tracking-[0.12em] text-muted-foreground/70 transition-colors hover:text-primary"
          >
            Crafted by Carmona Creations LLC
          </a>
        </div>
      </div>
    </footer>
  );
}



