import { GraduationCap, Calendar, MapPin } from "lucide-react"

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Physics",
      institution: "University Name",
      location: "Location, Country",
      duration: "2018 - 2020",
      description:
        "Advanced studies in theoretical and applied physics with focus on quantum mechanics and electromagnetic theory.",
      grade: "CGPA: 3.8/4.0",
    },
    {
      degree: "Bachelor of Science in Physics",
      institution: "University Name",
      location: "Location, Country",
      duration: "2014 - 2018",
      description:
        "Comprehensive study of physics fundamentals including mechanics, thermodynamics, optics, and modern physics.",
      grade: "CGPA: 3.7/4.0",
    },
    {
      degree: "Web Development Course (LEDP)",
      institution: "Government Training Institute",
      location: "Location, Country",
      duration: "2020 - 2021",
      description:
        "Intensive web development training focusing on WordPress, HTML, CSS, and basic JavaScript during the pandemic.",
      grade: "Certificate of Excellence",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-pink-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">My academic journey from Physics to Programming</p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border-l-4 border-pink-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left - Icon and Duration */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="bg-pink-600 p-4 rounded-full mb-4">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center justify-center lg:justify-start text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                {/* Middle - Content */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-pink-500 font-semibold mb-3">{edu.institution}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                  <div className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {edu.grade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">From Physics to Programming</h3>
            <p className="text-gray-300 leading-relaxed">
              While my formal education is in Physics, my passion for technology led me to pursue web development. The
              analytical thinking and problem-solving skills from my physics background have been invaluable in my
              programming journey. I believe that the logical approach required in physics translates perfectly to
              writing clean, efficient code.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
