import { useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, FileText, MapPinned } from "lucide-react";

type LicensedStateKey = "FL" | "SC";

const licensedStates: Record<LicensedStateKey, { name: string; note: string }> = {
  FL: {
    name: "Florida",
    note: "Architectural services represented for Florida projects. Add verified license numbers before publishing.",
  },
  SC: {
    name: "South Carolina",
    note: "Architectural services represented for South Carolina projects. Add verified license numbers before publishing.",
  },
};

const licenseRecords = [
  {
    title: "Active State Licensure",
    body: "Florida and South Carolina are highlighted for now. Additional licensed states can be added as the firm expands or verifies registrations.",
  },
  {
    title: "Certificates & Registrations",
    body: "Use this area for firm registrations, individual architect license numbers, certificates of authorization, and required state-board language.",
  },
  {
    title: "Public Compliance",
    body: "Some states require license information to be visible on firm websites. This section gives that information a permanent, easy-to-find home.",
  },
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
  const path = target instanceof Element ? target.closest(".licensed-state") : null;

  if (!path) {
    return null;
  }

  if (path.classList.contains("fl")) {
    return "FL";
  }

  if (path.classList.contains("sc")) {
    return "SC";
  }

  return null;
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
    <section className="border-t border-border bg-[#11100d] px-6 py-24 text-white md:py-32">
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
          fill: #c9a86a !important;
          outline: none;
        }

        .license-map-shell svg .licensed-state:hover,
        .license-map-shell svg .licensed-state:focus-visible {
          fill: #b88a3d !important;
          filter: drop-shadow(0 0 5px rgba(201, 168, 106, 0.72));
        }

        .license-map-shell[data-selected="FL"] svg .fl,
        .license-map-shell[data-selected="SC"] svg .sc {
          fill: #9d6f2f !important;
          filter: drop-shadow(0 0 7px rgba(201, 168, 106, 0.78));
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.35em] text-[#c9a86a]">Licensure & Credentials</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">Licensed where the work happens.</h2>
          <p className="mt-7 max-w-xl font-sans text-sm leading-7 text-white/64 md:text-base">
            State licensure and professional credentials are important for public trust and compliance. This section gives LAI Design Associates a clear place to show active states, certificates, and required license information.
          </p>

          <div className="mt-10 grid gap-px bg-white/12">
            {licenseRecords.map((item) => (
              <div key={item.title} className="bg-[#11100d] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <BadgeCheck className="h-4 w-4 text-[#c9a86a]" />
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.2em]">{item.title}</h3>
                </div>
                <p className="font-sans text-sm leading-6 text-white/62">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-white/14 bg-white/[0.03] p-5 md:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-white/46">Licensed State Map</p>
              <h3 className="mt-2 font-display text-3xl">Florida & South Carolina</h3>
            </div>
            <MapPinned className="h-8 w-8 text-[#c9a86a]" />
          </div>

          <div className="overflow-hidden border border-white/12 bg-[#f7f6f2] p-4 md:p-6">
            <div
              className="license-map-shell"
              data-selected={selectedState}
              onClick={handleMapClick}
              onKeyDown={handleMapKeyDown}
              role="img"
              aria-label="United States map with Florida and South Carolina highlighted as licensed states"
            >
              {mapSvg ? (
                <div dangerouslySetInnerHTML={{ __html: mapSvg }} />
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}images/us-states-map.svg`}
                  alt="Blank United States states map"
                  className="h-auto w-full"
                />
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-6 border-t border-black/10 pt-4">
              <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#1f2937]">
                <span className="h-4 w-4 rounded-sm bg-[#9d6f2f]" />
                Licensed
              </span>
              <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#1f2937]">
                <span className="h-4 w-4 rounded-sm border border-black/10 bg-[#d9d9d6]" />
                Not Licensed
              </span>
            </div>
          </div>

          <div className="mt-6 border border-white/12 p-5">
            <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#c9a86a]">Selected Licensed State</p>
            <h4 className="mt-2 font-display text-3xl text-white">{selected.name}</h4>
            <p className="mt-3 font-sans text-sm leading-6 text-white/62">{selected.note}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {Object.entries(licensedStates).map(([abbr, state]) => (
              <button
                key={abbr}
                type="button"
                onClick={() => setSelectedState(abbr as LicensedStateKey)}
                className={`border p-4 text-left transition-colors ${
                  selectedState === abbr ? "border-[#c9a86a] bg-[#c9a86a]/12" : "border-white/12 hover:border-white/30"
                }`}
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#c9a86a]">Licensed State</p>
                <p className="mt-2 font-sans text-sm font-semibold text-white">{state.name}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 border-t border-white/12 pt-5">
            <FileText className="mt-1 h-4 w-4 shrink-0 text-[#c9a86a]" />
            <p className="font-sans text-xs leading-6 text-white/52">
              This map uses accurate state shapes and highlights current licensed states. Add verified license numbers and certificate details before publishing if required by each state board.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
