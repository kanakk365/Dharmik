import { Header } from "../components/Navbar.";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Collaborates } from "../components/Collaboration";
import { MissionVision } from "../components/MissionVission";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-col relative min-h-screen w-full">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/19c7124870e61758add164fe814e68698520d8eb?placeholderIfAbsent=true"
          width={1920}
          height={1080}
          className="absolute h-full w-full object-cover inset-0"
          alt="Hero background"
        />
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>

      <main>
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Collaborates />
        <MissionVision />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
