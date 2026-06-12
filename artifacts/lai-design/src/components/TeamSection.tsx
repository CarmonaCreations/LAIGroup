import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Linkedin, X } from "lucide-react";

const architects = [
  {
    id: "marco",
    name: "Marco Alvarez",
    role: "Principal Architect",
    focus: "Client strategy, architectural direction, and complex commercial programs.",
    email: "marco@laidesignassoc.com",
    phone: "239-405-6888",
    linkedin: "https://www.linkedin.com/company/lai-design-associates-llc/",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "sofia",
    name: "Sofia Chen",
    role: "Design Director",
    focus: "Concept development, spatial experience, material systems, and design reviews.",
    email: "sofia@laidesignassoc.com",
    phone: "239-405-6888",
    linkedin: "https://www.linkedin.com/company/lai-design-associates-llc/",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "james",
    name: "James Whitfield",
    role: "Project Architect",
    focus: "Documentation, consultant coordination, permitting, and construction-phase support.",
    email: "james@laidesignassoc.com",
    phone: "239-405-6888",
    linkedin: "https://www.linkedin.com/company/lai-design-associates-llc/",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=900",
  },
];

export function TeamSection() {
  const [activeId, setActiveId] = useState<string | null>(architects[0].id);

  return (
    <section id="team" className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl md:mb-16"
        >
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            Select a profile to reveal direct contact information and each person's role in the design process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {architects.map((person, i) => {
            const active = activeId === person.id;

            return (
              <motion.article
                key={person.id}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                onMouseEnter={() => setActiveId(person.id)}
                onClick={() => setActiveId(active ? null : person.id)}
                className={`group relative min-h-[560px] overflow-hidden border transition-colors duration-300 ${
                  active ? "border-primary/50 bg-[#11100d] text-white" : "border-border bg-card text-foreground"
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className={`h-full w-full object-cover transition duration-700 ${
                      active ? "scale-105 grayscale-[10%] opacity-42" : "grayscale-[25%] opacity-88 group-hover:scale-105"
                    }`}
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${active ? "bg-[#11100d]/72" : "bg-gradient-to-t from-black/80 via-black/18 to-transparent"}`} />
                </div>

                <div className="relative z-20 flex min-h-[560px] flex-col justify-between p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`font-sans text-[10px] uppercase tracking-[0.26em] ${active ? "text-[#c9a86a]" : "text-white/64"}`}>
                        {person.role}
                      </p>
                    </div>
                    <span className={`flex h-10 w-10 items-center justify-center border transition-colors ${active ? "border-white/24 bg-white text-[#11100d]" : "border-white/24 text-white"}`}>
                      {active ? <X className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-4xl leading-none text-white md:text-5xl">{person.name}</h3>
                    <p className={`mt-4 max-w-sm font-sans text-sm leading-6 transition-opacity ${active ? "text-white/72 opacity-100" : "text-white/60 opacity-0 group-hover:opacity-100"}`}>
                      {person.focus}
                    </p>
                  </div>

                  <motion.div
                    initial={false}
                    animate={active ? { y: 0, opacity: 1 } : { y: 26, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="pointer-events-none border-t border-white/16 pt-5"
                  >
                    <div className="grid gap-3">
                      <a
                        href={`mailto:${person.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto inline-flex items-center gap-3 font-sans text-sm text-white transition-colors hover:text-[#c9a86a]"
                      >
                        <Mail className="h-4 w-4" />
                        {person.email}
                      </a>
                      <a
                        href={`tel:${person.phone.replace(/[^0-9+]/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto inline-flex items-center gap-3 font-sans text-sm text-white transition-colors hover:text-[#c9a86a]"
                      >
                        <Phone className="h-4 w-4" />
                        {person.phone}
                      </a>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto inline-flex items-center gap-3 font-sans text-sm text-white transition-colors hover:text-[#c9a86a]"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn profile
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
