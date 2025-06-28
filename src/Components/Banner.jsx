import { useState, useEffect } from "react"
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import bannerImg from '../assets/banner.png'

const Banner = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer",
    "WordPress Expert",
    "React.js Developer",
    "Node.js Developer",
  ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
          setTypingSpeed(100 + Math.random() * 100) // Variable typing speed
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1))
          setTypingSpeed(50) // Faster deleting
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
          setTypingSpeed(150)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, currentIndex, isDeleting, typingSpeed, titles])

  const handleResumeDownload = () => {
    // For now, just show an alert. Replace with actual resume download logic
    alert("Resume download will be implemented when your resume is ready!")
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-lg text-pink-500 font-medium mb-2 animate-fade-in">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Rakhima</span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Khatun
                </span>
              </h1>

              {/* Enhanced Typing Animation */}
              <div className="text-2xl md:text-3xl mb-6 h-16 flex items-center justify-center lg:justify-start">
                <span className="text-pink-500 font-semibold">
                  {displayText}
                  <span className="animate-pulse text-pink-400 font-bold">|</span>
                </span>
              </div>

              <p className="text-gray-400 text-lg mb-8 max-w-2xl animate-fade-in">
                Passionate Full Stack Developer with 6+ years of experience in MERN stack development. I love creating
                innovative web solutions and turning ideas into reality through code.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up">
              <button
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
              >
                <Download size={20} />
                Download Resume
              </button>
              <a
                href="#contact"
                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in">
              <a
                href="https://github.com/rakhimakhatun"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rakhimakhatun"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rakhima@example.com"
                className="bg-gray-800 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+1234567890"
                className="bg-gray-800 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={bannerImg}
                    alt="Rakhima Khatun"
                    className="w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-pink-600 text-white p-3 rounded-lg animate-bounce shadow-lg">
                <span className="text-sm font-semibold">6+ Years</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-3 rounded-lg animate-bounce delay-1000 shadow-lg">
                <span className="text-sm font-semibold">MERN Stack</span>
              </div>
              <div className="absolute top-1/2 -left-8 bg-blue-600 text-white p-2 rounded-lg animate-float shadow-lg">
                <span className="text-xs font-semibold">React</span>
              </div>
              <div className="absolute top-1/4 -right-8 bg-green-600 text-white p-2 rounded-lg animate-float delay-500 shadow-lg">
                <span className="text-xs font-semibold">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
