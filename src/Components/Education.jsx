import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Physics",
      institution: "National University",
      location: "Location, Country",
      duration: "2021 - 2022",
      description:
        "Advanced studies in theoretical and applied physics with focus on quantum mechanics and electromagnetic theory.",
    },
    {
      degree: "Bachelor of Science in Physics",
      institution: "National University",
      location: "Location, Country",
      duration: "2016 - 2020",
      description:
        "Comprehensive study of physics fundamentals including mechanics, thermodynamics, optics, and modern physics.",
    },
  ];

  const professionalCourses = [
    {
      title: "Web Development (LEDP)",
      provider: "LEDP Govt. Program",
      description:
        "Govt. Certified Course during pandemic covering WordPress, HTML, CSS, and basic JavaScript.",
      badge: "Certificate of Excellence",
    },
    {
      title: "MERN Stack Development",
      provider: "Programming Hero",
      description:
        "Completed full-stack web dev course using MongoDB, Express, React, Node.js.",
      badge: "Programming Hero",
    },
    {
      title: "Advanced JavaScript",
      provider: "Online Course",
      description:
        "Mastered modern JS concepts: ES6+, async/await, APIs, and design patterns.",
      badge: "Online Course",
    },
  ];

  return (
    <section id="education" className="py-20 bg-base-200 relative overflow-hidden" data-theme="dark">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-secondary/15 rounded-full animate-bounce" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-pink-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey from Physics to Programming
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-4 border-pink-600 pl-6 space-y-10 animate-slide-in-left">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative group bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-pink-500/30 transition duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute left-[-14px] top-6 w-4 h-4 bg-pink-600 rounded-full border-2 border-white shadow-md"></span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="flex flex-col items-center md:items-start">
                  <div className="bg-pink-600 p-3 rounded-full mb-4">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mb-1">
                    <Calendar className="mr-2" size={16} />
                    {edu.duration}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="mr-2" size={16} />
                    {edu.location}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-pink-500 font-semibold mb-2">{edu.institution}</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Courses */}
        <div className="mt-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Professional <span className="text-pink-500">Courses</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {professionalCourses.map((course, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-pink-500/30 hover:scale-[1.02] transition duration-300"
                style={{ animationDelay: `${i * 0.2 + 0.5}s` }}
              >
                <div className="flex items-center mb-4">
                  <GraduationCap size={28} className="text-pink-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">{course.description}</p>
                <span className="inline-block bg-pink-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {course.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Block */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "1.5s" }}>
          <div className="bg-gray-900 p-8 rounded-xl shadow-md max-w-4xl mx-auto hover:shadow-pink-500/20 transition duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              From Physics to Programming
            </h3>
            <p className="text-gray-300 leading-relaxed">
              While my formal education is in Physics, my passion for technology led me to pursue web development.
              The analytical thinking and problem-solving skills from my physics background have been invaluable in my
              programming journey. I believe that the logical approach required in physics translates perfectly to
              writing clean, efficient code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
