import { useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { motion } from "framer-motion";

type LicensedStateKey = "FL" | "SC";

const licensedStates: Record<LicensedStateKey, { name: string; detail: string }> = {
  FL: {
    name: "Florida",
    detail: "Active project experience and licensure information for Florida-based work.",
  },
  SC: {
    name: "South Carolina",
    detail: "Active project experience and licensure information for South Carolina-based work.",
  },
};

const licenseNotes = [
  "Architectural design services",
  "Public-facing credential area",
  "License numbers pending client confirmation",
];

function prepareMapSvg(svg: string) {
  return svg
    .replace("<svg ", '<svg viewBox="0 0 959 593" preserveAspectRatio="xMidYMid meet" ')
    .replace('<path class="fl"', '<path class="fl licensed-state" tabindex="0" role="button" aria-label="Florida licensed state"')
    .replace(
      '<path class="sc"',
      '<path class="sc licensed-state" tabindex="0" role="button" aria-label="South Carolina licensed state"',
    );
}

function getStateKeyFromTarget(target: EventTarget | null): LicensedStateKey | null {
  const state = target instanceof Element ? target.closest(".licensed-state") : null;

  if (!state) {
    return null;
  }

  if (state.classList.contains("fl")) {
    return "FL";
  }

  if (state.classList.contains("sc")) {
    return "SC";
  }

  return null;
}

export function LicensureMap() {
  const [selectedState, setSelectedState] = useState<LicensedStateKey>("FL");
  const [mapSvg, setMapSvg] = useState("");
  const selected = licensedStates[selectedState];

  useEffect(() => {
    let isMounted = true;

    fetch(`${import.meta.env.BASE_URL}images/us-states-map.svg`)
      .then((response) => response.text())
      .then((svg) => {
        if (isMounted) {
          setMapSvg(prepareMapSvg(svg));
        }
      })
      .catch(() => {
        if (isMounted) {
          setMapSvg("");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleMapClick = (event: MouseEvent<HTMLDivElement>) => {
    const stateKey = getStateKeyFromTarget(event.target);

    if (stateKey) {
      setSelectedState(stateKey);
    }
  };

  const handleMapKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const stateKey = getStateKeyFromTarget(event.target);

    if (stateKey) {
      event.preventDefault();
      setSelectedState(stateKey);
    }
  };

  return (
    <section className="px-6 py-24 md:py-32 bg-background border-t border-border">
      <style>{`
        .license-map svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .license-map svg path {
          transition: fill 180ms ease, filter 180ms ease, opacity 180ms ease;
        }

        .license-map svg .licensed-state {
          cursor: pointer;
          fill: hsl(var(--primary) / 0.72) !important;
          outline: none;
        }

        .license-map svg .licensed-state:hover,
        .license-map svg .licensed-state:focus-visible {
          fill: hsl(var(--primary) / 0.92) !important;
          filter: drop-shadow(0 0 5px hsl(var(--primary) / 0.24));
        }

        .license-map[data-selected="FL"] svg .fl,
        .license-map[data-selected="SC"] svg .sc {
          fill: hsl(var(--primary)) !important;
          filter: drop-shadow(0 0 7px hsl(var(--primary) / 0.28));
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-4">Licensed Reach</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">Credentials across the states we serve.</h2>
            <div className="w-12 h-[1px] bg-primary mt-8 mb-8" />
            <p className="font-sans text-muted-foreground text-base leading-relaxed max-w-xl">
              Licensure and certificate information gives clients a clear point of reference before a project begins. Florida and South Carolina are highlighted here for review while final license numbers are confirmed.
            </p>

            <div className="mt-10 grid gap-px bg-border max-w-xl">
              {licenseNotes.map((note) => (
                <div key={note} className="bg-background p-5">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground">{note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-border bg-muted p-4 md:p-7"
          >
            <div
              className="license-map bg-white border border-border p-4 md:p-6"
              data-selected={selectedState}
              onClick={handleMapClick}
              onKeyDown={handleMapKeyDown}
              role="img"
              aria-label="United States map with Florida and South Carolina highlighted"
            >
              {mapSvg ? (
                <div dangerouslySetInnerHTML={{ __html: mapSvg }} />
              ) : (
                <img src={`${import.meta.env.BASE_URL}images/us-states-map.svg`} alt="Blank United States states map" className="w-full h-auto" />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 border-x border-b border-border bg-background p-6">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Selected State</p>
                <h3 className="font-display text-2xl text-foreground">{selected.name}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{selected.detail}</p>
              </div>

              <div className="flex md:flex-col gap-3">
                {Object.entries(licensedStates).map(([abbr, state]) => (
                  <button
                    key={abbr}
                    type="button"
                    onClick={() => setSelectedState(abbr as LicensedStateKey)}
                    className={`min-w-20 border px-4 py-3 text-left transition-colors ${
                      selectedState === abbr ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/40"
                    }`}
                  >
                    <span className="block font-sans text-[10px] tracking-[0.25em] uppercase">{abbr}</span>
                    <span className="block mt-1 font-sans text-xs">{state.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
