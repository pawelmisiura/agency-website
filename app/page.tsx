import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      {/* <Services /> */}
      <Projects />
      <Process />
    </div>
  );
}
