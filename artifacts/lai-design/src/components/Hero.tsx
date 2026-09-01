import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, DraftingCompass, HardHat, Route } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import hollywoodAcademy from "@assets/Hollywood-Academy-Of-Arts-Sciences_1773411287413.jpg";
import arthrexAMISC from "@assets/Arthrex-AMISC_1773411287410.jpg";
import clubParagon from "@assets/Club-Paragon_1773411287411.jpg";

const slides = [innovationPrep, arthrexAMIE, hollywoodAcademy, arthrexAMISC, clubParagon];
const SLIDE_INTERVAL = 5000;

const siblingSites = {
  construction: import.meta.env.VITE_LAI_CONSTRUCTION_URL || "#",
  civil: import.meta.env.VITE_LAI_CIVIL_URL || "#",
};

type SiteCardProps = {
  name: string;
  label: string;
  href: string;
  Icon: typeof DraftingCompass;
  active?: boolean;
};

function SiteCard({ name, label, href, Icon, active = false }: SiteCardProps) {
  const card = (
    <span
      className={`group flex h-full flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1 ${
        active
          ? "border-2 border-[#28a9e8]/75 bg-white/95 p-6 shadow-[0_20px_54px_rgba(52,80,164,0.14)]"
          : "border border-white bg-white/90 p-4 shadow-[0_14px_36px_rgba(52,80,164,0.09)]"
      }`}
    >
      <span>
        <span className="mb-5 flex items-center justify-between gap-4">
          <Icon className={`h-5 w-5 ${active ? "text-[#08a6eb]" : "text-[#3947a7]"}`} />
          <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.23em] text-[#5f687f]">{label}</span>
        </span>
        <span className={`block font-sans font-medium leading-tight text-[#17213d] ${active ? "text-[22px]" : "text-xl"}`}>{name}</span>
      </span>
      <span className="mt-5 inline-flex items-center gap-2 font-sans text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#08a6eb]">
        {active ? "View Design" : "Visit Website"}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </span>
  );

  if (active) return <Link href={href}>{card}</Link>;

  const available = href !== "#";
  return (
    <a
      href={href}
      target={available ? "_blank" : undefined}
      rel={available ? "noopener noreferrer" : undefined}
      aria-disabled={!available}
      onClick={available ? undefined : (event) => event.preventDefault()}
      className={!available ? "cursor-default" : undefined}
    >
      {card}
    </a>
  );
}

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrent((previous) => (previous + 1) % slides.length), SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black px-5 pb-14 pt-28 md:px-8 md:pt-32">
      <AnimatePresence>
        <motion.img
          key={current}
          src={slides[current]}
          alt=""
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 6.2, ease: "linear" } }}
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-20 w-full bg-gradient-to-r from-black/42 via-black/12 to-transparent lg:w-[58%]" />

      <div className="mx-auto grid max-w-[1380px] items-center gap-10 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mx-auto max-w-[590px] text-center lg:mx-0 lg:text-left">
          <h1 className="font-sans text-[clamp(3.5rem,6vw,6.25rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]">
            LAI Design<br />Associates
          </h1>
          <p className="mx-auto mt-7 max-w-[560px] font-sans text-base leading-8 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:text-lg lg:mx-0">
            Architecture for complex work, connected to build and site intelligence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href="/work"><span className="inline-flex cursor-pointer items-center justify-center gap-2 bg-[#08a6eb] px-6 py-4 font-sans text-xs font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#087fc1]">Explore Projects <ArrowUpRight className="h-4 w-4" /></span></Link>
            <Link href="/contact"><span className="inline-flex cursor-pointer items-center justify-center border border-white/70 bg-black/15 px-6 py-4 font-sans text-xs font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:bg-black/30">Contact LAI</span></Link>
          </div>
        </motion.div>

        <div className="relative mx-auto hidden w-full max-w-[740px] p-5 md:block lg:p-7">
          <div className="relative h-[540px] w-full">
            <svg viewBox="0 0 700 540" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M350 38 L95 480 L605 480 Z" fill="rgba(255,255,255,0.12)" stroke="#4269c7" strokeWidth="3" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="absolute left-1/2 top-0 h-[190px] w-[250px] -translate-x-1/2"><SiteCard name="Design Associates" label="Architecture" href="/work" Icon={DraftingCompass} active /></div>
            <div className="absolute left-1/2 top-[333px] flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center drop-shadow-[0_22px_34px_rgba(52,80,164,0.2)]"><BrandMark className="h-full w-full" /></div>
            <div className="absolute bottom-0 left-0 h-[140px] w-[190px]"><SiteCard name="Construction" label="Delivery" href={siblingSites.construction} Icon={HardHat} /></div>
            <div className="absolute bottom-0 right-0 h-[140px] w-[190px]"><SiteCard name="Civil" label="Sitework" href={siblingSites.civil} Icon={Route} /></div>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-md gap-4 p-4 md:hidden">
          <div className="h-[190px]"><SiteCard name="Design Associates" label="Architecture" href="/work" Icon={DraftingCompass} active /></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-[160px]"><SiteCard name="Construction" label="Delivery" href={siblingSites.construction} Icon={HardHat} /></div>
            <div className="h-[160px]"><SiteCard name="Civil" label="Sitework" href={siblingSites.civil} Icon={Route} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
