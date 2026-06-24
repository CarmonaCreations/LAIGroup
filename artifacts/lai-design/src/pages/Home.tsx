import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, FileStack, PencilRuler, ScanLine, X } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { LicensureSection } from "@/components/LicensureSection";

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
    description: "A two-story campus with a circular stair, indoor track, and tight design coordination from concept through delivery.",
  },
  {
    title: "Arthrex AMIE",
    type: "Medical Manufacturing / Southwest FL",
    image: arthrexAMIE,
    cost: "$36M",
    size: "400,000 gsf",
    completed: "November 2012",
    description: "A high-performance medical manufacturing campus planned around production, education, logistics, and growth.",
  },
  {
    title: "Hollywood Academy of Arts & Sciences",
    type: "Education / Hollywood, FL",
    image: hollywoodAcademy,
    cost: "$14M",
    size: "110,000 gsf",
    completed: "August 2012",
    description: "A four-story learning environment with classrooms, administration, dining, and rooftop outdoor instruction.",
  },
  {
    title: "Arthrex AMISC",
    type: "Medical Manufacturing / South Carolina",
    image: arthrexAMISC,
    cost: "$39M",
    size: "253,000 gsf",
    completed: "June 2019",
    description: "A technical manufacturing expansion built around precise workflows, future capacity, and operational clarity.",
  },
];

const practice = [
  {
    title: "Program",
    body: "Pin down use, code, cost, and workflow before design momentum turns expensive.",
    Icon: ScanLine,
  },
  {
    title: "Design",
    body: "Shape clean architectural direction with structure, systems, and materials aligned.",
    Icon: PencilRuler,
  },
  {
    title: "Document",
    body: "Build permit-ready, pricing-ready drawings that stay useful in the field.",
    Icon: FileStack,
  },
  {
    title: "Connect",
    body: "Pull construction and civil insight forward when the project demands it.",
    Icon: Building2,
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const leadProject = featured[0];
  const secondaryProjects = featured.slice(1);

  return (
    <>
      <Helmet>
        <title>LAI Design Associates - Architecture Studio | Estero, Florida</title>
        <meta
          name="description"
          content="LAI Design Associates is the architectural design studio within the LAI family of companies, connecting design work with construction and civil expertise."
        />
        <link rel="canonical" href="https://laidesignassoc.com/" />
      </Helmet>

      <Nav />
      <Hero />

      <section className="relative overflow-hidden bg-[#eaf7fb] px-6 py-16 text-foreground md:py-24">
        <div className="absolute right-[-12rem] top-[-16rem] h-[34rem] w-[34rem] rotate-45 border border-[#55b9e8]/28" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[26rem] w-[26rem] rotate-45 border border-[#3947a7]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-sans text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">Selected Work</p>
              <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">Proof in the built work.</h2>
            </div>
            <Link href="/work">
              <span className="inline-flex cursor-pointer items-center gap-2 border-b border-primary/40 pb-1 font-sans text-xs font-extrabold uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary hover:text-foreground">
                View All Projects <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
            <motion.button
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="group grid min-h-[460px] overflow-hidden bg-[#111c4d] p-2 text-left text-white shadow-[0_24px_90px_rgba(52,80,164,0.18)] md:grid-cols-[1fr_0.72fr]"
              onClick={() => setActiveProject(0)}
            >
              <div className="overflow-hidden" style={{ clipPath: "polygon(0 0, 94% 0, 100% 100%, 0 100%)" }}>
                <img src={leadProject.image} alt={leadProject.title} className="h-full min-h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="eager" />
              </div>
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="font-sans text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#65c6ef]">{leadProject.type}</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{leadProject.title}</h3>
                  <p className="mt-5 font-sans text-sm leading-7 text-white/70">{leadProject.description}</p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-px bg-white/14">
                  {[
                    { label: "Cost", value: leadProject.cost },
                    { label: "Size", value: leadProject.size },
                    { label: "Done", value: leadProject.completed },
                  ].map((stat) => (
                    <span key={stat.label} className="bg-[#111c4d] p-3">
                      <span className="block font-sans text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/42">{stat.label}</span>
                      <span className="mt-1 block font-sans text-xs font-bold text-white">{stat.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>

            <div className="grid gap-3">
              {secondaryProjects.map((project, index) => (
                <motion.button
                  key={project.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group grid min-h-[142px] grid-cols-[0.78fr_1fr] overflow-hidden bg-white/82 p-2 text-left shadow-[0_18px_54px_rgba(52,80,164,0.12)] transition-colors hover:bg-white"
                  onClick={() => setActiveProject(index + 1)}
                >
                  <div className="overflow-hidden" style={{ clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)" }}>
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex flex-col justify-center p-4">
                    <p className="font-sans text-[9px] font-extrabold uppercase tracking-[0.2em] text-primary">{project.type}</p>
                    <h3 className="mt-2 font-display text-xl leading-tight text-foreground">{project.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 font-sans text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary/70 group-hover:text-primary">
                      Open Detail <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 font-sans text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">Design Practice</p>
            <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">Precise scope. Clean drawings. Fewer unknowns.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {practice.map(({ title, body, Icon }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.07 }}
                className="min-h-[230px] border border-border bg-white/72 p-7 transition-colors hover:bg-white"
              >
                <Icon className="mb-10 h-7 w-7 text-primary" />
                <h3 className="mb-4 font-display text-2xl text-foreground">{title}</h3>
                <p className="font-sans text-sm leading-7 text-muted-foreground">{body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <LicensureSection />

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#12324a]/80 p-4 backdrop-blur-sm md:p-10"
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
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-white/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Close project details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-7 md:p-10">
                <p className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{featured[activeProject].type}</p>
                <h3 className="font-display text-3xl text-foreground md:text-4xl">{featured[activeProject].title}</h3>
                <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                  {featured[activeProject].description}
                </p>
                <div className="mt-8 grid grid-cols-3 gap-px bg-border">
                  {[
                    { label: "Cost", value: featured[activeProject].cost },
                    { label: "Size", value: featured[activeProject].size },
                    { label: "Completed", value: featured[activeProject].completed },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white p-4">
                      <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</p>
                      <p className="font-sans text-sm font-bold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </>
  );
}

