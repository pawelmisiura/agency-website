import HeroSection from "@/components/HeroSection";
// import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
// import Process from "@/components/Process";
import LetsTalk from "@/components/LetsTalk";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      {/* <Services /> */}
      <Projects />
      <Process />
      <LetsTalk />
      <Footer />
    </div>
  );
}
