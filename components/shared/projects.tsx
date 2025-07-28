import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application built with Next.js and MongoDB. Real-time updates, team collaboration, and project tracking.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "MongoDB", "Socket.io", "TypeScript", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "A data visualization dashboard for weather analytics using Python, FastAPI, and React. Features interactive charts and real-time data.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "FastAPI", "React", "D3.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media API",
      description:
        "RESTful API for a social media platform with user management, posts, comments, and real-time notifications using Node.js and Redis.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Node.js", "Express", "Redis", "JWT", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "An intelligent chat application with AI integration, built using React, Python, and OpenAI API. Features conversation history and context awareness.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Python", "OpenAI API", "WebSocket", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "DevOps Monitoring Tool",
      description:
        "A comprehensive monitoring solution for DevOps teams with Docker, Kubernetes integration, and real-time alerting system.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Docker", "Kubernetes", "Grafana", "Prometheus", "Go"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">A showcase of my recent work and technical expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} className="flex items-center gap-1">
                        <ExternalLink size={14} />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} className="flex items-center gap-1">
                        <Github size={14} />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
