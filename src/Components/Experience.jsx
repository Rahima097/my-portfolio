import { Briefcase, Calendar, Star } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "WordPress Developer",
      company: "MaanRishfa IT Solutions",
      location: "Remote",
      duration: "Nov 2023 - Dec 2024",
      description: [
        "Developed custom WordPress designs",
        "Created responsive and SEO-optimized websites",
        "Integrated WooCommerce for e-commerce solutions",
        "Expert in Elementor, Divi, WP-Bakery",
        "Integrated Mailchimp, Google Sheets, Sendinblue, Maps, etc.",
      ],
      technologies: ["WordPress", "HTML", "CSS", "JavaScript", "WooCommerce"],
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-pink-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            1+ years of professional experience in web development and programming . Also 3+ years experience in Wordpress development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border-l-4 border-pink-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left - Icon and Type */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="bg-pink-600 p-4 rounded-full mb-4">
                    <Briefcase size={32} className="text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="lg:col-span-3">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-xl text-pink-500 font-semibold mb-2">{exp.company}</h4>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                    {/* {exp.company === "Fiverr Marketplace" && (
                      <div className="flex items-center mt-2 lg:mt-0">
                        <Star className="text-yellow-500 fill-current" size={20} />
                        <span className="text-white ml-2 font-semibold">Level 2 Seller</span>
                      </div>
                    )} */}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-pink-500 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-pink-500 mb-2">3+</h3>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-pink-500 mb-2">220+</h3>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-pink-500 mb-2">150+</h3>
            <p className="text-gray-300">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
