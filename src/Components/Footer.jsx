import { Heart, ArrowUp } from "lucide-react"
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Link } from "react-router"
import logo from "../assets/bg-logo.png"
import { useEffect, useState } from "react"


const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showButton, setShowButton] = useState(false)

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className="bg-gray-800 border-t border-gray-700 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Brand Section */}
            <div className="flex flex-col items-center justify-center">
              <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Rakhima Khatun Logo"
                  className="w-14 h-14 object-contain"
                />
                <span className="text-pink-500">Rakhima</span> Khatun
              </Link>
              <p className="text-center text-gray-400 mb-6 max-w-md">
                Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality
                through clean, efficient code.
              </p>
              <div className="flex justify-center lg:justify-start gap-4 animate-fade-in">
                {[{
                  href: "https://github.com/Rahima097",
                  icon: Github,
                  title: "GitHub"
                }, {
                  href: "https://www.linkedin.com/in/rahima-khatun28/",
                  icon: Linkedin,
                  title: "LinkedIn"
                }, {
                  href: "mailto:rahima.khatun.dev@gmail.com",
                  icon: Mail,
                  title: "Email"
                }, {
                  href: "tel:+8801937049404",
                  icon: Phone,
                  title: "Phone"
                }].map(({ href, icon: Icon, title }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                    className="bg-gray-800 hover:bg-pink-600 text-white p-3 rounded-full transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    <Icon size={20} />
                  </a>
                ))}
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
        </div>
      </footer>

      {/* Go to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg animate-bounce transition duration-300 z-50"
          aria-label="Go to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  )
}

export default Footer
