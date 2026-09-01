import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import bruceBanner from "@assets/team-bruce-banner-vertical.webp";
import wandaMaximoff from "@assets/team-wanda-maximoff-vertical.webp";
import tonyStark from "@assets/team-tony-stark-vertical.webp";
import carolDanvers from "@assets/team-carol-danvers-vertical.webp";
import hopeVanDyne from "@assets/team-hope-van-dyne-vertical.webp";

const architects = [
  {
    id: "bruce",
    name: "Bruce Banner",
    role: "Hulk",
    email: "bruce@laidesignassoc.com",
    phone: "239-405-6888",
    image: bruceBanner,
    collage: [
      "https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
    ]
  },
  {
    id: "wanda",
    name: "Wanda Maximoff",
    role: "Scarlet Witch",
    email: "wanda@laidesignassoc.com",
    phone: "239-405-6888",
    image: wandaMaximoff,
    collage: [
      "https://picsum.photos/seed/travel1/400/300",
      "https://picsum.photos/seed/garden2/400/300",
      "https://picsum.photos/seed/ceramics3/400/300",
      "https://picsum.photos/seed/ocean4/400/300",
    ]
  },
  {
    id: "tony",
    name: "Tony Stark",
    role: "Iron Man",
    email: "tony@laidesignassoc.com",
    phone: "239-405-6888",
    image: tonyStark,
    collage: [
      "https://picsum.photos/seed/mountain5/400/300",
      "https://picsum.photos/seed/drone6/400/300",
      "https://picsum.photos/seed/sport7/400/300",
      "https://picsum.photos/seed/wood8/400/300",
    ]
  },
  {
    id: "carol",
    name: "Carol Danvers",
    role: "Captain Marvel",
    email: "carol@laidesignassoc.com",
    phone: "239-405-6888",
    image: carolDanvers,
    collage: [
      "https://picsum.photos/seed/planning9/400/300",
      "https://picsum.photos/seed/material10/400/300",
      "https://picsum.photos/seed/sketch11/400/300",
      "https://picsum.photos/seed/city12/400/300",
    ]
  },
  {
    id: "hope",
    name: "Hope van Dyne",
    role: "Wasp",
    email: "hope@laidesignassoc.com",
    phone: "239-405-6888",
    image: hopeVanDyne,
    collage: [
      "https://picsum.photos/seed/interior13/400/300",
      "https://picsum.photos/seed/texture14/400/300",
      "https://picsum.photos/seed/studio15/400/300",
      "https://picsum.photos/seed/landscape16/400/300",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[architects[1], architects[0], ...architects.slice(2)].map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group perspective-1000 cursor-pointer"
            >
              <div className="relative aspect-[5/7] w-full transform-style-3d transition-transform duration-1000 group-hover:rotate-y-180 shadow-2xl shadow-black/50">

                {/* FRONT: Portrait */}
                <div className="absolute inset-0 backface-hidden bg-white overflow-hidden rounded-sm">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="w-full h-full object-contain object-center filter saturate-[0.88] contrast-[1.04]"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-[58%]"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(5, 20, 43, 0.98) 0%, rgba(5, 20, 43, 0.9) 24%, rgba(5, 20, 43, 0.54) 55%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3
                      className="font-display text-2xl text-white mb-1"
                      style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.75)" }}
                    >
                      {person.name}
                    </h3>
                    <p
                      className="font-sans text-xs font-semibold text-sky-100 tracking-widest uppercase"
                      style={{ textShadow: "0 1px 8px rgba(0, 0, 0, 0.8)" }}
                    >
                      {person.role}
                    </p>
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
