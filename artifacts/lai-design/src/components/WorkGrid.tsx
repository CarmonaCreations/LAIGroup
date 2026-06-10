import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
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
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
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
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
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
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
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
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
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
    span: "md:col-span-6",
    aspect: "aspect-[4/3]",
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
    span: "md:col-span-6",
    aspect: "aspect-[4/3]",
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
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
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
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
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
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
  },
];

export function WorkGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveProject(index);
  const closeLightbox = () => setActiveProject(null);

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject !== null) {
      setActiveProject((activeProject + 1) % projects.length);
    }
  };

  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject !== null) {
      setActiveProject((activeProject - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="work" className="mx-auto max-w-[1400px] bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className={`${project.span} ${project.aspect} group relative cursor-pointer overflow-hidden bg-muted`}
            onClick={() => openLightbox(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              loading={index < 2 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/65 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="mb-2 translate-y-4 font-sans text-xs uppercase tracking-[0.2em] text-white/65 transition-transform delay-100 duration-500 group-hover:translate-y-0">
                {project.type}
              </p>
              <h3 className="translate-y-4 font-display text-2xl text-white transition-transform duration-500 group-hover:translate-y-0 md:text-3xl">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-10"
            onClick={closeLightbox}
          >
            <button
              onClick={prevProject}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-all hover:bg-white md:left-6"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-all hover:bg-white md:right-6"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={activeProject}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/7] overflow-hidden">
                <img src={projects[activeProject].image} alt={projects[activeProject].title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <button
                  onClick={closeLightbox}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
                  aria-label="Close project details"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-5 left-7">
                  <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-white/65">
                    {projects[activeProject].type}
                  </p>
                  <h3 className="font-display text-2xl text-white md:text-3xl">
                    {projects[activeProject].title}
                  </h3>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <p className="mb-8 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                  {projects[activeProject].description}
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-7">
                  {[
                    { label: "Cost", value: projects[activeProject].cost },
                    { label: "Size", value: projects[activeProject].size },
                    { label: "Completed", value: projects[activeProject].completed },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{stat.label}</p>
                      <p className="font-sans text-sm font-medium text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-end border-t border-border pt-6">
                  <button
                    onClick={closeLightbox}
                    className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
