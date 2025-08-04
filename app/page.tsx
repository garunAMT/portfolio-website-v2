// import Navbar from "@/components/shared/navbar"
import Hero from "@/components/shared/hero"
import About from "@/components/shared/about"
// import WhyMe from "@/components/shared"
// import Triplabs from "@/components/shared/triplabs"
import Skills from "@/components/shared/skills"
import Projects from "@/components/shared/projects"
import Experience from "@/components/shared/experience"
import { NavbarDemo } from "@/components/shared/navigationBar"
import BentoPortfolio from "@/components/shared/bento-port"
// import BookCall from "@/components/shared/book-call"
// import Footer from "@/components/shared/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <NavbarDemo />
      <Hero />
      <BentoPortfolio />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Experience />
      {/* <WhyMe /> */}
      {/* <Triplabs /> */}
      {/* <BookCall /> */}
      {/* <Footer /> */}
    </main>
  )
}
