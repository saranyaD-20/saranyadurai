import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Smartphone, Wallet, Plane, FileText, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BloodBuddy",
    subtitle: "Health Recommendation Mobile App",
    icon: Smartphone,
    description:
      "Developed a personalized health app using Core PHP and Java (Android Studio) that suggests food based on medical conditions. Integrated an AI chatbot and optimized algorithms for better user engagement.",
    techStack: ["Core PHP", "Java", "Android Studio", "AI Chatbot"],
    hasVideo: true,
    videoSrc: "/videos/bloodbuddy-demo.mp4",
    githubUrl: "https://github.com/saranyaD-20",
  },
  {
    title: "Personal Finance Manager",
    subtitle: "Python-Based Financial Tracker",
    icon: Wallet,
    description:
      "Built a Python-based app to track income, expenses, and generate reports using Matplotlib and Pandas. Implemented rule-based categorization and secure CSV/database storage.",
    techStack: ["Python", "Pandas", "Matplotlib", "CSV/Database"],
    hasVideo: false,
    githubUrl: "https://github.com/saranyaD-20",
  },
  {
    title: "Greenhouse Gas Emission Analysis",
    subtitle: "Machine Learning Research Project",
    icon: Plane,
    description:
      "Analyzed aviation emission patterns and predicted trends using SVM, LSTM, and Random Forest models. Improved model accuracy through feature engineering and hyperparameter tuning.",
    techStack: ["Python", "SVM", "LSTM", "Random Forest", "Scikit-learn"],
    hasVideo: false,
    githubUrl: "https://github.com/saranyaD-20",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-muted/30">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.5)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/30 to-neon-pink/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-3xl opacity-50" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-float">
        <Layers size={40} className="text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-16 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles size={36} className="text-secondary" />
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Layers size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through code and innovation
          </p>
        </div>

        {/* Project Card */}
        <div className="glass-card overflow-hidden rounded-2xl relative group">
          {/* Animated border glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500" />
          
          <div className="relative bg-card rounded-2xl overflow-hidden">
            {/* Media Section */}
            <div className="relative aspect-[16/9] bg-gradient-to-br from-muted/30 to-muted/10 overflow-hidden">
              {project.hasVideo ? (
                <video
                  key={project.videoSrc}
                  src={project.videoSrc}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5 relative">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping opacity-20">
                      <project.icon className="w-32 h-32 text-primary" />
                    </div>
                    <project.icon className="w-32 h-32 text-primary/40" />
                  </div>
                </div>
              )}
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 space-y-6 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed relative z-10">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2 relative z-10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all group/btn"
                >
                  <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                </a>
                <a
                  href="/Saranya_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/50 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)] transition-all group/btn"
                >
                  <FileText className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                </a>
                <button
                  disabled
                  className="w-12 h-12 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center opacity-50 cursor-not-allowed"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="w-14 h-14 rounded-full bg-muted/30 border border-border/50 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </Button>

          {/* Dots */}
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-3 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
                    : "w-3 h-3 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="w-14 h-14 rounded-full bg-muted/30 border border-border/50 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        {/* Project counter */}
        <div className="text-center mt-6">
          <span className="text-muted-foreground text-sm">
            <span className="text-primary font-semibold">{currentIndex + 1}</span> / {projects.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
