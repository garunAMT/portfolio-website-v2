import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <section className="pt-24 pb-12 md:pt-32 md:pb-20" id="home">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="text-blue-500 font-bold" style={{ fontFamily: "Dancing Script, cursive" }}>
                Anurag
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
              Full Stack Development | Machine Learning | Agentic AI
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I build scalable web applications and AI-powered solutions that solve real-world problems. Passionate
              about clean code, modern technologies, and creating intelligent systems that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <Link href="https://cal.com/anurag-tripathi" className="flex items-center gap-2">
                  Book a Call
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="flex items-center gap-2 bg-transparent">
                <Link href={"https://drive.google.com/file/d/1WeveQlKMkh7ymsq7DkvOEuQIIpmpE_4w/view?usp=drive_link"} target="_blank">
                                <Download size={20} />
                View Resume
                </Link>

              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
