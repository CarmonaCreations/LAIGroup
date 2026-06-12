import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowUpRight, DraftingCompass, HardHat, Map, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";

const companies = [
  {
    id: "design",
    name: "LAI Design Associates",
    discipline: "Architecture / Planning / Technical Coordination",
    body: "The architectural starting point for programming, planning, design documentation, code coordination, and project vision.",
    href: "/",
    action: "Enter design site",
    Icon: DraftingCompass,
    active: true,
  },
  {
    id: "construction",
    name: "LAI Construction",
    discipline: "Preconstruction / Delivery / Field Execution",
    body: "The construction entity focused on pricing strategy, delivery planning, scheduling, field coordination, and build execution.",
    href: "#lai-construction",
    action: "View construction overview",
    Icon: HardHat,
    active: false,
  },
  {
    id: "civil",
    name: "LAI Civil",
    discipline: "Civil Engineering / Site Design / Permitting",
    body: "The civil entity focused on land development, site infrastructure, stormwater coordination, utility planning, and permitting support.",
    href: "#lai-civil",
    action: "View civil overview",
    Icon: Map,
    active: false,
  },
];

const capabilities = [
  "Architecture and programming",
  "Commercial and education design",
  "Medical manufacturing planning",
  "Preconstruction coordination",
  "Construction delivery strategy",
  "Civil site planning and permitting",
  "Infrastructure and utility coordination",
  "Single relationship across disciplines",
];

export default function CompaniesPage() {
  return (
    <>
      <Helmet>
        <title>LAI Companies - LAI Design Associates</title>
        <meta
          name="description"
          content="Explore the LAI family of companies: LAI Design Associates, LAI Construction, and LAI Civil."
        />
      </Helmet>

      <Nav />

      <main className="bg-background">
        <section className="bg-[#11100d] px-6 pb-20 pt-32 text-white md:pb-28 md:pt-40">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.35em] text-[#c9a86a]">LAI Companies</p>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">
                One relationship. Three specialized business entities.
              </h1>
              <p className="font-sans text-base leading-8 text-white/66">
                LAI gives clients a more connected path from site and strategy to architecture and construction. Each company can stand alone, but the real advantage is how clearly they can work together.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
              {companies.map(({ id, name, discipline, body, href, action, Icon, active }, i) => {
                const card = (
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: i * 0.08 }}
                    id={`lai-${id}`}
                    className={`flex min-h-[420px] flex-col justify-between p-7 transition-colors ${
                      active ? "bg-[#11100d] text-white" : "bg-card hover:bg-muted"
                    }`}
                  >
                    <div>
                      <div className="mb-10 flex items-center justify-between">
                        <Icon className={`h-8 w-8 ${active ? "text-[#c9a86a]" : "text-primary"}`} />
                        <ArrowUpRight className="h-5 w-5 opacity-60" />
                      </div>
                      <p className={`mb-4 font-sans text-[10px] uppercase tracking-[0.24em] ${active ? "text-[#c9a86a]" : "text-muted-foreground"}`}>
                        {discipline}
                      </p>
                      <h2 className="font-display text-4xl leading-none">{name}</h2>
                      <p className={`mt-6 font-sans text-sm leading-7 ${active ? "text-white/66" : "text-muted-foreground"}`}>
                        {body}
                      </p>
                    </div>
                    <span className={`mt-10 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] ${active ? "text-white" : "text-foreground"}`}>
                      {action}
                      <MoveRight className="h-4 w-4" />
                    </span>
                  </motion.div>
                );

                return active ? (
                  <Link href={href} key={name}>
                    <span className="block cursor-pointer">{card}</span>
                  </Link>
                ) : (
                  <a href={href} key={name} className="block">
                    {card}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 border-t border-border pt-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.35em] text-primary">What the combined team can cover</p>
              <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
                A broader project path without losing accountability.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="bg-background p-5">
                  <p className="font-sans text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
