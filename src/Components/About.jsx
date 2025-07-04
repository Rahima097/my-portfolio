import TypingAnimation from "./TypingAnimation"
import { Code } from "lucide-react"
import aboutImg from "../assets/about2.jpg"
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiExpress, SiGit } from "react-icons/si"

const About = () => {
  // Tech stack data with React Icons
  const techStack = [
    { name: "React", icon: <SiReact />, color: "text-blue-400", delay: 0 },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400", delay: 0.5 },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", delay: 1 },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", delay: 1.5 },
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500", delay: 2 },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500", delay: 2.5 },
    { name: "Express", icon: <SiExpress />, color: "text-gray-400", delay: 3 },
    { name: "Git", icon: <SiGit />, color: "text-red-400", delay: 3.5 },
  ]

  return (
    <section id="about" className="py-20 bg-base-200 relative overflow-hidden" data-theme="dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Pink Circles - Only Round Animations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute top-1/2 right-10 w-20 h-20 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-28 h-28 bg-secondary/15 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <TypingAnimation
                texts={["About Me", "My Story", "My Journey"]}
                className="text-pink-500"
                typingSpeed={150}
                pauseTime={3000}
              />
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Clean Bigger Image */}
          <div className="animate-slide-in-left">
            <div className="relative group">
              {/* Clean Image Container - No background shapes or borders */}
              <div className="relative">
                <img
                  src={aboutImg || "/placeholder.svg"}
                  alt="Rakhima Khatun - Web Developer"
                  className="w-full lg:max-w-lg lg:h-[600px] md:h-[550px] sm:h-[500px] h-[400px] lg:object-cover md:object-cover sm:object-cover pr-8  sm:pr-28 object-top rounded-lg lg:pr-18 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Text at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 rounded-b-lg">
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-white mb-2 animate-fade-up-down">Web <span className="text-pink-500">Developer</span></h3>
                    <p className="text-gray-200 animate-slide-up">
                      Passionate about creating amazing digital experiences
                    </p>
                  </div>
                </div>

                {/* Floating Elements around Image - Only Round Shapes */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-accent rounded-full animate-float"></div>
                <div
                  className="absolute top-1/4 -right-6 w-5 h-5 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <TypingAnimation
                    texts={["My Programming Journey", "From Physics to Code", "Passionate Developer"]}
                    className="text-white"
                    typingSpeed={100}
                    pauseTime={4000}
                  />
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p
                    className="transform transition-all duration-500 hover:translate-x-2 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Hello! I'm <span className="text-pink-500 font-semibold">Rakhima Khatun</span>, a passionate Full
                    Stack Developer with a unique journey from Physics to Programming. I completed my BSc and MSc in
                    Physics, but my heart always belonged to technology and coding.
                  </p>
                  <p
                    className="transform transition-all duration-500 hover:translate-x-2 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    My programming journey began during the COVID-19 pandemic when I started learning graphics design.
                    This led me to web development through a government course (LEDP), where I initially learned
                    WordPress. I quickly fell in love with creating digital solutions.
                  </p>
                  <p
                    className="transform transition-all duration-500 hover:translate-x-2 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    Over <span className="text-pink-500 font-semibold">3+ years</span> of experience, I've evolved from
                    WordPress development to mastering the MERN stack. I'm a Level 2 seller on Fiverr with{" "}
                    <span className="text-pink-500 font-semibold">200+ completed projects</span>, but my passion lies in
                    full-stack development.
                  </p>
                  <p
                    className="transform transition-all duration-500 hover:translate-x-2 animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    What I love most about coding is that every project teaches me something new. The constant learning
                    and problem-solving give me an incredible rush. I chose tech over my physics background because
                    coding brings me joy and fulfillment.
                  </p>
                </div>
              </div>

              {/* Tech Stack Icons */}
              <div className="mt-8 animate-slide-up" style={{ animationDelay: "1s" }}>
                <h4 className="text-xl font-semibold text-white mb-4">Technologies I Love</h4>
                <div className="flex flex-wrap gap-4">
                  {techStack.slice(0, 6).map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group relative animate-scale-in"
                      style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                    >
                      <div className="bg-gray-700 p-3 rounded-lg shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                        <span className={`text-2xl ${tech.color}`}>{tech.icon}</span>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 animate-fade-in" style={{ animationDelay: "2.4s" }}>
                <a
                  href="#contact"
                  className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 gap-2 shadow-lg hover:shadow-pink-500/25"
                >
                  <Code size={20} />
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
