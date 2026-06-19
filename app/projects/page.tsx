import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-20 mx-auto px-6 py-4 sm:px-12">
        <ProjectsSection />
      </div>
    </main>
  );
};

export default ProjectsPage;
