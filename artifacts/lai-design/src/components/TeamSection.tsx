import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const architects = [
  {
    id: "marco",
    name: "Marco Alvarez",
    role: "Principal Architect",
    email: "marco@laidesignassoc.com",
    phone: "239-405-6888",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    collage: [
      "https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
    ]
  },
  {
    id: "sofia",
    name: "Sofia Chen",
    role: "Design Director",
    email: "sofia@laidesignassoc.com",
    phone: "239-405-6888",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    collage: [
      "https://picsum.photos/seed/travel1/400/300",
      "https://picsum.photos/seed/garden2/400/300",
      "https://picsum.photos/seed/ceramics3/400/300",
      "https://picsum.photos/seed/ocean4/400/300",
    ]
  },
  {
    id: "james",
    name: "James Whitfield",
    role: "Project Architect",
    email: "james@laidesignassoc.com",
    phone: "239-405-6888",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    collage: [
      "https://picsum.photos/seed/mountain5/400/300",
      "https://picsum.photos/seed/drone6/400/300",
      "https://picsum.photos/seed/sport7/400/300",
      "https://picsum.photos/seed/wood8/400/300",
    ]
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            Hover each card to discover the inspirations and passions behind the craft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {architects.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group perspective-1000 cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full transform-style-3d transition-transform duration-1000 group-hover:rotate-y-180 shadow-2xl shadow-black/50">

                {/* FRONT: Portrait */}
                <div className="absolute inset-0 backface-hidden bg-card overflow-hidden rounded-sm">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover filter grayscale-[20%] contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="font-display text-2xl text-white mb-1">{person.name}</h3>
                    <p className="font-sans text-xs text-primary tracking-widest uppercase">{person.role}</p>
                  </div>
                </div>

                {/* BACK: Inspirations Collage */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card border border-border rounded-sm flex flex-col overflow-hidden">
                  <div className="p-6 pb-4 flex-shrink-0 bg-background/60 border-b border-border">
                    <h4 className="font-display text-lg text-foreground">Inspirations</h4>
                    <p className="font-sans text-xs text-muted-foreground mt-1">The elements behind the craft</p>
                  </div>
                  <div className="flex-1 p-3 grid grid-cols-2 grid-rows-2 gap-2 bg-muted/20">
                    {person.collage.map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-sm bg-background">
                        <img
                          src={img}
                          alt="Inspiration"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          crossOrigin="anonymous"
                          className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              <div className="mt-4 overflow-hidden border border-border bg-card/90 shadow-lg shadow-black/10">
                <div className="p-4">
                  <h3 className="font-display text-xl text-foreground">{person.name}</h3>
                  <p className="font-sans text-xs text-primary tracking-widest uppercase">{person.role}</p>
                </div>
                <div className="border-t border-border">
                  <a
                    href={`mailto:${person.email}`}
                    className="group/contact flex w-full items-center gap-3 px-4 py-4 font-sans text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0 text-primary transition-colors group-hover/contact:text-primary-foreground" aria-hidden="true" />
                    <span className="truncate">{person.email}</span>
                  </a>
                  <a
                    href={`tel:${person.phone.replace(/[^0-9+]/g, "")}`}
                    className="group/contact flex w-full items-center gap-3 border-t border-border px-4 py-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0 text-primary transition-colors group-hover/contact:text-primary-foreground" aria-hidden="true" />
                    <span>{person.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
