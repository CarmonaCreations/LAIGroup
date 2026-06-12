import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { ContactFooter } from "@/components/ContactFooter";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - LAI Design Associates</title>
        <meta
          name="description"
          content="Get in touch with LAI Design Associates to discuss your next architectural design project."
        />
      </Helmet>

      <Nav />

      <div className="mx-auto max-w-7xl bg-background px-6 pb-0 pt-28">
        <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Get in Touch</p>
        <h1 className="font-display text-5xl text-foreground md:text-6xl">Start a Project</h1>
        <div className="mt-6 h-px w-14 bg-primary" />
      </div>

      <ContactFooter />
    </>
  );
}
