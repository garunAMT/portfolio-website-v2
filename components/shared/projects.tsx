import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Jazzee Employer Portal",
      description:
        "A website that uses AI agent to screen, select and schedule interviews with candidates.",
      image:
        "https://res.cloudinary.com/dtipcangs/image/upload/v1754283581/portfolio-website/jazz-emp_ekubfg.png",
      technologies: [
        "Next.js",
        "Supabase",
        "Tailwind CSS",
        "TypeScript",
        "Prisma",
        "Python",
        "Langchain",
        "FastAPI",
      ],
      liveUrl: "https://jazzee-employer.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Jazzee EdTech Website",
      description:
        "A student-facing website to provide a seamless user experience for student onboarding.",
      image:
        "https://res.cloudinary.com/dtipcangs/image/upload/v1754283581/portfolio-website/jazz-stu_eddkhr.png",
      technologies: [
        "NExtJS",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Kinde Auth",
        "Shadcn",
      ],
      liveUrl: "https://www.jazzeetechnologies.com/",
      githubUrl: "#",
    },
    {
      title: "SAAS Marketplace",
      description:
        "A SAAS marketplace which uses reverse dutch auction to sell products and services.",
      image:
        "https://res.cloudinary.com/dtipcangs/image/upload/v1754283580/portfolio-website/Jazzee-marketplace_avoryy.png",
      technologies: [
        "NextJS",
        "Node.js",
        "Supabase",
        "Kinde Auth",
        "Tailwind CSS",
      ],
      liveUrl: "https://jazzee-marketplace.vercel.app/",
      githubUrl: "https://github.com/garunAMT/jazzee-marketplace",
    },
    {
      title: "T$O Hackathon Platform",
      description:
        "A hackathon platform to manage event registrations and real-time updates effectively.",
      image:
        "https://res.cloudinary.com/dtipcangs/image/upload/v1754283581/portfolio-website/jazz-hack_hxuxl9.png",
      technologies: ["Nextjs", "TailwindCSS", "Shadcn UI", "Sanity CMS", "Typescript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AFG Website",
      description:
        "A website for Applied Fluids Group that provides information about their research and projects.",
      image:
        "https://res.cloudinary.com/dtipcangs/image/upload/v1754283669/portfolio-website/afg-v2_mjklvw.png",
      technologies: ["Nextjs", "TailwindCSS", "Shadcn UI", "Sanity CMS", "Typescript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Inventory IIT Bhubaneswar",
      description:
        "A web based inventory management system for Students' Gymkhana, IIT Bhubaneswar.",
      image:
        "https://res.cloudinary.com/dtipcangs/image/upload/v1754284817/portfolio-website/inventory_spr5bb.png",
      technologies: ["NextJS", "Typescript", "TailwindCSS", "Appwrite", "Kinde Auth"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link
                        href={project.liveUrl}
                        className="flex items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href={project.githubUrl}
                        className="flex items-center gap-1"
                      >
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
  );
}
