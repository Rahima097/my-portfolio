"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code, Lightbulb, Target } from "lucide-react"

const ProjectDetails = () => {
  const { id } = useParams()

  // Mock project data - in a real app, this would come from an API or database
  const projectsData = {
    1: {
      title: "E-Commerce MERN Application",
      description:
        "A comprehensive full-stack e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart functionality, and secure payment processing.",
      image: "/placeholder.svg?height=400&width=800",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS", "Redux"],
      liveLink: "https://ecommerce-demo.vercel.app",
      githubLink: "https://github.com/rakhimakhatun/ecommerce-mern",
      category: "Full Stack",
      duration: "3 months",
      role: "Full Stack Developer",
      challenges: [
        "Implementing secure payment processing with Stripe integration",
        "Managing complex state for shopping cart and user sessions",
        "Optimizing database queries for product search and filtering",
        "Ensuring responsive design across all device sizes",
        "Implementing real-time inventory management",
      ],
      improvements: [
        "Add advanced search and filtering options",
        "Implement product recommendations using machine learning",
        "Add multi-vendor marketplace functionality",
        "Integrate with multiple payment gateways",
        "Add advanced analytics dashboard for sellers",
      ],
      features: [
        "User registration and authentication",
        "Product catalog with search and filters",
        "Shopping cart and wishlist functionality",
        "Secure checkout with Stripe payment",
        "Order tracking and history",
        "Admin panel for product management",
        "Responsive design for all devices",
        "Email notifications for orders",
      ],
    },
    2: {
      title: "Task Management Dashboard",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and comprehensive project tracking capabilities.",
      image: "/placeholder.svg?height=400&width=800",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "React Router", "Context API", "React DnD"],
      liveLink: "https://taskmanager-demo.vercel.app",
      githubLink: "https://github.com/rakhimakhatun/task-manager",
      category: "Frontend",
      duration: "2 months",
      role: "Frontend Developer",
      challenges: [
        "Implementing real-time updates with Firebase",
        "Creating intuitive drag-and-drop functionality",
        "Managing complex component state and data flow",
        "Designing responsive layouts for different screen sizes",
        "Optimizing performance for large datasets",
      ],
      improvements: [
        "Add time tracking functionality",
        "Implement advanced reporting and analytics",
        "Add integration with calendar applications",
        "Include file attachment capabilities",
        "Add mobile app version using React Native",
      ],
      features: [
        "Real-time task updates",
        "Drag and drop task management",
        "Team collaboration tools",
        "Project progress tracking",
        "Due date reminders",
        "Task priority levels",
        "User role management",
        "Dark/light theme toggle",
      ],
    },
    3: {
      title: "Restaurant Website & Booking System",
      description:
        "Modern restaurant website with integrated online reservation system, dynamic menu management, and customer review functionality.",
      image: "/placeholder.svg?height=400&width=800",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io", "Cloudinary"],
      liveLink: "https://restaurant-demo.vercel.app",
      githubLink: "https://github.com/rakhimakhatun/restaurant-booking",
      category: "Full Stack",
      duration: "2.5 months",
      role: "Full Stack Developer",
      challenges: [
        "Implementing real-time table availability system",
        "Managing complex booking logic and conflicts",
        "Integrating image upload for menu items",
        "Creating responsive design for mobile ordering",
        "Implementing email notifications for bookings",
      ],
      improvements: [
        "Add online ordering and delivery system",
        "Implement loyalty program features",
        "Add integration with POS systems",
        "Include social media integration",
        "Add multi-language support",
      ],
      features: [
        "Online table reservation system",
        "Dynamic menu management",
        "Customer review system",
        "Real-time availability updates",
        "Email confirmation system",
        "Admin dashboard for bookings",
        "Mobile-responsive design",
        "Image gallery for dishes",
      ],
    },
  }

  const project = projectsData[id]

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-pink-500 hover:text-pink-400">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-gray-400 text-lg mb-6">{project.description}</p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <User size={16} className="mr-2" />
                  <span>{project.role}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View Live Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} className="mr-2" />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="order-first lg:order-last">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Code size={24} className="text-pink-500 mr-3" />
            <h2 className="text-2xl font-bold text-white">Technologies Used</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start bg-gray-800 p-4 rounded-lg">
                <span className="text-pink-500 mr-3 mt-1">•</span>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Faced */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Target size={24} className="text-pink-500 mr-3" />
            <h2 className="text-2xl font-bold text-white">Challenges Faced</h2>
          </div>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-pink-500">
                <p className="text-gray-300">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Improvements */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Lightbulb size={24} className="text-pink-500 mr-3" />
            <h2 className="text-2xl font-bold text-white">Future Improvements</h2>
          </div>
          <div className="space-y-4">
            {project.improvements.map((improvement, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
                <p className="text-gray-300">{improvement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
          <p className="text-gray-400 mb-6">I'm always open to discussing new projects and opportunities.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
