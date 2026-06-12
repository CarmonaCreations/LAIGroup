import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, FileText, MapPinned } from "lucide-react";
import { geoPath } from "d3-geo";
import { feature } from "topojson-client";
import statesTopology from "us-atlas/states-10m.json";

type LicensedStateKey = "FL" | "SC";
type StateFeature = {
  id?: string | number;
  properties?: { name?: string };
};

const licensedStates = {
  FL: {
    name: "Florida",
    note: "Architectural services represented for Florida projects. Add verified license numbers before publishing.",
  },
  SC: {
    name: "South Carolina",
    note: "Architectural services represented for South Carolina projects. Add verified license numbers before publishing.",
  },
};

const stateIdToLicenseKey: Record<string, LicensedStateKey> = {
  "12": "FL",
  "45": "SC",
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

export function LicensureSection() {
  const [selectedState, setSelectedState] = useState<LicensedStateKey>("FL");
  const selected = licensedStates[selectedState];
  const path = geoPath();
  const states = (
    (feature as (topology: unknown, object: unknown) => { features: StateFeature[] })(
      statesTopology,
      (statesTopology as { objects: { states: unknown } }).objects.states,
    )
  ).features;

  return (
    <section className="border-t border-border bg-[#11100d] px-6 py-24 text-white md:py-32">
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

          <div className="relative overflow-hidden border border-white/12 bg-[#f5f4f1] p-4 md:p-6">
            <svg viewBox="0 0 975 610" role="img" aria-label="United States map highlighting Florida and South Carolina" className="h-auto w-full drop-shadow-sm">
              {states.map((state) => {
                const id = String(state.id).padStart(2, "0");
                const stateKey = stateIdToLicenseKey[id];
                const licensed = Boolean(stateKey);
                const selectedLocation = stateKey === selectedState;
                const stateName = stateKey ? licensedStates[stateKey].name : state.properties?.name;

                return (
                  <path
                    key={id}
                    d={path(state as never) ?? ""}
                    role={licensed ? "button" : "presentation"}
                    tabIndex={licensed ? 0 : -1}
                    onClick={() => stateKey && setSelectedState(stateKey)}
                    onKeyDown={(event) => {
                      if (stateKey && (event.key === "Enter" || event.key === " ")) {
                        setSelectedState(stateKey);
                      }
                    }}
                    className={`transition-colors duration-200 ${licensed ? "cursor-pointer hover:brightness-105" : "cursor-default"}`}
                    fill={licensed ? (selectedLocation ? "#3b82f6" : "#76aefc") : "#d9d9d6"}
                    stroke="#ffffff"
                    strokeWidth={selectedLocation ? 1.4 : 0.85}
                    aria-label={licensed ? `${stateName} licensed state` : undefined}
                  />
                );
              })}
            </svg>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-6 border-t border-black/10 pt-4">
              <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#1f2937]">
                <span className="h-4 w-4 rounded-sm bg-[#3b82f6]" />
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
                onClick={() => setSelectedState(abbr as keyof typeof licensedStates)}
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
