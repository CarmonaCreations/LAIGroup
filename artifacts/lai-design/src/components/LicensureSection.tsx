import { useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, FileText, MapPinned } from "lucide-react";

type LicensedStateKey = "FL" | "LA" | "NC" | "SC" | "TN" | "WI";

const licensedStates: Record<LicensedStateKey, { name: string; note: string }> = {
  FL: {
    name: "Florida",
    note: "Architectural services represented for Florida projects. Add verified license numbers before publishing.",
  },
  LA: {
    name: "Louisiana",
    note: "Architectural services represented for Louisiana projects. Add verified license numbers before publishing.",
  },
  NC: {
    name: "North Carolina",
    note: "Architectural services represented for North Carolina projects. Add verified license numbers before publishing.",
  },
  SC: {
    name: "South Carolina",
    note: "Architectural services represented for South Carolina projects. Add verified license numbers before publishing.",
  },
  TN: {
    name: "Tennessee",
    note: "Architectural services represented for Tennessee projects. Add verified license numbers before publishing.",
  },
  WI: {
    name: "Wisconsin",
    note: "Architectural services represented for Wisconsin projects. Add verified license numbers before publishing.",
  },
};

const licensedStateKeys = Object.keys(licensedStates) as LicensedStateKey[];

const licenseRecords = [
  {
    title: "Active State Licensure",
    body: "Florida, Louisiana, North Carolina, South Carolina, Tennessee, and Wisconsin are highlighted as active licensing states.",
  },
  {
    title: "Certificates & Registrations",
    body: "Use this area for firm registrations, individual architect license numbers, certificates of authorization, and state-board language.",
  },
  {
    title: "Public Compliance",
    body: "This gives required license information a permanent home on the site and repeats the essentials in the footer.",
  },
];

function prepareMapSvg(svg: string) {
  return licensedStateKeys.reduce(
    (currentSvg, key) => {
      const stateClass = key.toLowerCase();
      const stateName = licensedStates[key].name;

      return currentSvg.replace(
        `<path class="${stateClass}"`,
        `<path class="${stateClass} licensed-state" tabindex="0" role="button" aria-label="${stateName} licensed state"`,
      );
    },
    svg.replace("<svg ", '<svg viewBox="0 0 959 593" preserveAspectRatio="xMidYMid meet" '),
  );
}

function getStateKeyFromTarget(target: EventTarget | null): LicensedStateKey | null {
  const path = target instanceof Element ? target.closest(".licensed-state") : null;

  if (!path) {
    return null;
  }

  return licensedStateKeys.find((key) => path.classList.contains(key.toLowerCase())) ?? null;
}

export function LicensureSection() {
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
    <section className="border-y border-border bg-[#f7fbfc] px-6 py-24 md:py-32">
      <style>{`
        .license-map-shell svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .license-map-shell svg path {
          transition: fill 180ms ease, filter 180ms ease, opacity 180ms ease;
        }

        .license-map-shell svg .licensed-state {
          cursor: pointer;
          fill: hsl(var(--primary) / 0.72) !important;
          outline: none;
        }

        .license-map-shell svg .licensed-state:hover,
        .license-map-shell svg .licensed-state:focus-visible {
          fill: hsl(var(--primary) / 0.92) !important;
          filter: drop-shadow(0 0 5px hsl(var(--primary) / 0.25));
        }

        .license-map-shell[data-selected="FL"] svg .fl,
        .license-map-shell[data-selected="LA"] svg .la,
        .license-map-shell[data-selected="NC"] svg .nc,
        .license-map-shell[data-selected="SC"] svg .sc,
        .license-map-shell[data-selected="TN"] svg .tn,
        .license-map-shell[data-selected="WI"] svg .wi {
          fill: hsl(var(--primary)) !important;
          filter: drop-shadow(0 0 7px hsl(var(--primary) / 0.3));
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-sans text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">Licensure & Credentials</p>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">Certified where the work moves forward.</h2>
          <p className="mt-7 max-w-xl font-sans text-base leading-8 text-muted-foreground">
            State licensure and professional credentials are part of the design conversation. This map gives LAI Design Associates a clear, client-friendly place to show where architectural credentials are active.
          </p>

          <div className="mt-10 grid gap-px bg-border">
            {licenseRecords.map((item) => (
              <div key={item.title} className="option3-panel bg-white p-5">
                <div className="mb-3 flex items-center gap-3">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  <h3 className="font-sans text-sm font-extrabold uppercase tracking-[0.18em] text-foreground">{item.title}</h3>
                </div>
                <p className="font-sans text-sm leading-6 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-white bg-white/72 p-5 shadow-[0_24px_80px_rgba(16,72,102,0.13)] backdrop-blur md:p-7"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">Licensed State Map</p>
              <h3 className="mt-2 font-display text-3xl text-foreground">Six-State Licensure</h3>
            </div>
            <MapPinned className="h-8 w-8 text-primary" />
          </div>

          <div className="overflow-hidden border border-border bg-[#edf6f9] p-4 md:p-6">
            <div
              className="license-map-shell"
              data-selected={selectedState}
              onClick={handleMapClick}
              onKeyDown={handleMapKeyDown}
              role="img"
              aria-label="United States map with Florida, Louisiana, North Carolina, South Carolina, Tennessee, and Wisconsin highlighted as licensed states"
            >
              {mapSvg ? (
                <div dangerouslySetInnerHTML={{ __html: mapSvg }} />
              ) : (
                <img src={`${import.meta.env.BASE_URL}images/us-states-map.svg`} alt="Blank United States states map" className="h-auto w-full" />
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-6 border-t border-primary/12 pt-4">
              <span className="inline-flex items-center gap-2 font-sans text-xs font-bold text-foreground">
                <span className="h-4 w-4 bg-primary" />
                Licensed
              </span>
              <span className="inline-flex items-center gap-2 font-sans text-xs font-bold text-foreground">
                <span className="h-4 w-4 border border-border bg-[#d7dde0]" />
                Not Licensed
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Object.entries(licensedStates).map(([abbr, state]) => (
              <button
                key={abbr}
                type="button"
                onClick={() => setSelectedState(abbr as LicensedStateKey)}
                className={`border p-4 text-left transition-colors ${
                  selectedState === abbr ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white hover:border-primary/40"
                }`}
              >
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.24em] opacity-70">Licensed State</p>
                <p className="mt-2 font-sans text-sm font-extrabold">{state.name}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 border border-border bg-white p-5">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-primary">Selected Licensed State</p>
            <h4 className="mt-2 font-display text-3xl text-foreground">{selected.name}</h4>
            <p className="mt-3 font-sans text-sm leading-6 text-muted-foreground">{selected.note}</p>
          </div>

          <div className="mt-6 flex items-start gap-3 border-t border-border pt-5">
            <FileText className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <p className="font-sans text-xs leading-6 text-muted-foreground">
              Add verified license numbers and certificate details before publishing if required by each state board.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
