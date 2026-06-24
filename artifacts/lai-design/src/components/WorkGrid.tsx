import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CalendarDays, Layers3, MapPin, Ruler } from "lucide-react";

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
    market: "Education",
    location: "Fort Myers, FL",
    image: innovationPrep,
    cost: "$13M",
    size: "69,850 sq ft",
    completed: "August 2020",
    description: "A two-story campus with a circular stairway, indoor track, and coordinated learning environments designed with delivery and constructability in mind.",
  },
  {
    id: 2,
    title: "Henderson Hammock Charter School",
    market: "Education",
    location: "Southwest Florida",
    image: hendersonHammock,
    cost: "$11M",
    size: "65,000 sq ft",
    completed: "July 2011",
    description: "A charter school delivered around sensitive site constraints, including wetlands that shaped the building placement and coordination strategy.",
  },
  {
    id: 3,
    title: "Cape Coral Animal Shelter",
    market: "Civic",
    location: "Cape Coral, FL",
    image: capeCoralShelter,
    cost: "$1.7M",
    size: "7,800 sq ft",
    completed: "March 2020",
    description: "Public, clinical, and animal care spaces planned for clear operations and a welcoming community-facing experience.",
  },
  {
    id: 4,
    title: "Athenian Academy - Fort Myers",
    market: "Education",
    location: "Fort Myers, FL",
    image: athenianAcademy,
    cost: "$13.2M",
    size: "68,950 sq ft",
    completed: "August 2020",
    description: "A campus for learning, athletics, play, and covered outdoor programming, coordinated from design through construction management.",
  },
  {
    id: 5,
    title: "Hollywood Academy of Arts & Sciences",
    market: "Education",
    location: "Hollywood, FL",
    image: hollywoodAcademy,
    cost: "$14M",
    size: "110,000 gsf",
    completed: "August 2012",
    description: "A four-story elementary school for 1,400 students with administration, dining, classroom, and rooftop teaching areas.",
  },
  {
    id: 6,
    title: "Club Paragon",
    market: "Commercial",
    location: "Southwest Florida",
    image: clubParagon,
    cost: "$1.5M",
    size: "6,000 sq ft",
    completed: "June 1989",
    description: "A restaurant remodel and addition shaped by hospitality function, schedule sensitivity, and design/build coordination.",
  },
  {
    id: 7,
    title: "Vincent Park",
    market: "Commercial",
    location: "Southwest Florida",
    image: vincentPark,
    cost: "$6.5M",
    size: "Five buildings / 50,000 gsf",
    completed: "August 1999",
    description: "A Class A office park organized as five two-story buildings, balancing repeatable systems with a professional campus presence.",
  },
  {
    id: 8,
    title: "Arthrex Manufacturing",
    market: "Industrial",
    location: "South Carolina",
    image: arthrexMfg,
    cost: "$8M",
    size: "36,000 gsf",
    completed: "June 2019",
    description: "Programming and design for a two-story building supporting the Arthrex South Carolina campus and its operational needs.",
  },
  {
    id: 9,
    title: "Arthrex AMISC",
    market: "Medical Manufacturing",
    location: "South Carolina",
    image: arthrexAMISC,
    cost: "$39M",
    size: "253,000 gsf",
    completed: "June 2019",
    description: "A major medical manufacturing expansion with disciplined planning, technical coordination, and room for future operational growth.",
  },
  {
    id: 10,
    title: "Arthrex AMIE",
    market: "Medical Manufacturing",
    location: "Southwest Florida",
    image: arthrexAMIE,
    cost: "$36M",
    size: "400,000 gsf",
    completed: "November 2012",
    description: "A landmark facility supporting medical manufacturing, education, and the precise workflows behind orthopaedic product development.",
  },
];

const marketSummary = [
  { label: "Education", count: "5" },
  { label: "Medical + Industrial", count: "3" },
  { label: "Civic + Commercial", count: "2" },
];

export function WorkGrid() {
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const selected = projects.find((project) => project.id === selectedId) ?? projects[0];

  return (
    <section id="work" className="bg-background px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 font-sans text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">Selected Work</p>
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-foreground md:text-6xl">
              Built work indexed by scale, use, and technical demand.
            </h2>
          </div>
          <div className="grid grid-cols-3 border border-border bg-white/55">
            {marketSummary.map((item) => (
              <div key={item.label} className="border-r border-border p-4 last:border-r-0 md:p-6">
                <p className="font-display text-3xl text-primary md:text-4xl">{item.count}</p>
                <p className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="border-y border-border"
          >
            {projects.map((project, index) => {
              const isSelected = project.id === selected.id;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedId(project.id)}
                  className={`grid w-full gap-4 border-b border-border py-5 text-left transition-colors last:border-b-0 md:grid-cols-[48px_1fr_auto] md:items-center md:px-4 ${
                    isSelected ? "bg-primary/8" : "hover:bg-white/70"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="font-sans text-xs font-extrabold tracking-[0.18em] text-primary/70">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-display text-xl leading-tight text-foreground md:text-2xl">{project.title}</span>
                    <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{project.market}</span>
                      <span className="flex items-center gap-1.5 normal-case tracking-normal"><MapPin className="h-3.5 w-3.5" /> {project.location}</span>
                    </span>
                  </span>
                  <span className={`hidden h-10 w-10 items-center justify-center border md:flex ${isSelected ? "border-primary bg-primary text-white" : "border-border text-primary"}`}>
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </motion.div>

          <motion.aside
            key={selected.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:sticky lg:top-28"
          >
            <div className="overflow-hidden border border-border bg-white/80 shadow-[0_24px_80px_rgba(22,96,132,0.12)]">
              <div className="aspect-[4/3] overflow-hidden bg-muted md:aspect-[16/11]">
                <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="border border-primary/25 bg-primary/10 px-3 py-1 font-sans text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">{selected.market}</span>
                  <span className="border border-border bg-background px-3 py-1 font-sans text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">{selected.location}</span>
                </div>
                <h3 className="font-display text-3xl leading-tight text-foreground md:text-4xl">{selected.title}</h3>
                <p className="mt-4 font-sans text-sm leading-7 text-muted-foreground md:text-base">{selected.description}</p>

                <div className="mt-7 grid gap-px bg-border sm:grid-cols-3">
                  {[
                    { icon: Building2, label: "Cost", value: selected.cost },
                    { icon: Ruler, label: "Size", value: selected.size },
                    { icon: CalendarDays, label: "Completed", value: selected.completed },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/85 p-4">
                      <stat.icon className="mb-3 h-4 w-4 text-primary" />
                      <p className="font-sans text-[10px] font-extrabold uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</p>
                      <p className="mt-1 font-sans text-sm font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 border border-border bg-primary/8 p-4 text-primary">
              <Layers3 className="h-5 w-5 shrink-0" />
              <p className="font-sans text-sm font-semibold leading-6">Compare type, location, scale, and delivery context in one sharp view.</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}


