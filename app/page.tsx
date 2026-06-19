import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-20 mx-auto px-6 py-4 sm:px-12">
        <HeroSection />
        <About />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
