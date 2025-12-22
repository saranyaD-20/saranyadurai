import { Code2, Database, BarChart3, Wrench } from "lucide-react";

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
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
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
                className="glass-card p-6 hover-lift"
                style={{
                  animationDelay: `${categoryIndex * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : category.color === "secondary"
                        ? "bg-secondary/10 text-secondary"
                        : category.color === "accent"
                        ? "bg-accent/10 text-accent"
                        : "bg-neon-pink/10 text-neon-pink"
                    }`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span
                          className={`font-semibold ${
                            category.color === "primary"
                              ? "text-primary"
                              : category.color === "secondary"
                              ? "text-secondary"
                              : category.color === "accent"
                              ? "text-accent"
                              : "text-neon-pink"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            category.color === "primary"
                              ? "bg-gradient-to-r from-primary to-primary/70"
                              : category.color === "secondary"
                              ? "bg-gradient-to-r from-secondary to-secondary/70"
                              : category.color === "accent"
                              ? "bg-gradient-to-r from-accent to-accent/70"
                              : "bg-gradient-to-r from-neon-pink to-neon-pink/70"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
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
