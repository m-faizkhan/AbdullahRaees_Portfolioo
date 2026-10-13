import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { SocialMedia } from "./components/SocialMedia";
import { Education } from "./components/Education";
import { MediaKit } from "./components/MediaKit";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <SocialMedia />
        <Education />
        <MediaKit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
