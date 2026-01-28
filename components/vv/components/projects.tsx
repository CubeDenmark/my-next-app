import Image from "next/image"
import { projects } from '@/src/assets/images';

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I&apos;ve built using modern web technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={`${project.projectName} project screenshot`}
                  width={300}
                  height={200}
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-serif font-bold text-accent group-hover:text-secondary transition-colors duration-300">
                    {project.projectName}
                  </h3>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {project.tech}
                  </span>
                </div>

                <p className="text-card-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="flex gap-3">
                  <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors duration-300">
                    View Demo
                  </button>
                  <button className="border border-accent text-accent px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
