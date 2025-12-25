import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Smartphone, Wallet, Plane } from "lucide-react";
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
    <section id="projects" className="section-padding relative overflow-hidden bg-[#1a1f2e]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        {/* Project Card */}
        <div className="glass-card overflow-hidden rounded-2xl">
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
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5">
                <project.icon className="w-32 h-32 text-primary/30" />
              </div>
            )}
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 space-y-6">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
              >
                <Github className="w-5 h-5" />
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

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="w-12 h-12 rounded-full bg-muted/30 border border-border/50 hover:bg-primary/20 hover:border-primary/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="w-12 h-12 rounded-full bg-muted/30 border border-border/50 hover:bg-primary/20 hover:border-primary/50"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
