import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import arthrexAMISC from "@assets/Arthrex-AMISC_1773411287410.jpg";
import arthrexMfg from "@assets/Arthrex-Manufacturing_1773411287410.jpg";
import athenianAcademy from "@assets/Athenian-Academy-FM_1773411287411.jpg";
import capeCoralShelter from "@assets/Cape-Coral-Animal-Shelter_1773411287411.jpg";
import clubParagon from "@assets/Club-Paragon_1773411287411.jpg";
import hendersonHammock from "@assets/Henderson-Hammock-Charter-School_1773411287412.jpg";
import hollywoodAcademy from "@assets/Hollywood-Academy-Of-Arts-Sciences_1773411287413.jpg";
import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import vincentPark from "@assets/Vincent-Park_1773411287415.jpg";

const projects = [
  {
    id: 1,
    title: "Innovation Preparatory Academy",
    type: "Education / Fort Myers, FL",
    image: innovationPrep,
    cost: "$13M",
    size: "69,850 sq ft",
    completed: "August 2020",
    description: "LAI partnered with Charter Schools USA and Ryan Companies to provide design engineering services for this two-story school, including a circular stairway and indoor track.",
  },
  {
    id: 2,
    title: "Henderson Hammock Charter School",
    type: "Education / SWFL",
    image: hendersonHammock,
    cost: "$11M",
    size: "65,000 sq ft",
    completed: "July 2011",
    description: "LAI provided design engineering services in partnership with Charter Schools USA. Unique challenges included designing around wetlands on the property.",
  },
  {
    id: 3,
    title: "Cape Coral Animal Shelter",
    type: "Civic / Cape Coral, FL",
    image: capeCoralShelter,
    cost: "$1.7M",
    size: "7,800 sq ft",
    completed: "March 2020",
    description: "LAI provided design engineering and construction management pro bono for the first no-kill animal shelter in Cape Coral, featuring public, clinical, and animal care spaces.",
  },
  {
    id: 4,
    title: "Athenian Academy - Fort Myers",
    type: "Education / Fort Myers, FL",
    image: athenianAcademy,
    cost: "$13.2M",
    size: "68,950 sq ft",
    completed: "August 2020",
    description: "Design engineering and construction management for Athenian Academy's second campus, including learning, play, athletics, and covered outdoor program areas.",
  },
  {
    id: 5,
    title: "Hollywood Academy of Arts & Sciences",
    type: "Education / Hollywood, FL",
    image: hollywoodAcademy,
    cost: "$14M",
    size: "110,000 gsf",
    completed: "August 2012",
    description: "LEED registered four-story elementary school for 1,400 students with classrooms, administration, multi-purpose dining, and rooftop outdoor teaching areas.",
  },
  {
    id: 6,
    title: "Club Paragon",
    type: "Commercial / SWFL",
    image: clubParagon,
    cost: "$1.5M",
    size: "6,000 sq ft",
    completed: "June 1989",
    description: "Design/build construction of a restaurant remodeling and addition.",
  },
  {
    id: 7,
    title: "Vincent Park",
    type: "Commercial / SWFL",
    image: vincentPark,
    cost: "$6.5M",
    size: "Five Buildings / 50,000 gsf",
    completed: "August 1999",
    description: "Design/build construction of five two-story Class A office buildings at 10,800 sq ft each.",
  },
  {
    id: 8,
    title: "Arthrex Manufacturing",
    type: "Industrial / South Carolina",
    image: arthrexMfg,
    cost: "$8M",
    size: "36,000 gsf",
    completed: "June 2019",
    description: "Programming and design of a two-story building providing services to the Arthrex South Carolina Campus.",
  },
  {
    id: 9,
    title: "Arthrex AMISC",
    type: "Medical Manufacturing / South Carolina",
    image: arthrexAMISC,
    cost: "$39M",
    size: "253,000 gsf",
    completed: "June 2019",
    description: "Programming and design of the expansion of Arthrex's medical manufacturing facility to South Carolina.",
  },
  {
    id: 10,
    title: "Arthrex AMIE",
    type: "Medical Manufacturing / Southwest FL",
    image: arthrexAMIE,
    cost: "$36M",
    size: "400,000 gsf",
    completed: "November 2012",
    description: "Programming and design of a landmark medical manufacturing facility for Arthrex, providing quality products and educational services for orthopaedic surgeons worldwide.",
  },
];

export function WorkGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const nextProject = () => {
    setActiveProject((current) => (current === null ? 0 : (current + 1) % projects.length));
  };

  const prevProject = () => {
    setActiveProject((current) => (current === null ? 0 : (current - 1 + projects.length) % projects.length));
  };

  return (
    <section id="work" className="bg-background px-4 pb-16 pt-4 md:px-6 md:pb-24 md:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8 md:space-y-10">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            const imageClip = reversed
              ? "polygon(6% 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 94% 0, 100% 100%, 0 100%)";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: Math.min(index * 0.04, 0.25) }}
                className="group relative overflow-hidden border border-border bg-card shadow-[0_22px_70px_rgba(23,22,18,0.07)]"
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(index)}
                  className={`grid w-full text-left lg:grid-cols-[1.06fr_0.94fr] ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="relative min-h-[320px] overflow-hidden bg-muted md:min-h-[420px]" style={{ clipPath: imageClip }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" />
                    <p className="absolute bottom-5 left-5 font-display text-7xl italic leading-none text-white/32 md:text-8xl">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="relative flex min-h-[320px] flex-col justify-between p-7 md:p-10">
                    <div className="absolute right-7 top-7 h-20 w-20 border border-primary/18" />
                    <div>
                      <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-primary">{project.type}</p>
                      <h3 className="max-w-xl font-display text-4xl leading-tight text-foreground md:text-5xl">{project.title}</h3>
                      <p className="mt-6 max-w-xl font-sans text-sm leading-7 text-muted-foreground md:text-base">{project.description}</p>
                    </div>

                    <div className="mt-8 grid gap-px bg-border sm:grid-cols-3">
                      {[
                        { label: "Cost", value: project.cost },
                        { label: "Scale", value: project.size },
                        { label: "Complete", value: project.completed },
                      ].map((stat) => (
                        <span key={stat.label} className="bg-card p-4">
                          <span className="block font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</span>
                          <span className="mt-1 block font-sans text-sm font-semibold text-foreground">{stat.value}</span>
                        </span>
                      ))}
                    </div>

                    <span className="mt-8 inline-flex w-fit items-center gap-2 border-b border-primary/40 pb-1 font-sans text-[10px] uppercase tracking-[0.22em] text-primary transition-colors group-hover:border-primary group-hover:text-foreground">
                      Open Project <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171612]/82 p-4 backdrop-blur-sm md:p-10"
            onClick={() => setActiveProject(null)}
          >
            <button
              onClick={(event) => {
                event.stopPropagation();
                prevProject();
              }}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center bg-card text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground md:left-6"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(event) => {
                event.stopPropagation();
                nextProject();
              }}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center bg-card text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground md:right-6"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid w-full max-w-6xl overflow-hidden bg-card shadow-2xl lg:grid-cols-[1.15fr_0.85fr]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-[340px] overflow-hidden lg:min-h-[620px]">
                <img src={projects[activeProject].image} alt={projects[activeProject].title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />
              </div>

              <div className="relative flex flex-col justify-between p-7 md:p-10">
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Close project details"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="pr-10">
                  <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.28em] text-primary">{projects[activeProject].type}</p>
                  <h3 className="font-display text-4xl leading-tight text-foreground md:text-5xl">{projects[activeProject].title}</h3>
                  <p className="mt-6 font-sans text-sm leading-7 text-muted-foreground md:text-base">{projects[activeProject].description}</p>
                </div>

                <div className="mt-10 grid gap-px bg-border">
                  {[
                    { label: "Cost", value: projects[activeProject].cost },
                    { label: "Scale", value: projects[activeProject].size },
                    { label: "Completed", value: projects[activeProject].completed },
                  ].map((stat) => (
                    <div key={stat.label} className="grid grid-cols-[120px_1fr] bg-card p-4">
                      <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</p>
                      <p className="font-sans text-sm font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

