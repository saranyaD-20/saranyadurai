import { Code2, Database, BarChart3, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "R Programming", level: 70 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "secondary",
    skills: [
      { name: "SPSS", level: 75 },
      { name: "XAMPP", level: 70 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    color: "accent",
    skills: [
      { name: "Excel", level: 90 },
      { name: "Tableau", level: 75 },
      { name: "Power BI", level: 70 },
    ],
  },
  {
    title: "Databases & More",
    icon: Database,
    color: "neon-pink",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Data Analysis", level: 85 },
      { name: "Machine Learning", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,hsl(var(--background))_70%)]" />
      
      {/* Gradient Orbs - Enhanced */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-primary/25 via-secondary/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-accent/25 via-neon-pink/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-3xl opacity-60" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-secondary/30 rounded-full animate-float"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Floating icons */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-float">
        <Code2 size={36} className="text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-16 opacity-20 animate-float" style={{ animationDelay: "1.2s" }}>
        <Database size={32} className="text-secondary" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 backdrop-blur-sm shadow-[0_0_20px_hsl(var(--secondary)/0.2)]">
            <Zap size={16} className="text-secondary" />
            <span className="text-sm text-secondary font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for data science, analytics, and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card p-6 hover-lift group relative overflow-hidden"
                style={{
                  animationDelay: `${categoryIndex * 0.1}s`,
                }}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  category.color === "primary" ? "bg-gradient-to-br from-primary/10 via-transparent to-transparent" :
                  category.color === "secondary" ? "bg-gradient-to-br from-secondary/10 via-transparent to-transparent" :
                  category.color === "accent" ? "bg-gradient-to-br from-accent/10 via-transparent to-transparent" :
                  "bg-gradient-to-br from-neon-pink/10 via-transparent to-transparent"
                }`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl shadow-lg ${
                        category.color === "primary"
                          ? "bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                          : category.color === "secondary"
                          ? "bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary shadow-[0_0_20px_hsl(var(--secondary)/0.3)]"
                          : category.color === "accent"
                          ? "bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-[0_0_20px_hsl(var(--accent)/0.3)]"
                          : "bg-gradient-to-br from-neon-pink/20 to-neon-pink/5 text-neon-pink shadow-[0_0_20px_hsl(var(--neon-pink)/0.3)]"
                      }`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between mb-2">
                          <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">{skill.name}</span>
                          <span
                            className={`font-semibold ${
                              category.color === "primary" ? "text-primary" :
                              category.color === "secondary" ? "text-secondary" :
                              category.color === "accent" ? "text-accent" :
                              "text-neon-pink"
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-3 bg-muted/50 rounded-full overflow-hidden relative">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 relative ${
                              category.color === "primary"
                                ? "bg-gradient-to-r from-primary via-primary/80 to-primary/60"
                                : category.color === "secondary"
                                ? "bg-gradient-to-r from-secondary via-secondary/80 to-secondary/60"
                                : category.color === "accent"
                                ? "bg-gradient-to-r from-accent via-accent/80 to-accent/60"
                                : "bg-gradient-to-r from-neon-pink via-neon-pink/80 to-neon-pink/60"
                            }`}
                            style={{ width: `${skill.level}%` }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
