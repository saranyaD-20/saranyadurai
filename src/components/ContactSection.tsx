import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saranyad467@gmail.com",
    href: "mailto:saranyad467@gmail.com",
    color: "primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7358384906",
    href: "tel:+917358384906",
    color: "secondary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/saranya-d20",
    href: "https://linkedin.com/in/saranya-d20",
    color: "accent",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/saranyaD-20",
    href: "https://github.com/saranyaD-20",
    color: "neon-pink",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/25 to-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/25 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-float">
        <MessageSquare size={40} className="text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-16 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles size={36} className="text-secondary" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <MessageSquare size={16} className="text-secondary" />
            <span className="text-sm text-secondary font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold">Saranya D</h3>
                  <p className="text-muted-foreground">B.Tech - AI & Data Science</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                Currently seeking opportunities to apply my skills in AI, Data Science,
                and Analytics. Open to internships, collaborations, and full-time positions.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card p-4 flex items-center gap-4 hover-lift group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                      item.color === "primary" ? "bg-gradient-to-r from-primary/10 to-transparent" :
                      item.color === "secondary" ? "bg-gradient-to-r from-secondary/10 to-transparent" :
                      item.color === "accent" ? "bg-gradient-to-r from-accent/10 to-transparent" :
                      "bg-gradient-to-r from-neon-pink/10 to-transparent"
                    }`} />
                    <div
                      className={`p-3 rounded-xl transition-all shadow-lg relative z-10 ${
                        item.color === "primary"
                          ? "bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]"
                          : item.color === "secondary"
                          ? "bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary group-hover:shadow-[0_0_25px_hsl(var(--secondary)/0.5)]"
                          : item.color === "accent"
                          ? "bg-gradient-to-br from-accent/20 to-accent/5 text-accent group-hover:shadow-[0_0_25px_hsl(var(--accent)/0.5)]"
                          : "bg-gradient-to-br from-neon-pink/20 to-neon-pink/5 text-neon-pink group-hover:shadow-[0_0_25px_hsl(var(--neon-pink)/0.5)]"
                      }`}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className={`font-medium transition-colors ${
                        item.color === "primary" ? "text-foreground group-hover:text-primary" :
                        item.color === "secondary" ? "text-foreground group-hover:text-secondary" :
                        item.color === "accent" ? "text-foreground group-hover:text-accent" :
                        "text-foreground group-hover:text-neon-pink"
                      }`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Send size={24} className="text-primary" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-primary/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-primary/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none hover:border-primary/50"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full group/btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
