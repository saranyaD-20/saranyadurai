import { ExternalLink, Github, Smartphone, Wallet, Play, Layers, Plane } from "lucide-react";
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
    hasVideo: true,
    videoSrc: "/videos/bloodbuddy-demo.mp4",
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
    hasVideo: false,
  },
  {
    title: "Greenhouse Gas Emission Analysis",
    subtitle: "Machine Learning Research Project",
    icon: Plane,
    color: "primary",
    description:
      "Analyzed aviation emission patterns and predicted trends using SVM, LSTM, and Random Forest models. Improved model accuracy through feature engineering and hyperparameter tuning for environmental assessments.",
    techStack: ["Python", "SVM", "LSTM", "Random Forest", "Scikit-learn"],
    highlights: [
      "Aviation emission pattern analysis",
      "Multi-model comparison (SVM, LSTM, Random Forest)",
      "Feature engineering for improved accuracy",
      "Hyperparameter tuning for environmental assessments",
    ],
    hasVideo: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.5)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/20 to-neon-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 opacity-20 animate-float">
        <Layers size={40} className="text-primary" />
      </div>
      <div className="absolute bottom-32 right-24 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Play size={36} className="text-secondary" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Layers size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in AI, data science, and application development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="glass-card overflow-hidden group hover-lift relative"
              >
                {/* Animated border glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm ${
                  project.color === "primary" 
                    ? "bg-gradient-to-r from-primary via-accent to-primary" 
                    : "bg-gradient-to-r from-secondary via-neon-pink to-secondary"
                }`} />

                {/* Video/Media Section */}
                {project.hasVideo && (
                  <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-muted/30 overflow-hidden">
                    <video
                      src={project.videoSrc}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      playsInline
                      poster=""
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-medium">Demo Video</span>
                    </div>
                  </div>
                )}

                {/* Project Header */}
                <div
                  className={`p-6 relative ${
                    project.color === "primary"
                      ? "bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"
                      : "bg-gradient-to-r from-secondary/20 via-secondary/10 to-transparent"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-2xl shadow-lg ${
                        project.color === "primary"
                          ? "bg-gradient-to-br from-primary/30 to-primary/10 text-primary shadow-[0_0_25px_hsl(var(--primary)/0.4)]"
                          : "bg-gradient-to-br from-secondary/30 to-secondary/10 text-secondary shadow-[0_0_25px_hsl(var(--secondary)/0.4)]"
                      }`}
                    >
                      <IconComponent size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${project.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
                            project.color === "primary"
                              ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                              : "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20"
                          } transition-colors cursor-default`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${project.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm group/item">
                          <span
                            className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                              project.color === "primary" ? "bg-primary" : "bg-secondary"
                            }`}
                          />
                          <span className="group-hover/item:text-foreground transition-colors">{highlight}</span>
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
                    <Button variant="ghost" size="sm" className="border border-border/50 hover:border-primary/50" disabled>
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
