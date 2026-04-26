import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Uday029" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/udayveer-singh-chaudhary-a706b928a/" },
  { icon: Mail, href: "mailto:udaychaudhary0029@gmail.com" },
];

const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        Designed and Developed by Udayveer Singh Chaudhary
      </p>
      <p className="text-sm text-muted-foreground font-mono">
        Copyright © {new Date().getFullYear()} UC
      </p>
      <div className="flex gap-4">
        {socialLinks.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
