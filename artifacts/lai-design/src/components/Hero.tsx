import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, DraftingCompass, HardHat, Map } from "lucide-react";

const companies = [
  {
    name: "LAI Design",
    href: "/",
    label: "You are here",
    body: "Architecture, planning, and technical coordination.",
    action: "View design",
    Icon: DraftingCompass,
    active: true,
  },
  {
    name: "LAI Construction",
    href: "https://lai-construction.com",
    label: "Same company family",
    body: "Preconstruction, project delivery, and field execution.",
    action: "View construction",
    Icon: HardHat,
    active: false,
  },
  {
    name: "LAI Civil",
    href: "https://lai-civil.com",
    label: "Same company family",
    body: "Civil engineering, site design, permitting, and infrastructure.",
    action: "View civil",
    Icon: Map,
    active: false,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#11100d] text-white">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/10 lg:block" />
      <div className="absolute left-6 right-6 top-[72%] h-px bg-white/10 md:left-10 md:right-10 lg:top-auto lg:bottom-44" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-10 pt-32 md:px-8 lg:px-6">
        <div className="grid flex-1 grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-8 font-sans text-[11px] uppercase tracking-[0.38em] text-[#c9a86a]">
              LAI Group / Design Division
            </p>
            <h1 className="font-display text-[clamp(4.5rem,12vw,11rem)] leading-[0.82] text-white">
              LAI<br />Design
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="font-sans text-xl leading-9 text-white/76 md:text-2xl md:leading-10">
              Architectural design for commercial, education, civic, industrial, and medical manufacturing projects.
            </p>
            <p className="mt-7 font-sans text-sm leading-7 text-white/52">
              LAI Design is one part of a connected company family. When a project needs delivery or civil engineering support, LAI Construction and LAI Civil are one click away.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center justify-center gap-2 bg-white px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#11100d] transition-colors hover:bg-[#c9a86a]">
                  View Work <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex cursor-pointer items-center justify-center gap-2 border border-white/24 px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#11100d]">
                  Contact Design
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="mt-16 border border-white/14 bg-[#11100d]/88 backdrop-blur"
          aria-label="LAI company websites"
        >
          <div className="border-b border-white/12 px-5 py-4 md:px-6">
            <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-white/46">
              Three connected LAI companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {companies.map(({ name, href, label, body, action, Icon, active }) => {
              const content = (
                <span className={`group flex min-h-[190px] flex-col justify-between border-b border-white/12 p-5 text-left transition-colors last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-6 ${active ? "bg-white text-[#11100d]" : "text-white hover:bg-white/[0.07]"}`}>
                  <span>
                    <span className="mb-7 flex items-center justify-between gap-4">
                      <span className={`font-sans text-[10px] uppercase tracking-[0.24em] ${active ? "text-[#876b32]" : "text-[#c9a86a]"}`}>
                        {label}
                      </span>
                      <span className={`flex h-10 w-10 items-center justify-center border ${active ? "border-[#11100d]/20" : "border-white/18"}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                    </span>
                    <span className="block font-sans text-xl font-semibold tracking-[-0.01em]">{name}</span>
                    <span className={`mt-3 block font-sans text-sm leading-6 ${active ? "text-[#403b33]" : "text-white/58"}`}>
                      {body}
                    </span>
                  </span>

                  <span className={`mt-8 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] ${active ? "text-[#11100d]" : "text-white"}`}>
                    {action}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              );

              return active ? (
                <Link href={href} key={name}>
                  {content}
                </Link>
              ) : (
                <a href={href} key={name}>
                  {content}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
