import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
