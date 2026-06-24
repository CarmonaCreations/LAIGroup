import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { WorkGrid } from "@/components/WorkGrid";
import { SiteFooter } from "@/components/SiteFooter";

export default function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Our Projects - LAI Design Associates</title>
        <meta
          name="description"
          content="Browse LAI Design Associates' portfolio of architectural design projects across Florida, South Carolina, and beyond."
        />
      </Helmet>

      <Nav />

      <div className="mx-auto max-w-7xl bg-background px-6 pb-6 pt-28 md:pb-8">
        <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Our Work</p>
        <h1 className="max-w-4xl font-display text-4xl leading-tight text-foreground md:text-5xl">Architectural work presented through built project spreads.</h1>
        <p className="mt-5 max-w-2xl font-sans text-sm leading-7 text-muted-foreground">A closer look at education, civic, commercial, industrial, and medical manufacturing work by LAI Design Associates.</p>
      </div>

      <WorkGrid />

      <SiteFooter />
    </>
  );
}


