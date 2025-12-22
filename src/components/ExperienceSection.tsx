import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and hands-on learning
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 hover-lift relative">
            {/* Timeline dot */}
            <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)] hidden md:block" />

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  <Briefcase size={32} />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-display font-bold">Python Developer Intern</h3>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                    Internship
                  </span>
                </div>

                <p className="text-xl text-primary font-semibold mb-2">Innobyte Technologies</p>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Calendar size={16} />
                  <span>1 Month Duration</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Worked on Python-based development tasks and projects",
                    "Gained hands-on experience in real-world coding and problem-solving",
                    "Exposure to professional development workflows and best practices",
                    "Collaborated with team members on technical implementations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Future Experience Placeholder */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground italic">
              Currently seeking opportunities to expand my professional experience...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
