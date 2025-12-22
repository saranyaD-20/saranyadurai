import { ArrowDown, Eye, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="text-primary font-semibold mb-4 tracking-wider uppercase opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Hello, I'm
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <span className="gradient-text">Saranya D</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-light opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              Artificial Intelligence & Data Science Enthusiast
              <br />
              <span className="text-secondary">Aspiring Data Analyst</span>
            </p>
            <p
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Passionate about leveraging AI and data science to solve real-world problems.
              Transforming raw data into meaningful insights and intelligent solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <Button variant="gradient" size="lg" asChild>
                <a href="#projects">
                  <Eye className="mr-2" />
                  View Projects
                </a>
              </Button>
              <Button variant="neon" size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Quick Highlights */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mt-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              {["AI & Data Science", "Data Analytics", "Python Developer"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground"
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
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
                <img
                  src={profilePhoto}
                  alt="Saranya D - AI & Data Science Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
