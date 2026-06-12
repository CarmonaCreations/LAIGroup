import { Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

const companyLinks = [
  { name: "LAI Companies", href: "/companies" },
  { name: "Design", href: "/" },
  { name: "Construction", href: "/companies#lai-construction" },
  { name: "Civil", href: "/companies#lai-civil" },
  { name: "Contact", href: "/contact" },
];

const licenseDetails = [
  { state: "Florida", detail: "License number pending client confirmation" },
  { state: "South Carolina", detail: "License number pending client confirmation" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <span className="font-sans text-sm font-semibold uppercase tracking-[0.26em] text-foreground">LAI Design Associates</span>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
              Architecture / Planning / Technical Coordination
            </p>
            <p className="mt-1 font-sans text-sm text-muted-foreground">
              Connected with LAI Construction and LAI Civil
            </p>
          </div>

          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">Studio</p>
            <p className="font-sans text-sm leading-relaxed text-foreground">
              9911 Corkscrew Road #202<br />
              Estero, Florida 33928
            </p>
            <a href="tel:+12394056888" className="mt-2 inline-block font-sans text-sm text-foreground transition-colors hover:text-primary">
              239-405-6888
            </a>
          </div>

          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">LAI Companies</p>
            <div className="flex flex-col space-y-2">
              {companyLinks.map((link) =>
                link.href.startsWith("http") ? (
                  <a key={link.name} href={link.href} className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} href={link.href}>
                    <span className="cursor-pointer font-sans text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.name}
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mb-8 border-y border-border py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">Licensing</p>
              <p className="mt-2 max-w-2xl font-sans text-xs leading-6 text-muted-foreground">
                Professional license and certificate information can be listed here for states that require public website disclosure.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:min-w-[420px]">
              {licenseDetails.map((license) => (
                <div key={license.state}>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-foreground">{license.state}</p>
                  <p className="mt-1 font-sans text-xs leading-5 text-muted-foreground">{license.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/laigroupfl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/company/lai-design-associates-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <p className="font-sans text-xs tracking-wide text-muted-foreground">
              (c) {new Date().getFullYear()} LAI Design Associates
            </p>
          </div>
          <a
            href="https://www.carmonacreations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] tracking-[0.12em] text-muted-foreground/60 transition-colors hover:text-muted-foreground"
          >
            Crafted by Carmona Creations LLC
          </a>
        </div>
      </div>
    </footer>
  );
}
