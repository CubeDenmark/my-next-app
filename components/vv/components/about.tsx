import Image from "next/image"

export default function About() {
  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl"></div>
              <Image
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-accent/20"
                src="/professional-developer-working-at-computer.png"
                alt="Denmark S. Cube working on development projects"
                width={400}
                height={500}
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">My Journey</h3>
              <p className="text-card-foreground leading-relaxed mb-4">
                AI is transforming how web developers approach every project. I embrace this evolution by integrating AI
                tools into my daily workflow, from syntax assistance to rapid prototyping, while maintaining strong
                foundational programming skills.
              </p>
              <p className="text-card-foreground leading-relaxed">
                As an aspiring Full-Stack Developer and DevOps Engineer, I understand that modern development requires
                both technical expertise and adaptability. My projects showcase this balance, demonstrating proficiency
                in core technologies while leveraging AI for enhanced productivity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md border border-border text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies Learned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
