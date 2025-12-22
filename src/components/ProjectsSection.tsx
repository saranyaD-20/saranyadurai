import { ExternalLink, Github, Smartphone, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BloodBuddy",
    subtitle: "Health Recommendation Mobile App",
    icon: Smartphone,
    color: "primary",
    description:
      "A personalized health application that suggests food recommendations based on medical conditions with an integrated AI chatbot for enhanced user interaction.",
    techStack: ["Core PHP", "Java", "Android Studio", "AI Chatbot"],
    highlights: [
      "Personalized food recommendations based on medical conditions",
      "Integrated AI chatbot for enhanced interaction",
      "Secure data handling and optimized algorithms",
      "User-friendly mobile interface",
    ],
  },
  {
    title: "Personal Finance Manager",
    subtitle: "Financial Tracking Application",
    icon: Wallet,
    color: "secondary",
    description:
      "A Python-based financial tracking application that helps users manage their income, expenses, and generate insightful reports for better financial decisions.",
    techStack: ["Python", "Pandas", "Matplotlib", "CSV/Database"],
    highlights: [
      "Track income and expenses efficiently",
      "Generate visual reports using Matplotlib",
      "Rule-based expense categorization",
      "Secure storage using CSV/database systems",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in AI, data science, and application development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="glass-card overflow-hidden group hover-lift"
              >
                {/* Project Header */}
                <div
                  className={`p-6 ${
                    project.color === "primary"
                      ? "bg-gradient-to-r from-primary/20 to-primary/5"
                      : "bg-gradient-to-r from-secondary/20 to-secondary/5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        project.color === "primary"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      <IconComponent size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm ${
                            project.color === "primary"
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary/10 text-secondary"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              project.color === "primary" ? "bg-primary" : "bg-secondary"
                            }`}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="neon" size="sm" className="flex-1" asChild>
                      <a href="https://github.com/saranyaD-20" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" disabled>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
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

export default ProjectsSection;
