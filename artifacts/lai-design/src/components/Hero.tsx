import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Building2, DraftingCompass, HardHat, Map } from "lucide-react";

import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import hollywoodAcademy from "@assets/Hollywood-Academy-Of-Arts-Sciences_1773411287413.jpg";

const companies = [
  {
    name: "Design",
    href: "/",
    status: "Current studio",
    body: "Architecture, planning, interiors, and project visioning.",
    Icon: DraftingCompass,
    active: true,
  },
  {
    name: "Construction",
    href: "https://lai-construction.com",
    status: "Company site",
    body: "Preconstruction, delivery strategy, and field execution.",
    Icon: HardHat,
    active: false,
  },
  {
    name: "Civil",
    href: "https://lai-civil.com",
    status: "Company site",
    body: "Site design, infrastructure, permitting, and land development.",
    Icon: Map,
    active: false,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#11100d] text-white">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/topographic-lines.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,13,0.98)_0%,rgba(17,16,13,0.78)_45%,rgba(17,16,13,0.24)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.34em] text-[#c9a86a]">
            LAI Design Studio
          </p>
          <h1 className="font-display text-[clamp(3.15rem,8vw,7.7rem)] uppercase leading-[0.9] text-white">
            Architecture with build-ready intelligence.
          </h1>
          <p className="mt-7 max-w-2xl font-sans text-base leading-8 text-white/72 md:text-lg">
            A sharper digital home for LAI's design practice: refined planning, technical clarity, and architectural spaces shaped for real-world delivery.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/work">
              <span className="inline-flex cursor-pointer items-center justify-center gap-2 bg-[#c9a86a] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#11100d] transition-colors hover:bg-white">
                View Design Work <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex cursor-pointer items-center justify-center gap-2 border border-white/30 px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#11100d]">
                Start a Design Brief
              </span>
            </Link>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 border-y border-white/15">
            {[
              ["25+", "Years"],
              ["200+", "Projects"],
              ["3", "Disciplines"],
            ].map(([number, label]) => (
              <div key={label} className="border-r border-white/15 py-5 last:border-r-0">
                <p className="font-display text-3xl text-white">{number}</p>
                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.24em] text-white/48">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden min-h-[620px] lg:block"
        >
          <div className="absolute right-0 top-0 h-[78%] w-[72%] overflow-hidden border border-white/18">
            <img src={innovationPrep} alt="Innovation Preparatory Academy design project" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="absolute bottom-20 left-2 h-[46%] w-[45%] overflow-hidden border-8 border-[#11100d] bg-[#11100d]">
            <img src={arthrexAMIE} alt="Arthrex AMIE architectural project" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-20 h-40 w-64 overflow-hidden border border-white/18">
            <img src={hollywoodAcademy} alt="Hollywood Academy of Arts and Sciences design project" className="h-full w-full object-cover" />
          </div>
          <div className="absolute left-10 top-16 flex h-28 w-28 items-center justify-center border border-[#c9a86a]/60 bg-[#11100d]/80 backdrop-blur">
            <Building2 className="h-10 w-10 text-[#c9a86a]" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-12 lg:-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="grid grid-cols-1 border border-white/16 bg-[#171612]/92 backdrop-blur md:grid-cols-3"
          aria-label="LAI company websites"
        >
          {companies.map(({ name, href, status, body, Icon, active }) => {
            const content = (
              <span className={`group flex min-h-[168px] flex-col justify-between border-b border-white/12 p-6 text-left transition-colors last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 ${active ? "bg-white text-[#11100d]" : "text-white hover:bg-white/8"}`}>
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className={`font-sans text-[10px] uppercase tracking-[0.24em] ${active ? "text-[#876b32]" : "text-[#c9a86a]"}`}>{status}</span>
                    <span className="mt-3 block font-display text-2xl uppercase tracking-[0.08em]">{name}</span>
                  </span>
                  <span className={`flex h-11 w-11 items-center justify-center border ${active ? "border-[#11100d]/20" : "border-white/18 group-hover:border-[#c9a86a]"}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                </span>
                <span className={`mt-8 flex items-end justify-between gap-6 font-sans text-sm leading-6 ${active ? "text-[#403b33]" : "text-white/62"}`}>
                  {body}
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        </motion.div>
      </div>
    </section>
  );
}
