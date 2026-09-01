import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const values = [
  {
    title: "Teamwork",
    body: "At LAI, we recognize our primary asset is people. To be successful, LAI must be a rewarding place to work for both employees and our subcontractor partners. We provide opportunity and encouragement to help our people reach their potential. We work with our clients as a team where mutual respect provides the foundation for successful projects."
  },
  {
    title: "Integrity",
    body: "LAI will always remain true to our founding values of quality, honesty and hard work. We have the highest ethical standards in the industry to \"do the right thing\" for our clients as well as our subcontractor partners. LAI is a business based on trust with the high standards of service, quality, personal attention to clients, and integrity. Because of this reputation the company has the privilege of leading some of the highest profile, often one-of-a-kind, projects."
  },
  {
    title: "Commitment",
    body: "LAI provides design and building services to clients who value diligence, resourcefulness and creativity in a project partner. LAI has always been proactive in finding solutions for our clients that best achieve their project's goals and expectations. Building enduring relationships is the lifeblood of any business and key to the success of our business."
  }
];

const workflow = ["Listen", "Study", "Coordinate", "Document", "Support"];

export function AboutUs() {
  return (
    <section id="studio" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-20 mb-24 md:mb-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-7">Our Mission</h2>
            <div className="w-16 h-[1px] bg-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="max-w-3xl font-sans text-muted-foreground leading-[1.85] text-base md:text-lg">
              To be the leading provider of superior design and construction services by consistently improving the quality of our product; to add value for clients through innovation, prudence, integrity, and aggressive performance; and to serve with character and purpose that builds enduring client relationships.
            </p>
          </motion.div>
        </div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-28 border-y border-border py-10 md:py-12"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:items-center lg:gap-12">
            <div className="max-w-sm">
              <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.34em] text-primary">Workflow</p>
              <h3 className="font-display text-3xl leading-tight text-foreground md:text-4xl">A direct path through complex work.</h3>
            </div>

            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 xl:grid-cols-5">
              {workflow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group bg-background p-5 transition-all duration-300 hover:relative hover:z-10 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.1)]"
                >
                  <CircleCheck className="mb-7 h-5 w-5 text-primary" strokeWidth={1.8} aria-hidden="true" />
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Step {index + 1}</p>
                  <p className="mt-2 font-sans text-sm font-semibold text-foreground">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary/70 mb-4">What Drives Us</p>
          <h3 className="font-display text-3xl md:text-4xl text-foreground">Core Values</h3>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-500 flex flex-col"
            >
              <div className="w-8 h-[2px] bg-primary mb-8 group-hover:w-16 transition-all duration-500" />
              <h4 className="font-display text-xl text-foreground mb-6 tracking-wide">{value.title}</h4>
              <p className="font-sans text-muted-foreground leading-[1.85] text-sm">{value.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-px"
        >
          {[
            { number: "25+", label: "Years of Experience" },
            { number: "200+", label: "Projects Delivered" },
            { number: "3", label: "States & Counting" },
            { number: "100%", label: "Client Focused" },
          ].map((stat) => (
            <div key={stat.label} className="bg-background p-10 text-center">
              <p className="font-display text-4xl md:text-5xl text-primary mb-3">{stat.number}</p>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
