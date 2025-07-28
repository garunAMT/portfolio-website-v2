"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const skills = [
    { name: "JavaScript", category: "Languages", icon: "devicon-javascript-plain" },
    { name: "TypeScript", category: "Languages", icon: "devicon-typescript-plain" },
    { name: "Python", category: "Languages", icon: "devicon-python-plain" },
    // { name: "Java", category: "Languages", icon: "devicon-java-plain" },
    { name: "C++", category: "Languages", icon: "devicon-cplusplus-plain" },
    { name: "C", category: "Languages", icon: "devicon-c-plain" },
    { name: "React", category: "Frontend", icon: "devicon-react-original" },
    { name: "Next.js", category: "Frontend", icon: "devicon-nextjs-original" },
    // { name: "Vue.js", category: "Frontend", icon: "devicon-vuejs-plain" },
    // { name: "Angular", category: "Frontend", icon: "devicon-angularjs-plain" },
    { name: "HTML5", category: "Frontend", icon: "devicon-html5-plain" },
    { name: "CSS3", category: "Frontend", icon: "devicon-css3-plain" },
    { name: "Tailwind CSS", category: "Frontend", icon: "devicon-tailwindcss-plain" },
    // { name: "Sass", category: "Frontend", icon: "devicon-sass-original" },
    { name: "Node.js", category: "Backend", icon: "devicon-nodejs-plain" },
    { name: "Express.js", category: "Backend", icon: "devicon-express-original" },
    // { name: "Django", category: "Backend", icon: "devicon-django-plain" },
    { name: "Flask", category: "Backend", icon: "devicon-flask-original" },
    { name: "FastAPI", category: "Backend", icon: "devicon-fastapi-plain" },
    // { name: "Spring Boot", category: "Backend", icon: "devicon-spring-plain" },
    // { name: "GraphQL", category: "Backend", icon: "devicon-graphql-plain" },
    { name: "MongoDB", category: "Database", icon: "devicon-mongodb-plain" },
    { name: "PostgreSQL", category: "Database", icon: "devicon-postgresql-plain" },
    { name: "MySQL", category: "Database", icon: "devicon-mysql-plain" },
    // { name: "Redis", category: "Database", icon: "devicon-redis-plain" },
    { name: "Firebase", category: "Database", icon: "devicon-firebase-plain" },
    { name: "Supabase", category: "Database", icon: "devicon-supabase-plain" },
    { name: "Docker", category: "DevOps", icon: "devicon-docker-plain" },
    // { name: "Kubernetes", category: "DevOps", icon: "devicon-kubernetes-plain" },
    { name: "AWS", category: "DevOps", icon: "devicon-amazonwebservices-original" },
    // { name: "Google Cloud", category: "DevOps", icon: "devicon-googlecloud-plain" },
    // { name: "Azure", category: "DevOps", icon: "devicon-azure-plain" },
    // { name: "Jenkins", category: "DevOps", icon: "devicon-jenkins-plain" },
    { name: "GitHub Actions", category: "DevOps", icon: "devicon-github-original" },
    // { name: "Nginx", category: "DevOps", icon: "devicon-nginx-original" },
    { name: "Git", category: "Tools", icon: "devicon-git-plain" },
    { name: "GitHub", category: "Tools", icon: "devicon-github-original" },
    { name: "VS Code", category: "Tools", icon: "devicon-vscode-plain" },
    { name: "Figma", category: "Tools", icon: "devicon-figma-plain" },
    { name: "Postman", category: "Tools", icon: "devicon-postman-plain" },
    // { name: "Webpack", category: "Tools", icon: "devicon-webpack-plain" },
    { name: "Vite", category: "Tools", icon: "devicon-vitejs-plain" },
    { name: "ESLint", category: "Tools", icon: "devicon-eslint-original" },
    { name: "Prettier", category: "Tools", icon: "devicon-prettier-plain" },
    // { name: "Jest", category: "Tools", icon: "devicon-jest-plain" },
    // { name: "TensorFlow", category: "AI & ML", icon: "devicon-tensorflow-original" },
    // { name: "PyTorch", category: "AI & ML", icon: "devicon-pytorch-original" },
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
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs bg-gray-200">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
                >
                  <i className={`${skill.icon} text-4xl mb-3`}></i>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>

            {filteredSkills.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No technologies found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
