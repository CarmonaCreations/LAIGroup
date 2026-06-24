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
          content="Learn about LAI Design Associates' mission, values, credentials, and architectural design practice."
        />
      </Helmet>

      <Nav />

      <main className="bg-background pt-24 md:pt-28">
        <AboutUs />
      </main>

      <SiteFooter />
    </>
  );
}
