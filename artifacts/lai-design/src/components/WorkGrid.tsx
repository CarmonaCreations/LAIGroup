import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

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

// Portfolio Data
const projects = [
  {
    id: 1,
    title: "Innovation Preparatory Academy",
    type: "Education · Fort Myers, FL",
    image: innovationPrep,
    cost: "$13M",
    size: "69,850 sq ft",
    completed: "August 2020",
    description: "LAI partnered with Charter Schools USA and Ryan Companies to provide design engineering services for this two-story school, including a circular stairway and indoor track.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 3,
    title: "Henderson Hammock Charter School",
    type: "Education · SWFL",
    image: hendersonHammock,
    cost: "$11M",
    size: "65,000 sq ft",
    completed: "July 2011",
    description: "LAI provided design engineering services in partnership with Charter Schools USA. Unique challenges included designing around wetlands on the property.",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 4,
    title: "Cape Coral Animal Shelter",
    type: "Civic · Cape Coral, FL",
    image: capeCoralShelter,
    cost: "$1.7M",
    size: "7,800 sq ft",
    completed: "March 2020",
    description: "LAI provided design engineering and construction management pro bono for the first no-kill animal shelter in Cape Coral, featuring cat rooms, kennels, outdoor runs and a veterinary clinic.",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 5,
    title: "Athenian Academy – Fort Myers",
    type: "Education · Fort Myers, FL",
    image: athenianAcademy,
    cost: "$13.2M",
    size: "68,950 sq ft",
    completed: "August 2020",
    description: "Design engineering and construction management for Athenian Academy's second campus. Features a two-story indoor slide, covered basketball court airnasium, soccer field and tot lot.",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 6,
    title: "Hollywood Academy of Arts & Sciences",
    type: "Education · Hollywood, FL",
    image: hollywoodAcademy,
    cost: "$14M",
    size: "110,000 gsf",
    completed: "August 2012",
    description: "LEED registered four-story elementary school for 1,400 students. Features classrooms, administration, multi-purpose cafeteria, rooftop outdoor teaching and play areas.",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]"
  },
  {
    id: 8,
    title: "Club Paragon",
    type: "Commercial · SWFL",
    image: clubParagon,
    cost: "$1.5M",
    size: "6,000 sq ft",
    completed: "June 1989",
    description: "Design/build construction of a restaurant remodeling and addition.",
    span: "md:col-span-6",
    aspect: "aspect-[4/3]"
  },
  {
    id: 9,
    title: "Vincent Park",
    type: "Commercial · SWFL",
    image: vincentPark,
    cost: "$6.5M",
    size: "Five Buildings / 50,000 gsf",
    completed: "August 1999",
    description: "Design/build construction of five two-story Class A office buildings at 10,800 sq ft each.",
    span: "md:col-span-6",
    aspect: "aspect-[4/3]"
  },
  {
    id: 10,
    title: "Arthrex Manufacturing",
    type: "Industrial · South Carolina",
    image: arthrexMfg,
    cost: "$8M",
    size: "36,000 gsf",
    completed: "June 2019",
    description: "Programming and design of a two-story building providing services to the Arthrex South Carolina Campus.",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]"
  },
  {
    id: 11,
    title: "Arthrex AMISC",
    type: "Medical Manufacturing · South Carolina",
    image: arthrexAMISC,
    cost: "$39M",
    size: "253,000 gsf",
    completed: "June 2019",
    description: "Programming and design of the expansion of Arthrex's medical manufacturing facility to South Carolina.",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]"
  },
  {
    id: 12,
    title: "Arthrex AMIE",
    type: "Medical Manufacturing · Southwest FL",
    image: arthrexAMIE,
    cost: "$36M",
    size: "400,000 gsf",
    completed: "November 2012",
    description: "Programming and design of a landmark medical manufacturing facility for Arthrex, providing quality products and educational services for orthopaedic surgeons worldwide.",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]"
  }
];

const projectCategories = ["All", "Commercial", "Education", "Industrial", "Other"] as const;
type ProjectCategory = (typeof projectCategories)[number];

function getProjectCategory(type: string): Exclude<ProjectCategory, "All"> {
  if (type.includes("Commercial")) return "Commercial";
  if (type.includes("Education")) return "Education";
  if (type.includes("Industrial") || type.includes("Manufacturing")) return "Industrial";
  return "Other";
}

export function WorkGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const visibleProjects = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => activeCategory === "All" || getProjectCategory(project.type) === activeCategory);

  const openLightbox = (index: number) => setActiveProject(index);
  const closeLightbox = () => setActiveProject(null);
  
  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject !== null) {
      const currentPosition = visibleProjects.findIndex(({ index }) => index === activeProject);
      const nextPosition = (currentPosition + 1) % visibleProjects.length;
      setActiveProject(visibleProjects[nextPosition].index);
    }
  };
  
  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject !== null) {
      const currentPosition = visibleProjects.findIndex(({ index }) => index === activeProject);
      const previousPosition = (currentPosition - 1 + visibleProjects.length) % visibleProjects.length;
      setActiveProject(visibleProjects[previousPosition].index);
    }
  };

  return (
    <section id="work" className="mx-auto max-w-[1400px] bg-background px-4 py-16 md:px-6 md:py-24">

      <div className="mb-10 flex flex-col gap-5 border-y border-border py-5 md:mb-14 md:flex-row md:items-center md:justify-between">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Filter Projects</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => {
            const count = category === "All" ? projects.length : projects.filter((project) => getProjectCategory(project.type) === category).length;
            const selected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={selected}
                className={`border px-4 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category} <span className="ml-1.5 opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial project rows */}
      <div className="space-y-10 md:space-y-14">
        {visibleProjects.map(({ project, index }, displayIndex) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: displayIndex * 0.05 }}
            className="grid overflow-hidden border border-border bg-background shadow-[0_18px_46px_rgba(15,23,42,0.08)] lg:grid-cols-2"
          >
            <button
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`Open details for ${project.title}`}
              className={`group relative min-h-[300px] overflow-hidden text-left md:min-h-[440px] ${
                displayIndex % 2 === 1
                  ? "lg:order-2 lg:[clip-path:polygon(4%_0,100%_0,100%_100%,0_100%)]"
                  : "lg:[clip-path:polygon(0_0,96%_0,100%_100%,0_100%)]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading={displayIndex < 2 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
            </button>

            <div className={`flex min-h-[380px] flex-col justify-center p-7 md:p-10 lg:p-12 ${displayIndex % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-primary">{project.type}</p>
              <h2 className="mt-6 max-w-xl font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">{project.title}</h2>
              <p className="mt-7 max-w-xl font-sans text-sm leading-7 text-muted-foreground md:text-base">{project.description}</p>

              <div className="mt-9 grid grid-cols-3 border-y border-border py-5">
                {[
                  { label: "Cost", value: project.cost },
                  { label: "Scale", value: project.size },
                  { label: "Complete", value: project.completed },
                ].map((stat, statIndex) => (
                  <div key={stat.label} className={`px-3 first:pl-0 ${statIndex > 0 ? "border-l border-border" : ""}`}>
                    <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-muted-foreground">{stat.label}</p>
                    <p className="mt-2 font-sans text-xs font-semibold text-foreground md:text-sm">{stat.value}</p>
                  </div>
                ))}
              </div>

              <button type="button" onClick={() => openLightbox(index)} className="mt-8 inline-flex w-fit items-center gap-2 border-b border-primary/40 pb-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:gap-3 hover:border-primary">
                Open Project <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1020]/88 p-4 backdrop-blur-sm md:p-10"
            onClick={closeLightbox}
          >
            {/* Prev / Next — outside the card */}
            <button
              onClick={prevProject}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center border border-white/30 bg-white/90 text-foreground shadow-md transition-all hover:bg-white md:left-6"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center border border-white/30 bg-white/90 text-foreground shadow-md transition-all hover:bg-white md:right-6"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              key={activeProject}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid max-h-[90vh] w-full max-w-6xl overflow-y-auto border border-white/20 bg-background shadow-[0_36px_100px_rgba(0,0,0,0.45)] md:grid-cols-[1.18fr_0.82fr] md:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-h-[260px] overflow-hidden border-b border-border md:min-h-[620px] md:border-b-0 md:border-r">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="relative flex min-h-[520px] flex-col p-7 md:min-h-[620px] md:p-10 lg:p-12">
                <button
                  onClick={closeLightbox}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary md:right-6 md:top-6"
                  aria-label="Close project details"
                >
                  <X className="w-4 h-4" />
                </button>

                <p className="pr-12 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-primary">{projects[activeProject].type}</p>
                <h3 className="mt-7 font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">{projects[activeProject].title}</h3>
                <p className="mt-8 font-sans text-sm leading-7 text-muted-foreground md:text-base">
                  {projects[activeProject].description}
                </p>

                <div className="mt-auto pt-10">
                  {[
                    { label: "Cost", value: projects[activeProject].cost },
                    { label: "Scale", value: projects[activeProject].size },
                    { label: "Completed", value: projects[activeProject].completed },
                  ].map((stat) => (
                    <div key={stat.label} className="grid grid-cols-[100px_1fr] items-center border-t border-border py-4 last:border-b">
                      <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{stat.label}</p>
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
