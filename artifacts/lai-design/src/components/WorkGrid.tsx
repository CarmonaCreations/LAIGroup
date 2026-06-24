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
    <section id="work" className="py-16 md:py-24 px-4 md:px-6 max-w-[1400px] mx-auto bg-background">

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className={`${project.span} ${project.aspect} group relative overflow-hidden bg-muted cursor-pointer`}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              loading={index < 2 ? "eager" : "lazy"}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="font-sans text-xs tracking-[0.2em] text-white/65 uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {project.type}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {project.title}
              </h3>
            </div>
          </motion.div>
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
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Prev / Next — outside the card */}
            <button
              onClick={prevProject}
              className="absolute left-4 md:left-6 z-10 w-10 h-10 bg-white/90 hover:bg-white text-foreground rounded-full flex items-center justify-center shadow-md transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 md:right-6 z-10 w-10 h-10 bg-white/90 hover:bg-white text-foreground rounded-full flex items-center justify-center shadow-md transition-all"
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
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative aspect-[16/7] overflow-hidden">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-5 left-7">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/65 mb-1">
                    {projects[activeProject].type}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-white">
                    {projects[activeProject].title}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-7 md:p-10">
                <p className="font-sans text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                  {projects[activeProject].description}
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-7">
                  {[
                    { label: "Cost", value: projects[activeProject].cost },
                    { label: "Size", value: projects[activeProject].size },
                    { label: "Completed", value: projects[activeProject].completed },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">{stat.label}</p>
                      <p className="font-sans text-sm font-medium text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border flex justify-end">
                  <button
                    onClick={closeLightbox}
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
    </section>
  );
}
