const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "Bootstrap", "React"],
  },
  {
    title: "Backend Development",
    skills: ["Laravel", "PHP", "MySQL", "API Development", "Server Management"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker Basics", "Jenkins Basics", "Linux OS", "Git", "Version Control"],
  },
]

export default function Skills() {
  return (
    <section className="py-20 bg-muted/30" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-accent mb-2">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-accent/10 transition-colors duration-300"
                  >
                    <span className="text-card-foreground font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? "bg-accent" : "bg-border"}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-accent mb-4">Always Learning</h3>
            <p className="text-card-foreground leading-relaxed">
              Technology evolves rapidly, and I&apos;m committed to continuous learning. Currently exploring advanced React
              patterns, cloud deployment strategies, and modern DevOps practices to stay current with industry
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
