import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, DraftingCompass, HardHat, Route } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

const companies = [
  {
    name: "Design Associates",
    label: "Architecture",
    href: "/work",
    Icon: DraftingCompass,
    position: "left-1/2 top-0 -translate-x-1/2",
    active: true,
  },
  {
    name: "Construction",
    label: "Delivery",
    href: "#construction-preview",
    Icon: HardHat,
    position: "bottom-0 left-0",
    active: false,
  },
  {
    name: "Civil",
    label: "Sitework",
    href: "#civil-preview",
    Icon: Route,
    position: "bottom-0 right-0",
    active: false,
  },
];

function CompanyCard({ company, compact = false }: { company: (typeof companies)[number]; compact?: boolean }) {
  const { name, label, href, Icon, active } = company;
  const content = (
    <span className={`group block h-full border text-left shadow-[0_16px_48px_rgba(52,80,164,0.12)] backdrop-blur transition-transform hover:-translate-y-1 ${compact ? "p-4" : "p-5"} ${active ? "border-primary bg-white" : "border-white/80 bg-white/78"}`}>
      <span className="mb-3 flex items-center justify-between gap-4">
        <Icon className={`h-5 w-5 ${active ? "text-primary" : "text-[#3947a7]"}`} />
        <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      </span>
      <span className={`${compact ? "text-xl" : "text-2xl"} block font-display leading-tight text-foreground`}>{name}</span>
      <span className="mt-4 inline-flex items-center gap-2 font-sans text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
        {active ? "View Design" : "Preview Link"} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </span>
  );

  return active ? (
    <Link href={href}>{content}</Link>
  ) : (
    <a href={href} onClick={(event) => event.preventDefault()} aria-disabled="true">
      {content}
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f2fbff] px-6 pb-12 pt-28 text-foreground md:pb-16 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_52%_18%,rgba(77,188,235,0.22),transparent_34%),radial-gradient(circle_at_12%_74%,rgba(59,70,167,0.1),transparent_30%),linear-gradient(180deg,#ffffff_0%,#eef9fd_58%,#e8f4fb_100%)]" />
      <div className="absolute right-[5%] top-20 -z-10 h-[34rem] w-[34rem] rotate-45 border border-[#51bceb]/16" />
      <div className="absolute right-[12%] top-36 -z-10 h-[22rem] w-[22rem] rotate-45 border border-[#3947a7]/10" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-center lg:text-left"
        >
          <BrandMark className="mx-auto mb-6 h-20 w-20 drop-shadow-[0_18px_28px_rgba(52,80,164,0.16)] md:h-24 md:w-24 lg:mx-0" />
          <p className="mb-4 font-sans text-[11px] font-extrabold uppercase tracking-[0.34em] text-primary">Architectural Design Studio</p>
          <h1 className="font-display text-[clamp(3.5rem,7.4vw,6.9rem)] font-extrabold leading-[0.88] tracking-[-0.075em] text-foreground">
            LAI Design Associates
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-8 text-muted-foreground md:text-lg lg:mx-0">
            Architecture for complex work, connected to build and site intelligence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href="/work">
              <span className="inline-flex cursor-pointer items-center justify-center gap-2 bg-primary px-6 py-4 font-sans text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[#348fc4]">
                Explore Projects <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex cursor-pointer items-center justify-center gap-2 border border-primary/25 bg-white/74 px-6 py-4 font-sans text-xs font-extrabold uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary hover:bg-white">
                Contact LAI
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[720px]"
        >
          <div className="hidden md:block">
            <div className="relative h-[430px]">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 430" aria-hidden="true">
                <defs>
                  <linearGradient id="laiTriangleStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#55b9e8" />
                    <stop offset="100%" stopColor="#3947a7" />
                  </linearGradient>
                </defs>
                <path d="M360 54 L112 356 L608 356 Z" fill="rgba(255,255,255,0.46)" stroke="url(#laiTriangleStroke)" strokeWidth="3" />
                <path d="M360 54 L112 356" stroke="rgba(57,71,167,0.22)" strokeWidth="2" strokeDasharray="8 10" />
                <path d="M360 54 L608 356" stroke="rgba(57,71,167,0.22)" strokeWidth="2" strokeDasharray="8 10" />
                <path d="M112 356 L608 356" stroke="rgba(57,71,167,0.22)" strokeWidth="2" strokeDasharray="8 10" />
                <circle cx="360" cy="258" r="92" fill="rgba(255,255,255,0.64)" stroke="rgba(85,185,232,0.28)" />
                <circle cx="360" cy="258" r="126" fill="none" stroke="rgba(57,71,167,0.12)" />
              </svg>

              <div className="absolute left-1/2 top-[60%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center p-1 drop-shadow-[0_18px_28px_rgba(52,80,164,0.18)]">
                <BrandMark className="h-full w-full" />
              </div>

              {companies.map((company) => (
                <div key={company.name} className={`absolute w-[210px] ${company.position}`}>
                  <CompanyCard company={company} compact />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:hidden">
            {companies.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


