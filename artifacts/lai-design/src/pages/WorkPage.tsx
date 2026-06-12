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

      <div className="mx-auto max-w-7xl bg-background px-6 pb-0 pt-28">
        <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Portfolio</p>
        <h1 className="font-display text-5xl text-foreground md:text-6xl">Selected Projects</h1>
        <div className="mt-6 h-px w-14 bg-primary" />
      </div>

      <WorkGrid />

      <SiteFooter />
    </>
  );
}
