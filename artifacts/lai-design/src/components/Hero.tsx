import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import innovationPrep from "@assets/Innovation-Preparatory-Academy_1773411287414.jpg";
import arthrexAMIE from "@assets/Arthrex-AMIE_1773411287409.jpg";
import hollywoodAcademy from "@assets/Hollywood-Academy-Of-Arts-Sciences_1773411287413.jpg";
import arthrexAMISC from "@assets/Arthrex-AMISC_1773411287410.jpg";
import clubParagon from "@assets/Club-Paragon_1773411287411.jpg";

const slides = [
  { image: innovationPrep, label: "Innovation Preparatory Academy — Education" },
  { image: arthrexAMIE, label: "Arthrex AMIE — Medical Manufacturing" },
  { image: hollywoodAcademy, label: "Hollywood Academy of Arts & Sciences" },
  { image: arthrexAMISC, label: "Arthrex AMISC — South Carolina" },
  { image: clubParagon, label: "Club Paragon — Commercial" },
];

const INTERVAL = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Slideshow */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].label}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: INTERVAL / 1000 + 1.5, ease: "linear" }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-display text-white uppercase font-bold drop-shadow-lg mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 1.06 }}
          >
            Building<br />a Future
          </h1>

          <div className="space-y-2 mb-10">
            <p className="font-sans text-sm tracking-[0.28em] uppercase text-white/85">
              Plan · Design · Engineer · Construct
            </p>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-white/55">
              Florida · South Carolina · Nationwide
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work">
              <span className="inline-flex items-center gap-2 bg-white text-foreground font-sans text-xs tracking-[0.18em] uppercase px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors cursor-pointer shadow-lg">
                View Our Work <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-sans text-xs tracking-[0.18em] uppercase px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                Start a Project
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${current}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-14 left-8 md:left-14"
        >
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50">
            {slides[current].label}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-14 right-8 md:right-14 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-500"
          >
            <div className={`h-[2px] rounded-full transition-all duration-500 ${i === current ? "w-8 bg-white" : "w-3 bg-white/35"}`} />
          </button>
        ))}
      </div>

    </section>
  );
}
