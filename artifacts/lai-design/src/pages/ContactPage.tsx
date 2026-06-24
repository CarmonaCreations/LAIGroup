import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { ContactFooter } from "@/components/ContactFooter";
import { BrandMark } from "@/components/BrandMark";

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

      <main className="bg-background">
        <section className="option3-wash px-6 pb-10 pt-36 md:pb-14 md:pt-44">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[auto_1fr] lg:items-end">
            <BrandMark className="h-24 w-24" />
            <div>
              <p className="mb-4 font-sans text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">Contact</p>
              <h1 className="max-w-4xl font-display text-5xl leading-tight text-foreground md:text-7xl">
                Start with the studio. Route the project from there.
              </h1>
            </div>
          </div>
        </section>

        <ContactFooter />
      </main>
    </>
  );
}

