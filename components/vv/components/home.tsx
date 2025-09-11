import Image from "next/image"

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20" id="home">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
            <Image
              width={300}
              height={300}
              src="/professional-developer-headshot.png"
              alt="Denmark S. Cube - Professional Developer"
              className="relative rounded-full border-4 border-accent shadow-2xl pulse-glow"
            />
          </div>

          <div className="text-center lg:text-left max-w-2xl">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2 font-sans">Hello, I&apos;m</p>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-balance mb-4">
                <span className="text-foreground">Denmark S. </span>
                <span className="text-accent">Cube</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-sans">
                Aspiring Full-Stack Web Developer & DevOps Engineer
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-serif font-bold text-accent mb-4">AI-Enhanced Development</h3>
            <p className="text-card-foreground leading-relaxed">
              This portfolio showcases the modern approach to web development, where AI tools enhance productivity
              without replacing fundamental programming skills. I leverage AI for syntax assistance and rapid
              prototyping while maintaining strong foundational knowledge in full-stack development.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-serif font-bold text-accent mb-4">Continuous Learning</h3>
            <p className="text-card-foreground leading-relaxed">
              As an aspiring Full-Stack Developer and DevOps Engineer, I believe in continuous learning and adaptation.
              My projects demonstrate proficiency in modern web technologies while embracing AI as a powerful tool for
              enhanced development workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
