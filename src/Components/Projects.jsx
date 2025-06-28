import { Link } from "react-router-dom"
import { ExternalLink, Github, Eye } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce MERN Application",
      description:
        "Full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern technologies and best practices for scalability and performance.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      featured: true,
      liveLink: "https://ecommerce-demo.vercel.app",
      githubLink: "https://github.com/rakhimakhatun/ecommerce-mern",
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and project tracking. Features drag-and-drop functionality and comprehensive project analytics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "React Router"],
      category: "Frontend",
      featured: true,
      liveLink: "https://taskmanager-demo.vercel.app",
      githubLink: "https://github.com/rakhimakhatun/task-manager",
    },
    {
      id: 5,
      title: "Blog Platform with CMS",
      description:
        "Full-featured blog platform with content management system, user roles, and SEO optimization. Includes rich text editor, comment system, and advanced analytics dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Full Stack",
      featured: true,
      liveLink: "https://blog-platform.vercel.app",
      githubLink: "https://github.com/rakhimakhatun/blog-platform",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-pink-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects - Single Column Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/rakhimakhatun"
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
  )
}

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl hover:shadow-pink-500/10 transition-all duration-300">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className={`grid grid-cols-2 gap-0 ${!isEven ? "lg:grid-cols-2" : ""}`}>
          {/* Image Section */}
          <div className={`relative overflow-hidden ${!isEven ? "order-2" : "order-1"}`}>
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  title="View Live Project"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                  title="View Source Code"
                >
                  <Github size={20} />
                </a>
                <Link
                  to={`/project/${project.id}`}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  title="View Details"
                >
                  <Eye size={20} />
                </Link>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          </div>

          {/* Content Section */}
          <div className={`p-8 flex flex-col justify-center ${!isEven ? "order-1" : "order-2"}`}>
            <div className="mb-4">
              <span className="text-pink-500 text-sm font-semibold uppercase tracking-wide">{project.category}</span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-pink-600 hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <Link
                to={`/project/${project.id}`}
                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Eye size={18} />
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                title="View Live Project"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                title="View Source Code"
              >
                <Github size={20} />
              </a>
              <Link
                to={`/project/${project.id}`}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                title="View Details"
              >
                <Eye size={20} />
              </Link>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="mb-3">
            <span className="text-pink-500 text-sm font-semibold uppercase tracking-wide">{project.category}</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-pink-600 hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <Link
              to={`/project/${project.id}`}
              className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Eye size={18} />
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
