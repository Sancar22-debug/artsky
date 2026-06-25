import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IdentityStrip from "@/components/IdentityStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import YouTubeSection from "@/components/YouTubeSection";
import { Footerdemo } from "@/components/ui/footer-section";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <IdentityStrip />
      <About />
      <Services />
      <Projects />
      <Process />
      <YouTubeSection />
      <Footerdemo />
    </>
  );
}

