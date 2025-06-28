"use client"

import { useState } from "react"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "React Router", level: 88 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Firebase", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Authentication", level: 80 },
    ],
    tools: [
      { name: "VS Code", level: 95 },
      { name: "Git & GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Canva", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Netlify", level: 80 },
    ],
    cms: [
      { name: "WordPress", level: 95 },
      { name: "Custom Themes", level: 90 },
      { name: "Plugin Development", level: 85 },
      { name: "WooCommerce", level: 80 },
    ],
  }

  const categories = [
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "tools", label: "Tools", icon: "🛠️" },
    { key: "cms", label: "CMS", icon: "📝" },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-pink-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-pink-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <span className="text-pink-500 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
