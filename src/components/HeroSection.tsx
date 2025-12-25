import { ArrowDown, Eye, Mail, Sparkles, MapPin, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-primary/20 rounded-2xl rotate-12 animate-float opacity-50" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border border-secondary/20 rounded-full animate-float opacity-50" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-primary font-medium">Open to Opportunities</span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 opacity-0 animate-fade-in-up leading-tight"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text relative">
                Saranya
                <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-yellow-400 animate-pulse" />
              </span>
            </h1>
            
            <div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-sm font-semibold text-foreground backdrop-blur-sm">
                AI & Data Science
              </span>
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 text-sm font-semibold text-foreground backdrop-blur-sm">
                Data Analyst
              </span>
            </div>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Passionate about leveraging <span className="text-primary font-medium">AI</span> and{" "}
              <span className="text-secondary font-medium">data science</span> to solve real-world problems.
              Transforming raw data into meaningful insights and intelligent solutions.
            </p>

            {/* Info Pills */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 text-sm text-muted-foreground opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Chennai, India
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary" />
                B.Tech 2022-2026
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <Button variant="gradient" size="lg" className="group relative overflow-hidden" asChild>
                <a href="#projects">
                  <span className="relative z-10 flex items-center">
                    <Eye className="mr-2 group-hover:scale-110 transition-transform" />
                    View Projects
                  </span>
                </a>
              </Button>
              <Button variant="neon" size="lg" className="group" asChild>
                <a href="/Saranya_Resume.pdf" download>
                  <Download className="mr-2 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="group border border-border/50 hover:border-primary/50" asChild>
                <a href="#contact">
                  <Mail className="mr-2 group-hover:rotate-12 transition-transform" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Tech Stack Pills */}
            <div
              className="flex flex-wrap gap-2 justify-center lg:justify-start mt-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <span className="text-xs text-muted-foreground mr-2">Tech Stack:</span>
              {["Python", "SQL", "Tableau", "Power BI", "Machine Learning"].map((item, index) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-md bg-muted/50 border border-border/50 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="flex-shrink-0 opacity-0 animate-scale-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl animate-pulse-glow" />
              
              {/* Rotating Border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow opacity-75" style={{ animationDuration: "8s" }} />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background">
                <img
                  src={profilePhoto}
                  alt="Saranya D - AI & Data Science Enthusiast"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-lg animate-float shadow-lg">
                <span className="text-xs font-semibold text-primary">🎓 AI & DS</span>
              </div>
              <div className="absolute -bottom-2 -left-4 glass-card px-3 py-2 rounded-lg animate-float shadow-lg" style={{ animationDelay: "1s" }}>
                <span className="text-xs font-semibold text-secondary">💻 Python</span>
              </div>
              <div className="absolute top-1/2 -right-8 glass-card px-3 py-2 rounded-lg animate-float shadow-lg" style={{ animationDelay: "2s" }}>
                <span className="text-xs font-semibold text-accent">📊 Analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
