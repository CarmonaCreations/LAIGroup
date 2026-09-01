import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { LicensureMap } from "@/components/LicensureMap";

import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import arthrexAMISC from "@assets/Arthrex-AMISC_1773411287410.jpg";
import hollywoodAcademy from "@assets/Hollywood-Academy-Of-Arts-Sciences_1773411287413.jpg";

const featured = [
  {
    title: "Innovation Preparatory Academy",
    type: "Education · Fort Myers, FL",
    image: innovationPrep,
    cost: "$13M",
    size: "69,850 sq ft",
    completed: "August 2020",
    description: "LAI partnered with Charter Schools USA and Ryan Companies to provide design engineering services for this two-story school, including a circular stairway and indoor track.",
  },
  {
    title: "Arthrex AMIE",
    type: "Medical Manufacturing · Southwest FL",
    image: arthrexAMIE,
    cost: "$36M",
    size: "400,000 gsf",
    completed: "November 2012",
    description: "Programming and design of a landmark medical manufacturing facility for Arthrex, providing quality products and educational services for orthopaedic surgeons worldwide.",
  },
  {
    title: "Hollywood Academy of Arts & Sciences",
    type: "Education · Hollywood, FL",
    image: hollywoodAcademy,
    cost: "$14M",
    size: "110,000 gsf",
    completed: "August 2012",
    description: "LEED registered four-story elementary school for 1,400 students, including classrooms, administration, multi-purpose cafeteria, and rooftop outdoor teaching and play areas.",
  },
  {
    title: "Arthrex AMISC",
    type: "Medical Manufacturing · South Carolina",
    image: arthrexAMISC,
    cost: "$39M",
    size: "253,000 gsf",
    completed: "June 2019",
    description: "Programming and design of the expansion of Arthrex's medical manufacturing facility to South Carolina.",
  },
];

const services = [
  { title: "Plan", body: "Master planning, feasibility studies and programming tailored to your project's vision." },
  { title: "Design", body: "Architecture and engineering that balances aesthetics, functionality and code compliance." },
  { title: "Engineer", body: "Structural, MEP and civil engineering expertise across diverse project types." },
  { title: "Construct", body: "Design-build delivery that keeps projects on schedule, on budget and built to last." },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>LAI Group – Architecture & Construction | Estero, Florida</title>
        <meta name="description" content="LAI Group is a full-service architectural design and construction firm based in Estero, FL, serving clients across Florida, South Carolina and nationwide." />
        <link rel="canonical" href="https://laigroup.com/" />
      </Helmet>

      <Nav />
      <Hero />

      <main className="flex flex-col">

      {/* Services */}
      <section className="order-2 py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Full-Service Design & Build</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background p-10 group"
              >
                <div className="w-6 h-[1.5px] bg-primary mb-7 group-hover:w-12 transition-all duration-500" />
                <h3 className="font-display text-xl text-foreground mb-4">{svc.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{svc.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="order-3">
        <LicensureMap />
      </div>

      {/* Featured Projects */}
      <section className="relative order-1 overflow-hidden bg-[linear-gradient(145deg,#f7f9fb_0%,#ffffff_48%,#f1f4f7_100%)] px-6 py-24 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-12px_30px_rgba(15,23,42,0.025)] md:py-32">
        <div className="pointer-events-none absolute -left-36 top-16 h-96 w-96 rounded-full bg-white/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-slate-300/15 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-3">Portfolio</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">Selected Projects</h2>
            </motion.div>
            <Link href="/work">
              <span className="hidden md:inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-foreground hover:text-primary transition-colors cursor-pointer group">
                View All Projects <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-muted ring-1 ring-black/5 shadow-[8px_8px_0_rgba(52,80,164,0.09),0_16px_34px_rgba(15,23,42,0.1)] transition-[transform,box-shadow] duration-500 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[12px_14px_0_rgba(52,80,164,0.12),0_26px_52px_rgba(15,23,42,0.14)]"
                onClick={() => setActiveProject(i)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1">{project.type}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-white">{project.title}</h3>
                    <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/60 border border-white/30 px-3 py-1 rounded-full">Details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/work">
              <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-foreground hover:text-primary transition-colors cursor-pointer">
                View All Projects <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Lightbox */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative aspect-[16/7] overflow-hidden">
                <img
                  src={featured[activeProject].image}
                  alt={featured[activeProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-5 left-7">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/65 mb-1">{featured[activeProject].type}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white">{featured[activeProject].title}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-7 md:p-10">
                <p className="font-sans text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                  {featured[activeProject].description}
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-7">
                  {[
                    { label: "Cost", value: featured[activeProject].cost },
                    { label: "Size", value: featured[activeProject].size },
                    { label: "Completed", value: featured[activeProject].completed },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">{stat.label}</p>
                      <p className="font-sans text-sm font-medium text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-6 border-t border-border flex justify-between items-center">
                  <Link href="/work">
                    <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-primary cursor-pointer hover:gap-3 transition-all">
                      See All Projects <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Teaser */}
      <section className="order-4 py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-4">About LAI Group</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                25+ Years of<br />Excellence
              </h2>
              <div className="w-12 h-[1px] bg-primary mb-8" />
              <p className="font-sans text-muted-foreground text-base leading-relaxed mb-10">
                To be the leading provider of superior design and construction services — adding value for clients through innovation, integrity, and aggressive performance that builds enduring relationships.
              </p>
              <Link href="/about">
                <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-colors cursor-pointer group">
                  Our Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-2 gap-px bg-border"
            >
              {[
                { number: "25+", label: "Years of Experience" },
                { number: "200+", label: "Projects Delivered" },
                { number: "3", label: "States & Counting" },
                { number: "100%", label: "Client Focused" },
              ].map((stat) => (
                <div key={stat.label} className="bg-background p-10 text-center">
                  <p className="font-display text-4xl text-primary mb-2">{stat.number}</p>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </>
  );
}
