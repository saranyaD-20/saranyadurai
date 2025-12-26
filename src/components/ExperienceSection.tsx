import { Briefcase, Calendar, CheckCircle2, Star, Rocket, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_0%,hsl(var(--background))_70%)]" />
      
      {/* Gradient Orbs - Enhanced */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-gradient-to-br from-secondary/30 via-primary/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-primary/30 via-accent/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-gradient-to-br from-accent/20 to-secondary/10 rounded-full blur-3xl opacity-60" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-accent/30 rounded-full animate-float"
          style={{
            left: `${20 + i * 12}%`,
            top: `${25 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-float">
        <Star size={32} className="text-secondary" />
      </div>
      <div className="absolute bottom-1/3 left-16 opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>
        <Rocket size={36} className="text-primary" />
      </div>
      <div className="absolute top-1/2 right-1/3 opacity-15 animate-float" style={{ animationDelay: "2s" }}>
        <Award size={28} className="text-accent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm shadow-[0_0_20px_hsl(var(--accent)/0.2)]">
            <Briefcase size={16} className="text-accent" />
            <span className="text-sm text-accent font-medium">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and hands-on learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            <div className="glass-card p-8 hover-lift relative group overflow-hidden ml-0 md:ml-16">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Timeline dot */}
              <div className="absolute -left-[4.5rem] top-8 hidden md:flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_30px_hsl(var(--primary)/0.5)] flex items-center justify-center">
                  <Briefcase size={14} className="text-primary-foreground" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)] group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-shadow">
                    <Briefcase size={32} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">Python Developer Intern</h3>
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary text-sm font-medium border border-secondary/20">
                      Internship
                    </span>
                  </div>

                  <p className="text-xl text-primary font-semibold mb-2">Innobyte Technologies</p>

                  <div className="inline-flex items-center gap-2 text-muted-foreground mb-6 px-3 py-1.5 rounded-full bg-muted/30">
                    <Calendar size={16} />
                    <span>1 Month Duration</span>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Worked on Python-based development tasks and projects",
                      "Gained hands-on experience in real-world coding and problem-solving",
                      "Exposure to professional development workflows and best practices",
                      "Collaborated with team members on technical implementations",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 group/item">
                        <div className="p-1 rounded-full bg-accent/10 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Experience Placeholder */}
          <div className="mt-12 text-center">
            <div className="glass-card inline-flex items-center gap-3 px-6 py-4 mx-auto">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <p className="text-muted-foreground italic">
                Currently seeking opportunities to expand my professional experience...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
