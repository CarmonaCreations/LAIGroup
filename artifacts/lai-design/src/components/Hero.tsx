import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, DraftingCompass, HardHat, Map } from "lucide-react";

import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import hollywoodAcademy from "@assets/Hollywood-Academy-Of-Arts-Sciences_1773411287413.jpg";

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
    href: "#lai-construction",
    label: "Same company family",
    body: "Preconstruction, project delivery, and field execution.",
    action: "View construction",
    Icon: HardHat,
    active: false,
  },
  {
    name: "LAI Civil",
    href: "#lai-civil",
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
      <div className="absolute left-6 right-6 top-[72%] h-px bg-white/10 md:left-10 md:right-10 lg:top-auto lg:bottom-36" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-6 pt-28 md:px-8 lg:px-6 lg:pt-24">
        <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.38em] text-[#c9a86a]">
              LAI Group / Design Division
            </p>
            <h1 className="font-display text-[clamp(4rem,9.5vw,8.6rem)] leading-[0.84] text-white">
              LAI<br />Design
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-7 text-white/72 md:text-lg md:leading-8">
              Architectural design for commercial, education, civic, industrial, and medical manufacturing projects.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-12 gap-3 lg:ml-auto lg:w-full lg:max-w-2xl"
            aria-label="Selected LAI Design work"
          >
            <div className="col-span-12 overflow-hidden border border-white/14 bg-white/5 md:col-span-8">
              <img
                src={innovationPrep}
                alt="Innovation Preparatory Academy"
                className="h-[230px] w-full object-cover grayscale-[25%] md:h-[330px] lg:h-[380px]"
              />
            </div>
            <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-4 md:grid-cols-1">
              <div className="overflow-hidden border border-white/14 bg-white/5">
                <img
                  src={arthrexAMIE}
                  alt="Arthrex AMIE"
                  className="h-28 w-full object-cover grayscale-[25%] md:h-[158px] lg:h-[184px]"
                />
              </div>
              <div className="overflow-hidden border border-white/14 bg-white/5">
                <img
                  src={hollywoodAcademy}
                  alt="Hollywood Academy of Arts and Sciences"
                  className="h-28 w-full object-cover grayscale-[25%] md:h-[158px] lg:h-[184px]"
                />
              </div>
            </div>
            <p className="col-span-12 font-sans text-[10px] uppercase tracking-[0.28em] text-white/44">
              Selected education and medical manufacturing work
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="mt-8 border border-white/14 bg-[#11100d]/88 backdrop-blur lg:mt-4"
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
                <span className={`group flex min-h-[150px] flex-col justify-between border-b border-white/12 p-5 text-left transition-colors last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 ${active ? "bg-white text-[#11100d]" : "text-white hover:bg-white/[0.07]"}`}>
                  <span>
                    <span className="mb-4 flex items-center justify-between gap-4">
                      <span className={`font-sans text-[10px] uppercase tracking-[0.24em] ${active ? "text-[#876b32]" : "text-[#c9a86a]"}`}>
                        {label}
                      </span>
                      <span className={`flex h-10 w-10 items-center justify-center border ${active ? "border-[#11100d]/20" : "border-white/18"}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                    </span>
                    <span className="block font-sans text-lg font-semibold tracking-[-0.01em]">{name}</span>
                    <span className={`mt-3 block font-sans text-sm leading-6 ${active ? "text-[#403b33]" : "text-white/58"}`}>
                      {body}
                    </span>
                  </span>

                  <span className={`mt-5 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] ${active ? "text-[#11100d]" : "text-white"}`}>
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
              <a href={href} key={name} onClick={(event) => event.preventDefault()} aria-disabled="true">
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
