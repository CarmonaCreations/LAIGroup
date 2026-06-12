import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { TeamSection } from "@/components/TeamSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Team - LAI Design Associates</title>
        <meta
          name="description"
          content="Meet the architects and design professionals behind LAI Design Associates' commercial, civic, education, and industrial projects."
        />
      </Helmet>

      <Nav />

      <div className="mx-auto max-w-7xl bg-background px-6 pb-0 pt-28">
        <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.35em] text-muted-foreground">The People</p>
        <h1 className="font-display text-5xl text-foreground md:text-6xl">Meet the Team</h1>
        <div className="mt-6 h-px w-14 bg-primary" />
      </div>

      <TeamSection />

      <SiteFooter />
    </>
  );
}
