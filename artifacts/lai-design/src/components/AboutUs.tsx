import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Compass, Handshake, Layers3 } from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Design For Delivery",
    body: "Drawings are shaped with schedule, scope, budget, and field execution in view.",
  },
  {
    icon: Layers3,
    title: "Coordinate Early",
    body: "Owners, consultants, builders, and reviewers stay aligned before issues harden.",
  },
  {
    icon: Handshake,
    title: "Stay Accountable",
    body: "Senior attention stays close to the decisions that define the project.",
  },
];

const signals = [
  { value: "25+", label: "Years of Practice" },
  { value: "200+", label: "Projects Delivered" },
  { value: "FL + SC", label: "Current License Focus" },
  { value: "3", label: "Connected LAI Companies" },
];

const process = ["Listen", "Study", "Coordinate", "Document", "Support"];

export function AboutUs() {
  return (
    <section id="studio" className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="option3-panel flex min-h-[520px] flex-col justify-between p-7 md:p-10"
          >
            <div>
              <p className="mb-5 font-sans text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">Point Of View</p>
              <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
                Architecture that stays sharp from first study to final field question.
              </h2>
              <p className="mt-7 max-w-xl font-sans text-base leading-8 text-muted-foreground md:text-lg">
                LAI Design Associates connects design judgment with construction and civil insight, turning complex requirements into clean, permit-ready architecture.
              </p>
            </div>

            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
              {signals.map((signal) => (
                <div key={signal.label} className="bg-white/75 p-5">
                  <p className="font-display text-3xl text-primary md:text-4xl">{signal.value}</p>
                  <p className="mt-2 font-sans text-[10px] font-extrabold uppercase tracking-[0.22em] text-muted-foreground">{signal.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group grid gap-5 border border-border bg-white/70 p-6 transition-colors hover:bg-white md:grid-cols-[64px_1fr] md:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <principle.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-sans text-xs font-extrabold tracking-[0.18em] text-primary/70">0{index + 1}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl">{principle.title}</h3>
                  <p className="mt-4 font-sans text-sm leading-7 text-muted-foreground md:text-base">{principle.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid gap-6 border border-primary/20 bg-primary/8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8"
        >
          <div>
            <p className="mb-3 font-sans text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">Workflow</p>
            <h3 className="font-display text-3xl leading-tight text-foreground md:text-4xl">A direct path through complex work.</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} className="border border-border bg-white/80 p-4">
                <CheckCircle2 className="mb-5 h-5 w-5 text-primary" />
                <p className="font-sans text-[10px] font-extrabold uppercase tracking-[0.22em] text-muted-foreground">Step {index + 1}</p>
                <p className="mt-1 font-sans text-sm font-bold text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 border-y border-border py-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl font-sans text-sm leading-7 text-muted-foreground">
            Design discipline, project coordination, and reviewer-ready communication stay in the same conversation.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 font-sans text-xs font-extrabold uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground">
            Start The Conversation <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

