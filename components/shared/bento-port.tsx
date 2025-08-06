// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { Calendar, X, Sparkles, Github, BookOpen, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function BentoPortfolio() {
  const skills = ["Full Stack Development", "Machine Learning", "Deep Learning", "Generative AI", "Agentic AI"]

  const learningSkills = ["Proved Track Record", "Fast Delivery", "AI Ready", "Always Improving", "Feedback Friendly"]

  const recentWorks = [
    { name: "Recruiter Agent", url: "https://jazzee-employer.vercel.app/", date: "July-2024" },
    { name: "Student Portal", url: "https://www.jazzeetechnologies.com/", date: "Dec-2024" },
    { name: "AFG Website", url: "https://www.appliedfluidsgroup.in/", date: "Aug-2024" },
  ]

  const techStack = [
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
    { name: "Notion", icon: "📝" },
    { name: "GitHub", icon: "🐙" },
    { name: "Linear", icon: "📊" },
    { name: "Discord", icon: "💬" },
    { name: "PastePal", icon: "📋" },
    { name: "Hype 4", icon: "⚡" },
    { name: "Paw", icon: "🐾" },
    { name: "Chrome", icon: "🌐" },
  ]

  return (
    <div className="min-h-screen text-gray-900 p-4 md:p-6" id="about-me">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stack vertically, Desktop: Bento Grid */}
        <div className="flex flex-col gap-4 md:grid md:grid-cols-6 lg:grid-cols-12 md:gap-6 auto-rows-auto min-h-screen">
          {/* Hero Image Section - Fixed size */}
          <div className="h-80 md:h-96 lg:h-[800px] md:col-span-3 lg:col-span-4 lg:row-span-3 bg-white rounded-2xl md:rounded-3xl overflow-hidden relative flex-shrink-0 border border-gray-200 shadow-sm">
            <Image src="https://res.cloudinary.com/dtipcangs/image/upload/v1754456028/portfolio-website/Anurag_Tripathi_ulpfeu.jpg" alt="Anurag Tripathi" fill className="object-cover" />
          </div>

          {/* Combined Title and Description Section */}
          <div className="min-h-64 md:col-span-3 lg:col-span-5 lg:row-span-2 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 relative border border-gray-200 shadow-sm">

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-gray-900">
              ABOUT ME.
              <br />
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              My journey into the world of development started 4 years ago with a deep curiosity for how things work behind the screen. What began as a hobby soon turned into a passion for building products that are not only functional but also meaningful. Over the years, I&apos;ve refined my skills in full-stack development, focusing on crafting clean, efficient, and scalable solutions. More recently, I&apos;ve been diving into the world of AI, exploring how emerging technologies like agentic systems can unlock new possibilities in product design and automation. Come let's create something amazing together!!
            </p>
          </div>

            {/* Social Links - Responsive Grid */}
            <div className="md:col-span-3 lg:col-span-3 bg-white rounded-2xl md:rounded-3xl py-4 px-4 md:py-4 border border-gray-200 shadow-sm flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
              SOCIAL LINKS
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3 md:justify-items-center">
              <a
                href="https://github.com/garunAMT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 rounded-lg h-12 w-12 md:h-20 md:w-20 lg:h-12 lg:w-12 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-gray-300 group"
              >
                <Github className="h-8 w-8 md:h-16 md:w-16 lg:h-8 lg:w-8 transition-transform duration-200 group-hover:rotate-12" />
              </a>
              <a
                href="https://x.com/frkng_engineer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 rounded-lg h-12 w-12 md:h-20 md:w-20 lg:h-12 lg:w-12 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-gray-300 group"
              >
                <X className="h-8 w-8 md:h-16 md:w-16 lg:h-8 lg:w-8 transition-transform duration-200 group-hover:-rotate-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/anurag-mani-tripathi/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 rounded-lg h-12 w-12 md:h-20 md:w-20 lg:h-12 lg:w-12 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-gray-300 group"
              >
                <Linkedin className="h-8 w-8 md:h-16 md:w-16 lg:h-8 lg:w-8 transition-transform duration-200 group-hover:scale-125" />
              </a>
              <a
                href="mailto:anuragtripathi2901@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 rounded-lg h-12 w-12 md:h-20 md:w-20 lg:h-12 lg:w-12 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-gray-300 group"
              >
                <Mail className="h-8 w-8 md:h-16 md:w-16 lg:h-8 lg:w-8 transition-transform duration-200 group-hover:-translate-y-1" />
              </a>
              </div>
            </div>
          {/* Recent Works */}
          <div className="min-h-64 md:col-span-3 lg:col-span-3 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-200 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
              RECENTS
              <br />
              WORKS.
            </h3>
            <div className="space-y-3 md:space-y-4">
              {recentWorks.map((work, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate text-gray-900">{work.name}</div>
                    <div className="text-xs md:text-sm text-gray-500 truncate"><a href={work.url}>{work.url}</a></div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 ml-2 flex-shrink-0">{work.date}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Skills Card */}
          <div className="min-h-64 md:col-span-3 lg:col-span-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden border border-purple-300 shadow-sm">
            <Sparkles className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-white/80" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">SKILLS.</h2>
            <div className="space-y-1 md:space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="text-sm md:text-base lg:text-lg font-medium text-white">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Why ME Card */}
          <div className="min-h-64 md:col-span-3 lg:col-span-4 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden border border-emerald-300 shadow-sm">
            <BookOpen className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-white/80" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">WHY ME.</h2>
            <div className="space-y-1 md:space-y-2">
              {learningSkills.map((skill, index) => (
                <div key={index} className="text-sm md:text-base lg:text-lg font-medium text-white">
                  {skill}
                </div>
              ))}
            </div>
          </div>



          {/* Blank Card */}
          {/* <div className="min-h-32 md:col-span-3 lg:col-span-2 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-200 shadow-sm flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-sm">Coming Soon</p>
            </div>
          </div> */}

          {/* Tech Stack */}
          {/* <div className="md:col-span-3 lg:col-span-9 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-200 shadow-sm">
            <div className="flex gap-2 md:gap-3 flex-wrap">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-900">STACK.</h3>
              {techStack.slice(0, 8).map((tech, index) => (
                <div
                  key={index}
                  className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  <span className="text-lg md:text-xl">{tech.icon}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Schedule Call Button - Full Card Button */}
          {/* <button className="min-h-20 md:col-span-3 lg:col-span-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-2xl md:rounded-3xl p-4 flex items-center justify-center transition-all duration-200 transform hover:scale-105 border border-orange-300 shadow-sm">
            <div className="flex items-center text-white font-semibold text-sm md:text-base">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a call
            </div>
          </button> */}
        </div>
      </div>
    </div>
  )
}
