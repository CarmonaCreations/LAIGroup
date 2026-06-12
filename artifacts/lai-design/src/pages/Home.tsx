import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers3, PenTool, Ruler, X } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";

import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import hollywoodAcademy from "@assets/Hollywood-Academy-Of-Arts-Sciences_1773411287413.jpg";
import arthrexAMISC from "@assets/Arthrex-AMISC_1773411287410.jpg";

const featured = [
  {
    title: "Innovation Preparatory Academy",
    type: "Education / Fort Myers, FL",
    image: innovationPrep,
    cost: "$13M",
    size: "69,850 sq ft",
    completed: "August 2020",
    description: "A two-story learning environment with an expressive circular stair, indoor track, and design engineering coordination for Charter Schools USA and Ryan Companies.",
  },
  {
    title: "Arthrex AMIE",
    type: "Medical Manufacturing / Southwest FL",
    image: arthrexAMIE,
    cost: "$36M",
    size: "400,000 gsf",
    completed: "November 2012",
    description: "Programming and design for a landmark medical manufacturing campus supporting surgical education, logistics, and high-performance production space.",
  },
  {
    title: "Hollywood Academy of Arts & Sciences",
    type: "Education / Hollywood, FL",
    image: hollywoodAcademy,
    cost: "$14M",
    size: "110,000 gsf",
    completed: "August 2012",
    description: "A LEED registered four-story school campus with classrooms, administration, multi-purpose dining, and rooftop outdoor learning areas.",
  },
  {
    title: "Arthrex AMISC",
    type: "Medical Manufacturing / South Carolina",
    image: arthrexAMISC,
    cost: "$39M",
    size: "253,000 gsf",
    completed: "June 2019",
    description: "An expansion of Arthrex's manufacturing presence into South Carolina with architecture planned around technical workflows and future growth.",
  },
];

const process = [
  {
    title: "Frame",
    body: "Site, budget, code, schedule, and client goals are translated into a clear architectural problem before design begins.",
    Icon: Ruler,
  },
  {
    title: "Draw",
    body: "Concepts move from sketches and massing into coordinated plans, systems, material logic, and permit-ready documentation.",
    Icon: PenTool,
  },
  {
    title: "Resolve",
    body: "Design intent is tested against constructability so each project can move confidently toward pricing and delivery.",
    Icon: Layers3,
  },
];

const typologies = ["Education", "Medical Manufacturing", "Commercial", "Civic", "Industrial", "Workplace"];

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>LAI Design Associates - Architecture Studio | Estero, Florida</title>
        <meta
          name="description"
          content="LAI Design Associates is the architectural design studio within the LAI family of companies, connecting design, construction, and civil expertise across Florida and beyond."
        />
        <link rel="canonical" href="https://laidesignassoc.com/" />
      </Helmet>

      <Nav />
      <Hero />

      <section className="bg-background px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.35em] text-primary">Design Practice</p>
            <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
              A studio built for the space between idea and construction.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 border-y border-border md:grid-cols-3">
            {process.map(({ title, body, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
              >
                <Icon className="mb-10 h-7 w-7 text-primary" />
                <h3 className="mb-4 font-display text-2xl text-foreground">{title}</h3>
                <p className="font-sans text-sm leading-7 text-muted-foreground">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e9e6dd] px-6 py-24 text-[#171612] md:py-32">
        <div className="absolute inset-0 blueprint-grid-dark opacity-35" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.35em] text-[#876b32]">Architectural Range</p>
            <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">
              Commercially grounded, spatially refined, technically coordinated.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="grid grid-cols-2 gap-px bg-[#171612]/20 sm:grid-cols-3"
          >
            {typologies.map((type) => (
              <div key={type} className="bg-[#e9e6dd] px-5 py-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em]">{type}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Selected Work</p>
              <h2 className="font-display text-4xl text-foreground md:text-6xl">Designed to be built.</h2>
            </motion.div>
            <Link href="/work">
              <span className="inline-flex cursor-pointer items-center gap-2 border-b border-foreground/30 pb-1 font-sans text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary">
                View All Projects <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {featured.map((project, i) => (
              <motion.button
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`group relative overflow-hidden bg-muted text-left ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                onClick={() => setActiveProject(i)}
              >
                <div className={i === 0 ? "aspect-[4/3] md:h-full" : "aspect-[4/3]"}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.2em] text-white/62">{project.type}</p>
                  <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-10"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/7] overflow-hidden">
                <img src={featured[activeProject].image} alt={featured[activeProject].title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
                  aria-label="Close project details"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-5 left-7">
                  <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-white/65">{featured[activeProject].type}</p>
                  <h3 className="font-display text-2xl text-white md:text-3xl">{featured[activeProject].title}</h3>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <p className="mb-8 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                  {featured[activeProject].description}
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-7">
                  {[
                    { label: "Cost", value: featured[activeProject].cost },
                    { label: "Size", value: featured[activeProject].size },
                    { label: "Completed", value: featured[activeProject].completed },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{stat.label}</p>
                      <p className="font-sans text-sm font-medium text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-[#11100d] px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.35em] text-[#c9a86a]">LAI Family</p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">One client relationship, three specialized companies.</h2>
          </div>
          <p className="font-sans text-base leading-8 text-white/68 md:text-lg">
            LAI Design Associates can stand as the architectural entry point while clearly routing visitors to LAI Construction and LAI Civil when their project needs move into delivery, site design, permitting, and infrastructure.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
