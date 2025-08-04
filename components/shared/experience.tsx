import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer - Intern",
      company: "Jazzee Technologies",
      location: "Bhubaneswar, India",
      period: "2024 - Present",
      description:
        "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["NextJS", "Node.js", "AWS EC2", "TypeScript", "Supabase", "Python", "FastAPI", "Langchain"],
      achievements: [
        "Designed and developed the student-facing website to provide a seamless user experience for student onboarding and interaction.",
        "Built the employer portal with integrated AI recruitment agents, streamlining candidate screening, shortlisting, and selection.",
        "Created the hackathon platform to manage event registrations, team submissions, and real-time updates effectively.",
      ],
    },
    // {
    //   title: "Full Stack Developer",
    //   company: "StartupXYZ",
    //   location: "Austin, TX",
    //   period: "2020 - 2022",
    //   description:
    //     "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver high-quality solutions.",
    //   technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"],
    //   achievements: [
    //     "Built 3 major client applications from scratch",
    //     "Improved code coverage from 60% to 95%",
    //     "Integrated payment systems and third-party APIs",
    //   ],
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "WebDev Agency",
    //   location: "Remote",
    //   period: "2019 - 2020",
    //   description:
    //     "Focused on creating responsive and interactive user interfaces. Worked closely with UX designers to implement pixel-perfect designs.",
    //   technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest"],
    //   achievements: [
    //     "Delivered 15+ responsive websites",
    //     "Improved website performance scores by 30%",
    //     "Established component library and design system",
    //   ],
    // },
    // {
    //   title: "Junior Developer",
    //   company: "Digital Solutions Inc",
    //   location: "New York, NY",
    //   period: "2018 - 2019",
    //   description:
    //     "Started my professional journey working on various web development projects. Gained experience in both frontend and backend technologies.",
    //   technologies: ["JavaScript", "PHP", "MySQL", "HTML/CSS", "jQuery"],
    //   achievements: [
    //     "Completed 20+ small to medium projects",
    //     "Learned agile development methodologies",
    //     "Contributed to legacy system modernization",
    //   ],
    // },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey and key accomplishments</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <CalendarDays size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
