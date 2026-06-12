import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { AboutUs } from "@/components/AboutUs";
import { SiteFooter } from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - LAI Design Associates</title>
        <meta
          name="description"
          content="Learn about LAI Design Associates' mission, core values, and 25+ years of architectural design and construction excellence."
        />
      </Helmet>

      <Nav />

      <div className="mx-auto max-w-7xl bg-background px-6 pb-0 pt-28">
        <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Who We Are</p>
        <h1 className="font-display text-5xl text-foreground md:text-6xl">About LAI Design Associates</h1>
        <div className="mt-6 h-px w-14 bg-primary" />
      </div>

      <AboutUs />

      <SiteFooter />
    </>
  );
}
