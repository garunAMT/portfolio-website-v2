"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import {
  JavaScript,
  TypeScript,
  Python,
  Java,
  CPlusPlus,
  C,
  React,
  NextJs,
  Angular,
  HTML5,
  CSS3,
  TailwindCSS,
  Sass,
  NodeJs,
  ExpressJsDark,
  Django,
  FlaskDark,
  FastAPI,
  MongoDB,
  PostgreSQL,
  MySQL,
  Firebase,
  Supabase,
  Docker,
  AWS,
  Git,
  GitHubDark,
  VisualStudioCode,
  Figma,
  Postman,
  Webpack,
  ViteJS,
  ESLint,
  Prettier,
  Jest,
  Tensorflow,
  PyTorch,
  NumPy,
} from "developer-icons"

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const skills = [
    { name: "JavaScript", category: "Languages", icon: JavaScript },
    { name: "TypeScript", category: "Languages", icon: TypeScript },
    { name: "Python", category: "Languages", icon: Python },
    { name: "C++", category: "Languages", icon: CPlusPlus },
    { name: "C", category: "Languages", icon: C },
    { name: "React", category: "Frontend", icon: React },
    { name: "Next.js", category: "Frontend", icon: NextJs },
    { name: "HTML5", category: "Frontend", icon: HTML5 },
    { name: "CSS3", category: "Frontend", icon: CSS3 },
    { name: "Tailwind", category: "Frontend", icon: TailwindCSS },
    { name: "Node.js", category: "Backend", icon: NodeJs },
    { name: "Express.js", category: "Backend", icon: ExpressJsDark },
    { name: "Flask", category: "Backend", icon: FlaskDark },
    { name: "FastAPI", category: "Backend", icon: FastAPI },
    { name: "MongoDB", category: "Database", icon: MongoDB },
    { name: "PostgreSQL", category: "Database", icon: PostgreSQL },
    { name: "MySQL", category: "Database", icon: MySQL },
    { name: "Firebase", category: "Database", icon: Firebase },
    { name: "Supabase", category: "Database", icon: Supabase },
    { name: "Docker", category: "DevOps", icon: Docker },
    { name: "AWS", category: "DevOps", icon: AWS },
    { name: "Git", category: "Tools", icon: Git },
    { name: "GitHub", category: "Tools", icon: GitHubDark },
    { name: "VS Code", category: "Tools", icon: VisualStudioCode },
    { name: "Figma", category: "Tools", icon: Figma },
    { name: "Postman", category: "Tools", icon: Postman },
    // { name: "Webpack", category: "Tools", icon: Webpack },
    { name: "Vite", category: "Tools", icon: ViteJS },
    { name: "ESLint", category: "Tools", icon: ESLint },
    { name: "Prettier", category: "Tools", icon: Prettier },
    { name: "Jest", category: "Tools", icon: Jest },
    { name: "TensorFlow", category: "AI & ML", icon: Tensorflow },
    { name: "PyTorch", category: "AI & ML", icon: PyTorch },
    { name: "NumPy", category: "AI & ML", icon: NumPy },
  ]

  const categories = [
    { name: "All", count: skills.length },
    { name: "Languages", count: skills.filter((s) => s.category === "Languages").length },
    { name: "Frontend", count: skills.filter((s) => s.category === "Frontend").length },
    { name: "Backend", count: skills.filter((s) => s.category === "Backend").length },
    { name: "Database", count: skills.filter((s) => s.category === "Database").length },
    { name: "DevOps", count: skills.filter((s) => s.category === "DevOps").length },
    { name: "Tools", count: skills.filter((s) => s.category === "Tools").length },
    { name: "AI & ML", count: skills.filter((s) => s.category === "AI & ML").length },
  ]

  const filteredSkills = skills.filter((skill) => {
    const matchesFilter = activeFilter === "All" || skill.category === activeFilter
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
            <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium trantion-colors ${
                  activeFilter === category.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 gap-6">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg bg-card border hover:shadow-md trantion-shadow"
                >
                  <IconComponent className="text-4xl mb-3 h-10 w-10" />
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              )
            })}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No technologies found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
