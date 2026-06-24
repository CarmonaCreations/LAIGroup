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

      <main className="bg-background pt-24 md:pt-28">
        <WorkGrid />
      </main>

      <SiteFooter />
    </>
  );
}
