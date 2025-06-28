import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-pink-500">Rakhima</span> Khatun
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality
              through clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rahima097"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahima-khatun28/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rakhima.khatun.dev@gmail.com"
                className="bg-gray-700 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[ "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-pink-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Full Stack Development</li>
              <li>Frontend Development</li>
              <li>MERN Stack Development</li>
              <li>WordPress Development</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Rakhima Khatun. All rights reserved.</p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="text-pink-500 mx-1" /> and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
