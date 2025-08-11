import { useParams, Link } from "react-router-dom"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code, Lightbulb, Target } from "lucide-react"
import whereisitImg from "../assets/whereisit.png"
import findroommateImg from "../assets/find-roommate.png"
import plumbiofixImg from "../assets/plumbio-fix.png"
import medixCampImg from "../assets/medix-camp.png"

const ProjectDetails = () => {
  const { id } = useParams()

  // Mock project data - in a real app, this would come from an API or database
  const projectsData = {
    1: {
      title: "Medix Camp - Online Medical Camp Booking Platform",
      description:
        "A digital platform that allows users to find, book, and manage appointments for medical camps, with features for both patients and healthcare providers.",
      image: medixCampImg,
      technologies: [
        "React.js",
        "Axios",
        "Express.js",
        "MongoDB",
        "Firebase",
        "JWT",
        "Tailwind CSS",
        "Metarial Tailwind"
      ],
      liveLink: "https://medix-camp.netlify.app/",
      githubLink: "https://github.com/Rahima097/medix-camp-client",
      category: "Full Stack",
      duration: "12 Days",
      role: "Full Stack Developer",
      challenges: [
        "Implementing JWT-based authentication for patient and doctor roles",
        "Designing role-based dashboards for healthcare providers and users",
        "Managing appointment scheduling with proper validation and conflict checks",
        "Creating a responsive UI optimized for mobile users",
        "Ensuring secure data handling for patient health information"
      ],
      improvements: [
        "Integrate payment gateway for booking fees",
        "Add reminders for upcoming appointments",
        "Implement advanced filtering for camps by location, date, and specialization",
        "Add support for health issues"
      ],
      features: [
        "🔐 Role-based Authentication",
        "📅 Camp Booking System",
        "📋 Appointment Management",
        "🩺 Organizer & Patient Dashboards",
        "🎨 Responsive UI",
        "📊 Analytics for Camp Organizers",
        "🔒 Data Security",
        "📧 Email Notifications"
      ]
    },
    2: {
      title: "WhereIsIt - Lost and Found Platform (MERN Application)",
      description:
        "A community-driven platform that helps users report, search, and recover lost or found items with an intuitive and responsive interface.",
      image: whereisitImg,
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "JWT",
        "Tailwind CSS",
        "DaisyUI"
      ],
      liveLink: "https://whereisit-lost-and-found-item.netlify.app/",
      githubLink: "https://github.com/Rahima097/where-is-it-client",
      category: "Full Stack",
      duration: "10 Days",
      role: "Full Stack Developer",
      challenges: [
        "Implementing JWT-based protected routes with Firebase token verification",
        "Handling secure user authentication with Google and email/password login",
        "Managing CRUD operations with proper access control and error handling",
        "Designing a fully responsive UI with dashboard and recovery management",
        "Integrating animations and loading states for a better UX"
      ],
      improvements: [
        "Add item location tracking on a map (Google Maps API)",
        "Enable in-app messaging between finder and owner",
        "Add image upload support from local file instead of only URL",
        "Implement admin panel for reported content moderation",
        "Add support for multilingual UI"
      ],
      features: [
        "🔐 Authentication System",
        "📝 Item Management",
        "🔍 Search & Browse",
        "🎯 Recovery System",
        "🎨 User Experience",
        "📊 Dashboard Features",
        "🔧 JWT Security",
        "🔧 email Security"
      ]
    },
    3: {
      title: "FindRoommate - Room Rental Platform",
      description:
        "A modern web application that helps users list and discover available room rentals. Features include secure authentication, interest-based contact reveal, and real-time listing management for a smoother roommate search experience.",
      image: findroommateImg,
      technologies: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Express.js",
        "React Router",
        "Lottie React",
        "SweetAlert2",
        "Swiper.js"
      ],
      liveLink: "https://find-roommate.netlify.app/",
      githubLink: "https://github.com/Rahima097/find-roommate-client",
      category: "Full Stack",
      duration: "15 Days",
      role: "Full Stack Developer",
      challenges: [
        "Integrating Firebase authentication with email/password and Google OAuth",
        "Managing protected routes and contact visibility logic",
        "Ensuring users can’t like their own listings",
        "Creating a responsive and animated UI",
        "Handling secure MongoDB data operations"
      ],
      improvements: [
        "Add in-app messaging between interested users",
        "Enable location-based search and filtering",
        "Support image upload from device storage",
        "Include a rating and review system for listings",
        "Build an admin dashboard for listing moderation"
      ],
      features: [
        "🔐 User Authentication with Firebase",
        "📄 Post & Manage Room Listings",
        "❤️ Interest & Like System",
        "📱 Conditional Contact Reveal",
        "🔁 Protected Routes for Posting",
        "⚙️ Modern Tech Stack with Animations"
      ]
    },
    4: {
      title: "Plumbio Fix - Plumbing Service Website",
      description:
        "A modern plumbing service platform offering users a smooth way to explore services, subscribe to plans, read helpful plumbing tips, and request emergency or scheduled help.",
      image: plumbiofixImg,
      technologies: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "DaisyUI",
        "React Router",
        "Swiper.js",
        "React Helmet Async",
        "React Toastify"
      ],
      liveLink: "https://plumbio-fix.netlify.app/",
      githubLink: "https://github.com/Rahima097/plumbio-fix",
      category: "Frontend",
      duration: "13 Days",
      role: "Frontend Developer",
      challenges: [
        "Integrating Firebase authentication with email/password and Google login",
        "Creating dynamic service sections using JSON data",
        "Implementing private routes and secure access to profile and blog pages",
        "Handling profile updates with hosted images",
        "Creating a clean, responsive layout with interactive UI"
      ],
      improvements: [
        "Add booking calendar for service scheduling",
        "Enable real-time chat support for users",
        "Implement multi-step subscription form",
        "Add ratings and testimonials for services",
        "Introduce admin panel for managing services and users"
      ],
      features: [
        "✅ Firebase Email & Google Authentication",
        "✅ Secure Private Routes",
        "✅ Responsive Swiper Slider & FAQ Section",
        "✅ Dynamic Subscription Services",
        "✅ Service Details Page with Reviews",
        "✅ Profile Update with Hosted Images",
        "✅ Blog Page with Extra Protection",
        "✅ Toast Notifications and Error Handling"
      ]
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
