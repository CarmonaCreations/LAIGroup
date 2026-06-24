import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

const architects = [
  {
    id: "marco",
    name: "Marco Alvarez",
    role: "Principal Architect",
    focus: "Commercial strategy, architectural direction, and complex stakeholder alignment.",
    bio: "Marco guides early decisions so ambitious projects stay clear, coordinated, and buildable.",
    note: "Keeps a field notebook of facade details, lobby thresholds, and small moves that make public buildings easier to navigate.",
    interestImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000",
    interestAlt: "Architectural lobby detail and interior threshold inspiration",
    email: "marco@laidesignassoc.com",
    linkedin: "https://www.linkedin.com/company/lai-design-associates-llc/",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "sofia",
    name: "Sofia Chen",
    role: "Design Director",
    focus: "Concept development, spatial experience, material systems, and design reviews.",
    bio: "Sofia shapes early concepts into refined spaces with material warmth and disciplined proportion.",
    note: "Builds small material palettes before each major review to keep the conversation tactile, precise, and human.",
    interestImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1000",
    interestAlt: "Material samples and architectural texture inspiration",
    email: "sofia@laidesignassoc.com",
    linkedin: "https://www.linkedin.com/company/lai-design-associates-llc/",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "james",
    name: "James Whitfield",
    role: "Project Architect",
    focus: "Documentation, consultant coordination, permitting, and construction-phase support.",
    bio: "James carries design intent through documentation so details remain useful in the field.",
    note: "Studies construction sequencing and site photos to make drawings more legible for the people building from them.",
    interestImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000",
    interestAlt: "Construction sequencing and jobsite coordination inspiration",
    email: "james@laidesignassoc.com",
    linkedin: "https://www.linkedin.com/company/lai-design-associates-llc/",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=900",
  },
];

export function TeamSection() {
  const [activeId, setActiveId] = useState(architects[0].id);
  const [isProfileFlipped, setIsProfileFlipped] = useState(false);
  const active = architects.find((person) => person.id === activeId) ?? architects[0];

  useEffect(() => {
    setIsProfileFlipped(false);
  }, [activeId]);

  return (
    <section id="team" className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-4 font-sans text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">Team</p>
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl">The studio behind the drawings, decisions, and details.</h1>
          <p className="mt-5 font-sans text-base leading-8 text-muted-foreground">Email stays visible. Select a profile, then hover or tap the portrait to see what shapes their point of view.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="grid gap-px bg-border">
            {architects.map((person, index) => {
              const selected = active.id === person.id;

              return (
                <motion.article
                  key={person.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveId(person.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveId(person.id);
                    }
                  }}
                  className={`grid cursor-pointer grid-cols-1 gap-5 p-5 transition-colors md:grid-cols-[132px_1fr] ${selected ? "bg-primary text-primary-foreground" : "bg-white/72 hover:bg-white"}`}
                >
                  <div className="group block text-left">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-40 w-full border border-white/70 object-cover object-top md:h-36"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <span className={`mt-3 inline-flex items-center gap-2 font-sans text-[10px] font-extrabold uppercase tracking-[0.18em] ${selected ? "text-white/78" : "text-primary"}`}>
                      View profile <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className={`font-sans text-[10px] font-extrabold uppercase tracking-[0.24em] ${selected ? "text-white/70" : "text-primary"}`}>{person.role}</p>
                        <h3 className="mt-2 font-display text-3xl">{person.name}</h3>
                      </div>
                      <a
                        href={`mailto:${person.email}`}
                        onClick={(event) => event.stopPropagation()}
                        className={`inline-flex min-w-0 items-center gap-2 border px-3 py-2 font-sans text-xs font-bold transition-colors ${selected ? "border-white/30 text-white hover:bg-white hover:text-primary" : "border-primary/20 bg-white text-primary hover:bg-primary hover:text-primary-foreground"}`}
                      >
                        <Mail className="h-4 w-4 shrink-0" />
                        <span className="truncate">{person.email}</span>
                      </a>
                    </div>

                    <p className={`mt-4 max-w-2xl font-sans text-sm leading-7 ${selected ? "text-white/78" : "text-muted-foreground"}`}>{person.bio}</p>
                    <p className={`mt-4 font-sans text-sm font-semibold ${selected ? "text-white" : "text-foreground"}`}>{person.focus}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <a
                        href={person.linkedin}
                        onClick={(event) => event.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-3 py-2 font-sans text-[11px] font-extrabold uppercase tracking-[0.16em] transition-colors ${selected ? "bg-white/12 text-white hover:bg-white hover:text-primary" : "bg-[#eef7fa] text-primary hover:bg-primary hover:text-primary-foreground"}`}
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-28"
          >
            <div
              role="button"
              tabIndex={0}
              aria-pressed={isProfileFlipped}
              aria-label={`Show ${active.name} interests`}
              onMouseEnter={() => setIsProfileFlipped(true)}
              onMouseLeave={() => setIsProfileFlipped(false)}
              onClick={() => {
                if (window.matchMedia("(hover: none)").matches) {
                  setIsProfileFlipped((current) => !current);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setIsProfileFlipped((current) => !current);
                }
              }}
              className="perspective-1000 h-[620px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              <div
                className="transform-style-3d relative h-full w-full transition-transform duration-700"
                style={{ transform: isProfileFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                <div className="backface-hidden absolute inset-0 bg-white/72 p-3 shadow-[0_24px_80px_rgba(16,72,102,0.14)] backdrop-blur">
                  <img src={active.image} alt={active.name} className="h-[420px] w-full object-cover object-top" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="option3-panel border-t border-border bg-white p-6">
                    <p className="mb-2 font-sans text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">Current profile</p>
                    <h3 className="font-display text-3xl text-foreground">{active.name}</h3>
                    <p className="mt-4 font-sans text-sm leading-7 text-muted-foreground">{active.bio}</p>
                  </div>
                </div>

                <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col bg-[#111c4d] p-3 text-white shadow-[0_24px_80px_rgba(16,72,102,0.14)]">
                  <div className="relative min-h-[360px] flex-1 overflow-hidden">
                    <img
                      src={active.interestImage}
                      alt={active.interestAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111c4d] via-[#111c4d]/45 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="mb-3 font-sans text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#65c6ef]">Outside The Studio</p>
                      <h3 className="font-display text-4xl leading-tight">{active.name}</h3>
                      <p className="mt-5 font-sans text-base leading-7 text-white/84">{active.note}</p>
                    </div>
                  </div>

                  <div className="grid gap-px bg-white/12">
                    <div className="bg-[#111c4d] p-4">
                      <p className="font-sans text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/45">Project Role</p>
                      <p className="mt-2 font-sans text-sm font-semibold text-white">{active.focus}</p>
                    </div>
                    <div className="bg-[#111c4d] p-4">
                      <p className="font-sans text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/45">Direct Contact</p>
                      <p className="mt-2 font-sans text-sm font-semibold text-[#65c6ef]">{active.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <Link href="/contact">
          <span className="mt-8 inline-flex cursor-pointer items-center gap-2 border-b border-primary/40 pb-1 font-sans text-xs font-extrabold uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary hover:text-[#086b99]">
            Start with the studio <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}




