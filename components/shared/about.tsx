import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Zap } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "React, Next.js, Node.js, and modern web frameworks",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Machine Learning & AI",
      description: "TensorFlow, PyTorch, GenAI, and intelligent systems",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Agentic AI Solutions",
      description: "Building autonomous AI agents and intelligent workflows",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance & Scale",
      description: "Optimized architectures for high-performance applications",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full stack engineer with deep expertise in AI and machine learning. I specialize in
                building modern web applications enhanced with intelligent features, from GenAI integrations to
                autonomous AI agents that solve complex business problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring cutting-edge AI research, contributing to open source ML
                projects, or sharing knowledge about the intersection of web development and artificial intelligence. I
                believe in creating technology that's not just functional, but truly intelligent.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
