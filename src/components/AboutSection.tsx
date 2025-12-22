import { GraduationCap, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and driven by curiosity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm Saranya D, a passionate AI and Data Science enthusiast with a keen interest
                    in Data Analytics. I thrive on solving complex problems using data-driven
                    approaches and am constantly exploring new technologies to expand my skillset.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Education</h3>
                  <p className="text-primary font-semibold">
                    Bachelor of Technology – AI & Data Science
                  </p>
                  <p className="text-muted-foreground">
                    Saveetha Institute of Medical and Technical Sciences
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">2022 – 2026</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Career Goals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a learning-driven individual seeking opportunities to grow as a data analyst
                    or AI professional. My goal is to contribute to innovative projects that make a
                    meaningful impact on society through intelligent data solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "B.Tech", label: "AI & Data Science", color: "primary" },
              { value: "2024", label: "Python Intern", color: "secondary" },
              { value: "2+", label: "Projects Completed", color: "accent" },
              { value: "∞", label: "Curiosity Level", color: "primary" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover-lift group"
              >
                <p
                  className={`text-4xl font-display font-bold mb-2 ${
                    stat.color === "primary"
                      ? "text-primary"
                      : stat.color === "secondary"
                      ? "text-secondary"
                      : "text-accent"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
