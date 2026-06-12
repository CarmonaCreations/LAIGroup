import { motion } from "framer-motion";
import { BadgeCheck, FileText, MapPinned } from "lucide-react";

const licenses = [
  {
    title: "Florida",
    body: "Architectural services represented for Florida projects. License numbers can be displayed here before launch.",
  },
  {
    title: "South Carolina",
    body: "Architectural services represented for South Carolina projects. License numbers can be displayed here before launch.",
  },
  {
    title: "Professional Records",
    body: "Use this area for firm registrations, architect license numbers, certificates, and required public notices.",
  },
];

export function LicensureSection() {
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
            {licenses.map((item) => (
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
              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-white/46">Active States</p>
              <h3 className="mt-2 font-display text-3xl">Florida & South Carolina</h3>
            </div>
            <MapPinned className="h-8 w-8 text-[#c9a86a]" />
          </div>

          <div className="relative overflow-hidden border border-white/12 bg-[#171612]">
            <svg viewBox="0 0 760 520" role="img" aria-label="Map highlighting Florida and South Carolina" className="h-auto w-full">
              <rect width="760" height="520" fill="#171612" />
              <path d="M268 205 L388 190 L417 260 L382 318 L277 310 L238 252 Z" fill="#2b2922" stroke="#4a463b" strokeWidth="3" />
              <path d="M414 180 L533 165 L575 220 L528 275 L425 258 Z" fill="#2b2922" stroke="#4a463b" strokeWidth="3" />
              <path d="M536 144 L654 150 L690 205 L612 236 L571 210 Z" fill="#2b2922" stroke="#4a463b" strokeWidth="3" />
              <path d="M430 266 L552 282 L578 365 L555 472 L520 486 L494 398 L447 345 Z" fill="#c9a86a" stroke="#f1dfb8" strokeWidth="4" />
              <path d="M552 247 L640 224 L688 252 L638 304 L568 288 Z" fill="#c9a86a" stroke="#f1dfb8" strokeWidth="4" />
              <path d="M552 366 C606 377 651 410 676 462" fill="none" stroke="#c9a86a" strokeWidth="5" strokeLinecap="round" />
              <circle cx="520" cy="356" r="8" fill="#fff" />
              <circle cx="612" cy="266" r="8" fill="#fff" />
              <text x="505" y="344" fill="#ffffff" fontSize="24" fontFamily="Inter, sans-serif" fontWeight="700">FL</text>
              <text x="596" y="255" fill="#ffffff" fontSize="24" fontFamily="Inter, sans-serif" fontWeight="700">SC</text>
              <text x="270" y="245" fill="#716d61" fontSize="18" fontFamily="Inter, sans-serif">AL</text>
              <text x="345" y="260" fill="#716d61" fontSize="18" fontFamily="Inter, sans-serif">GA</text>
              <text x="592" y="194" fill="#716d61" fontSize="18" fontFamily="Inter, sans-serif">NC</text>
            </svg>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["Florida", "South Carolina"].map((state) => (
              <div key={state} className="border border-white/12 p-4">
                <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#c9a86a]">Licensed State</p>
                <p className="mt-2 font-sans text-sm font-semibold text-white">{state}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 border-t border-white/12 pt-5">
            <FileText className="mt-1 h-4 w-4 shrink-0 text-[#c9a86a]" />
            <p className="font-sans text-xs leading-6 text-white/52">
              Add verified license numbers and certificate details before publishing if required by each state board.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
