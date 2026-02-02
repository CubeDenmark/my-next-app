import AnimatedBackground from "@/vv/components/animated-background"
import ScrollProgress from "@/vv/components/scroll-progress"
import Header from "@/vv/components/header"
import Home from "@/vv/components/home"
import About from "@/vv/components/about"
import Projects from "@/vv/components/projects"
import Skills from "@/vv/components/skills"
import Contacts from "@/vv/components/contacts"
import Footer from "@/vv/components/footer"
import FloatingNav from "@/vv/components/floating-nav"

export default function Portfolio() {
  return (
    <main id="vv" className="relative">
      <AnimatedBackground />
      <ScrollProgress />
      <Header />
      <FloatingNav />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contacts />
      </section>
      <Footer />
    </main>
  )
}
