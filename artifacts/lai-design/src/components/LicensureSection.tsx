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

export function LicensureSection() {
  const [selectedState, setSelectedState] = useState<keyof typeof licensedStates>("FL");
  const selected = licensedStates[selectedState];
  const isFlorida = selectedState === "FL";
  const isSouthCarolina = selectedState === "SC";

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

          <div className="relative overflow-hidden border border-white/12 bg-[#171612] p-3 md:p-5">
            <svg viewBox="0 0 980 620" role="img" aria-label="United States map highlighting Florida and South Carolina" className="h-auto w-full">
              <rect width="980" height="620" fill="#171612" />
              <path
                d="M96 205 L132 145 L208 119 L288 132 L365 118 L458 136 L548 122 L632 148 L716 145 L822 181 L893 235 L850 281 L790 288 L745 330 L672 341 L637 384 L548 392 L488 424 L388 418 L310 397 L245 415 L178 379 L147 310 L101 280 Z"
                fill="#25231d"
                stroke="#4d493e"
                strokeWidth="3"
              />
              <path d="M118 444 L178 416 L250 435 L282 491 L198 523 L120 500 Z" fill="#211f1a" stroke="#4d493e" strokeWidth="3" />
              <path d="M307 506 L338 493 L375 507 L358 531 L321 530 Z" fill="#211f1a" stroke="#4d493e" strokeWidth="3" />

              <path d="M205 126 L195 386" stroke="#3b382f" strokeWidth="2" opacity="0.55" />
              <path d="M305 130 L292 397" stroke="#3b382f" strokeWidth="2" opacity="0.55" />
              <path d="M410 128 L402 418" stroke="#3b382f" strokeWidth="2" opacity="0.55" />
              <path d="M520 130 L516 395" stroke="#3b382f" strokeWidth="2" opacity="0.55" />
              <path d="M632 150 L624 355" stroke="#3b382f" strokeWidth="2" opacity="0.55" />
              <path d="M735 160 L708 330" stroke="#3b382f" strokeWidth="2" opacity="0.55" />
              <path d="M120 235 L855 245" stroke="#3b382f" strokeWidth="2" opacity="0.55" />
              <path d="M142 316 L752 322" stroke="#3b382f" strokeWidth="2" opacity="0.55" />
              <path d="M197 385 L590 386" stroke="#3b382f" strokeWidth="2" opacity="0.55" />

              <g
                role="button"
                tabIndex={0}
                onClick={() => setSelectedState("SC")}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setSelectedState("SC");
                }}
                className="cursor-pointer outline-none"
                aria-label="Select South Carolina"
              >
                <path
                  d="M734 294 L783 285 L822 313 L790 350 L737 338 L712 316 Z"
                  fill={isSouthCarolina ? "#c9a86a" : "#8b7345"}
                  stroke={isSouthCarolina ? "#fff4d8" : "#c9a86a"}
                  strokeWidth="4"
                />
                <circle cx="766" cy="316" r={isSouthCarolina ? "10" : "7"} fill="#ffffff" />
                <text x="739" y="275" fill="#ffffff" fontSize="24" fontFamily="Inter, sans-serif" fontWeight="700">SC</text>
              </g>

              <g
                role="button"
                tabIndex={0}
                onClick={() => setSelectedState("FL")}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setSelectedState("FL");
                }}
                className="cursor-pointer outline-none"
                aria-label="Select Florida"
              >
                <path
                  d="M691 386 L792 398 L830 445 L842 536 L811 557 L775 482 L717 450 Z"
                  fill={isFlorida ? "#c9a86a" : "#8b7345"}
                  stroke={isFlorida ? "#fff4d8" : "#c9a86a"}
                  strokeWidth="4"
                />
                <path d="M820 516 C861 528 889 552 907 585" fill="none" stroke={isFlorida ? "#fff4d8" : "#c9a86a"} strokeWidth="5" strokeLinecap="round" />
                <circle cx="765" cy="432" r={isFlorida ? "10" : "7"} fill="#ffffff" />
                <text x="728" y="477" fill="#ffffff" fontSize="24" fontFamily="Inter, sans-serif" fontWeight="700">FL</text>
              </g>

              <text x="146" y="474" fill="#716d61" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="700">AK</text>
              <text x="325" y="526" fill="#716d61" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="700">HI</text>
              <text x="646" y="368" fill="#716d61" fontSize="17" fontFamily="Inter, sans-serif">GA</text>
              <text x="805" y="284" fill="#716d61" fontSize="17" fontFamily="Inter, sans-serif">NC</text>
            </svg>
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
              This map uses a simplified geographic silhouette for readability while preserving the recognizable United States shape. Add verified license numbers and certificate details before publishing if required by each state board.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
