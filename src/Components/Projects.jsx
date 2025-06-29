import { Link } from "react-router-dom";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import findRoommateImg from "../assets/find-roommate.png";
import findRoommateImg2 from "../assets/find-roommate2.png";
import findRoommateImg3 from "../assets/find-roommate3.png";
import whereIsItImg from "../assets/whereisit.png";
import whereIsItImg2 from "../assets/whereisit2.png";
import whereIsItImg3 from "../assets/whereisit3.png";
import plumbiofixImg from "../assets/plumbio-fix.png";
import plumbiofixImg2 from "../assets/plumbio-fix2.png";
import plumbiofixImg3 from "../assets/plumbio-fix3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "WhereIsIt Lost and Found Item (MERN Application)",
      description:
        "A community-driven platform for reporting, searching, and recovering lost or found items.",
      images: [whereIsItImg, whereIsItImg2, whereIsItImg3],
      technologies: ["Tailwind CSS", "DaisyUI", "React.js", "Node.js", "Express.js", "MongoDB", "Firebase auth"],
      category: "Full Stack",
      liveLink: "https://whereisit-lost-and-found-item.netlify.app/",
      githubLink: "https://github.com/Rahima097/where-is-it-client",
    },
    {
      id: 2,
      title: "Find Roommate (MERN Application)",
      description:
        "A web app to help users list and find available room rentals with secure auth and modern UI.",
      images: [findRoommateImg, findRoommateImg2, findRoommateImg3],
      technologies: ["React.js", "Firebase", "Tailwind CSS", "DaisyUI", "React Router", "Node.js", "Express.js", "MongoDB"],
      category: "Frontend",
      liveLink: "https://find-roommate.netlify.app/contact",
      githubLink: "https://github.com/Rahima097/find-roommate-client",
    },
    {
      id: 3,
      title: "Plumbio Fix (Plumbing service box)",
      description:
        "A plumbing service website with subscription booking, service listings, and plumbing tips.",
      images: [plumbiofixImg, plumbiofixImg2, plumbiofixImg3],
      technologies: ["React.js", "Node.js", "Firebase", "Tailwind CSS", "DaisyUI", "React Router"],
      category: "Full Stack",
      liveLink: "https://plumbio-fix.netlify.app/",
      githubLink: "https://github.com/Rahima097/plumbio-fix",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden" data-theme="dark">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-secondary/15 rounded-full animate-bounce" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-pink-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/Rahima097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl hover:shadow-pink-500/10 transition-all duration-300">
      <div className={`flex flex-col lg:grid lg:grid-cols-2 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
        {/* Image Slider */}
        <div className="relative w-full h-64 sm:h-96">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <div className="flex space-x-4">
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-pink-600 text-white p-3 rounded-full">
                <ExternalLink size={20} />
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="bg-gray-800 text-white p-3 rounded-full">
                <Github size={20} />
              </a>
              <Link to={`/project/${project.id}`} className="bg-blue-600 text-white p-3 rounded-full">
                <Eye size={20} />
              </Link>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="mb-2">
            <span className="text-pink-500 text-sm font-semibold uppercase tracking-wide">{project.category}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-pink-600 hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-transform hover:scale-105"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-700 text-white hover:bg-gray-800 hover:border-white px-6 py-2 rounded-lg font-semibold transition-transform hover:scale-105"
            >
              <Github size={18} /> GitHub Repo
            </a>
            <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-500 hover:bg-gray-800 hover:border-white px-6 py-2 rounded-lg font-semibold transition-transform hover:scale-105">
              <Eye size={20} /> View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
