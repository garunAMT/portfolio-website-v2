import Hero from "@/components/shared/hero"
import Skills from "@/components/shared/skills"
import Projects from "@/components/shared/projects"
import Experience from "@/components/shared/experience"
import { NavbarDemo } from "@/components/shared/navigationBar"
import BentoPortfolio from "@/components/shared/bento-port"

export default function Home() {
  return (
    <main className="bg-background">
      <NavbarDemo />
      <Hero />
      <BentoPortfolio />
      <Skills />
      <Projects />
      <Experience />
    </main>
  )
}
