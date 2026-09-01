import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { AboutUs } from "@/components/AboutUs";
import { SiteFooter } from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us – LAI Group</title>
        <meta name="description" content="Learn about LAI Group's mission, core values, and 25+ years of architectural design and construction excellence." />
      </Helmet>

      <Nav />

      <header className="border-b border-border bg-background px-6 pb-12 pt-32 md:pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:items-end">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Who We Are</p>
            <div className="mt-5 h-px w-14 bg-primary" />
          </div>
          <h1 className="font-display text-5xl leading-none text-foreground md:text-6xl">About LAI Group</h1>
        </div>
      </header>

      <AboutUs />

      <SiteFooter />
    </>
  );
}
