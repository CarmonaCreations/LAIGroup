import { useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { motion } from "framer-motion";

type LicensedStateKey = "FL" | "LA" | "NC" | "SC" | "TN";

const licensedStates: Record<LicensedStateKey, { name: string; licenses: string }> = {
  FL: { name: "Florida", licenses: "#CA-28421 · #AR95581" },
  LA: { name: "Louisiana", licenses: "#AF0841" },
  NC: { name: "North Carolina", licenses: "#53876" },
  SC: { name: "South Carolina", licenses: "#101758" },
  TN: { name: "Tennessee", licenses: "#5482" },
};

function prepareMapSvg(svg: string) {
  return svg
    .replace("<svg ", '<svg viewBox="0 0 959 593" preserveAspectRatio="xMidYMid meet" ')
    .replace('<path class="fl"', '<path class="fl licensed-state" tabindex="0" role="button" aria-label="Florida licensed state"')
    .replace('<path class="la"', '<path class="la licensed-state" tabindex="0" role="button" aria-label="Louisiana licensed state"')
    .replace('<path class="nc"', '<path class="nc licensed-state" tabindex="0" role="button" aria-label="North Carolina licensed state"')
    .replace(
      '<path class="sc"',
      '<path class="sc licensed-state" tabindex="0" role="button" aria-label="South Carolina licensed state"',
    )
    .replace('<path class="tn"', '<path class="tn licensed-state" tabindex="0" role="button" aria-label="Tennessee licensed state"');
}

function getStateKeyFromTarget(target: EventTarget | null): LicensedStateKey | null {
  const state = target instanceof Element ? target.closest(".licensed-state") : null;

  if (!state) {
    return null;
  }

  for (const key of Object.keys(licensedStates) as LicensedStateKey[]) {
    if (state.classList.contains(key.toLowerCase())) {
      return key;
    }
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
        .license-map[data-selected="LA"] svg .la,
        .license-map[data-selected="NC"] svg .nc,
        .license-map[data-selected="SC"] svg .sc,
        .license-map[data-selected="TN"] svg .tn {
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
            className="flex h-full flex-col justify-center"
          >
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-4">Licensed Reach</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">Credentials across the states we serve.</h2>
            <div className="w-12 h-[1px] bg-primary mt-8 mb-7" />
            <p className="max-w-lg font-sans text-sm leading-7 text-muted-foreground">
              State registrations supporting architectural work across the Southeast.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-background p-5">
                <p className="font-display text-3xl text-primary">5</p>
                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Licensed States</p>
              </div>
              <div className="bg-background p-5">
                <p className="font-display text-3xl text-primary">6</p>
                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Credentials</p>
              </div>
            </div>

            <div className="mt-4 max-w-xl border border-border bg-muted/60 p-5 md:p-6">
              <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">License Directory</p>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {Object.entries(licensedStates).map(([abbr, state]) => (
                  <button
                    key={abbr}
                    type="button"
                    onClick={() => setSelectedState(abbr as LicensedStateKey)}
                    aria-pressed={selectedState === abbr}
                    className={`flex items-start justify-between gap-4 border p-3 text-left transition-all duration-200 ${
                      selectedState === abbr
                        ? "border-primary bg-primary text-primary-foreground shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
                        : "border-border/80 bg-background text-foreground hover:border-primary/50 hover:bg-white"
                    }`}
                  >
                    <div>
                      <p className={`font-sans text-[10px] font-semibold uppercase tracking-[0.2em] ${selectedState === abbr ? "text-primary-foreground" : "text-primary"}`}>{abbr}</p>
                      <p className="mt-1 font-sans text-xs">{state.name}</p>
                    </div>
                    <p className={`font-sans text-[10px] leading-relaxed text-right ${selectedState === abbr ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{state.licenses}</p>
                  </button>
                ))}
              </div>
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
              aria-label="United States map highlighting licensed states: Florida, Louisiana, North Carolina, South Carolina, and Tennessee"
            >
              {mapSvg ? (
                <div dangerouslySetInnerHTML={{ __html: mapSvg }} />
              ) : (
                <img src={`${import.meta.env.BASE_URL}images/us-states-map.svg`} alt="Blank United States states map" className="w-full h-auto" />
              )}
            </div>

            <div className="border-x border-b border-border bg-background p-6">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Selected State</p>
                <h3 className="font-display text-2xl text-foreground">{selected.name}</h3>
                <p className="mt-3 font-sans text-[10px] tracking-[0.22em] uppercase text-muted-foreground">License number</p>
                <p className="mt-1 font-sans text-sm font-medium leading-relaxed text-foreground">{selected.licenses}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
