import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-display font-bold gradient-text mb-2">Saranya D</p>
            <p className="text-muted-foreground text-sm">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/saranya-d20", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/saranyaD-20", label: "GitHub" },
              { icon: Mail, href: "mailto:saranyad467@gmail.com", label: "Email" },
            ].map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* Made With Love */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
            <span>by Saranya D</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
