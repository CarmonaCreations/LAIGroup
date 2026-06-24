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

      <main className="bg-background pt-24 md:pt-28">
        <TeamSection />
      </main>

      <SiteFooter />
    </>
  );
}
