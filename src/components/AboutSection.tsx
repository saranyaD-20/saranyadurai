import { GraduationCap, Target, Sparkles, Code2, Brain, Database, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      
      {/* Gradient Orbs - Enhanced */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-br from-secondary/30 via-accent/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-br from-primary/30 via-neon-pink/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 opacity-20 animate-float">
        <Code2 size={40} className="text-primary" />
      </div>
      <div className="absolute top-1/3 right-16 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Brain size={36} className="text-secondary" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Database size={32} className="text-accent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
            <User size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Know More About Me</span>
          </div>
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
            <div className="glass-card p-6 hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm Saranya D, a passionate AI and Data Science enthusiast with a keen interest
                    in Data Analytics. I thrive on solving complex problems using data-driven
                    approaches and am constantly exploring new technologies to expand my skillset.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary shadow-[0_0_20px_hsl(var(--secondary)/0.3)]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-secondary transition-colors">Education</h3>
                  <p className="text-primary font-semibold">
                    Bachelor of Technology – AI & Data Science
                  </p>
                  <p className="text-muted-foreground">
                    Saveetha Institute of Medical and Technical Sciences
                  </p>
                  <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                    <span>2022 – 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-[0_0_20px_hsl(var(--accent)/0.3)]">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">Career Goals</h3>
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
              { value: "B.Tech", label: "AI & Data Science", color: "primary", icon: Brain },
              { value: "2024", label: "Python Intern", color: "secondary", icon: Code2 },
              { value: "2+", label: "Projects Completed", color: "accent", icon: Target },
              { value: "∞", label: "Curiosity Level", color: "neon-pink", icon: Sparkles },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 text-center hover-lift group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${
                    stat.color === "primary" ? "from-primary/10 to-transparent" :
                    stat.color === "secondary" ? "from-secondary/10 to-transparent" :
                    stat.color === "accent" ? "from-accent/10 to-transparent" :
                    "from-neon-pink/10 to-transparent"
                  }`} />
                  <div className="relative z-10">
                    <div className={`inline-flex p-2 rounded-lg mb-3 ${
                      stat.color === "primary" ? "bg-primary/10 text-primary" :
                      stat.color === "secondary" ? "bg-secondary/10 text-secondary" :
                      stat.color === "accent" ? "bg-accent/10 text-accent" :
                      "bg-neon-pink/10 text-neon-pink"
                    }`}>
                      <IconComponent size={20} />
                    </div>
                    <p
                      className={`text-4xl font-display font-bold mb-2 ${
                        stat.color === "primary" ? "text-primary" :
                        stat.color === "secondary" ? "text-secondary" :
                        stat.color === "accent" ? "text-accent" :
                        "text-neon-pink"
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
