import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, FileText, MapPinned } from "lucide-react";

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

const stateTiles = [
  ["", "", "", "", "", "", "", "", "", "", "ME", ""],
  ["", "", "", "", "", "", "", "", "VT", "NH", "MA", ""],
  ["WA", "ID", "MT", "ND", "MN", "WI", "MI", "NY", "RI", "CT", "NJ", ""],
  ["OR", "NV", "WY", "SD", "IA", "IL", "IN", "OH", "PA", "MD", "DE", ""],
  ["CA", "UT", "CO", "NE", "MO", "KY", "WV", "VA", "NC", "SC", "", ""],
  ["", "AZ", "NM", "KS", "AR", "TN", "", "", "", "GA", "", ""],
  ["AK", "", "OK", "LA", "MS", "AL", "", "", "", "FL", "", "HI"],
  ["", "", "TX", "", "", "", "", "", "", "", "", ""],
];

export function LicensureSection() {
  const [selectedState, setSelectedState] = useState<keyof typeof licensedStates>("FL");
  const selected = licensedStates[selectedState];

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
              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-white/46">Interactive State Map</p>
              <h3 className="mt-2 font-display text-3xl">Florida & South Carolina</h3>
            </div>
            <MapPinned className="h-8 w-8 text-[#c9a86a]" />
          </div>

          <div className="overflow-x-auto border border-white/12 bg-[#171612] p-4 md:p-6">
            <div className="grid min-w-[620px] grid-cols-12 gap-1.5" role="img" aria-label="United States state map highlighting Florida and South Carolina">
              {stateTiles.flatMap((row, rowIndex) =>
                row.map((abbr, colIndex) => {
                  const licensed = abbr === "FL" || abbr === "SC";
                  const selectedTile = abbr === selectedState;

                  return (
                    <div key={`${rowIndex}-${colIndex}`} className="aspect-square">
                      {abbr ? (
                        <button
                          type="button"
                          disabled={!licensed}
                          onClick={() => licensed && setSelectedState(abbr as keyof typeof licensedStates)}
                          className={`flex h-full w-full items-center justify-center border font-sans text-[11px] font-semibold transition-colors ${
                            licensed
                              ? selectedTile
                                ? "border-white bg-[#c9a86a] text-[#11100d]"
                                : "border-[#c9a86a]/70 bg-[#c9a86a]/20 text-white hover:bg-[#c9a86a]/35"
                              : "border-white/8 bg-white/[0.035] text-white/28"
                          }`}
                          aria-label={licensed ? `${licensedStates[abbr as keyof typeof licensedStates].name} licensed state` : `${abbr} not currently highlighted`}
                        >
                          {abbr}
                        </button>
                      ) : null}
                    </div>
                  );
                }),
              )}
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
              This tile map is intentionally simplified for readability. Add verified license numbers and certificate details before publishing if required by each state board.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
