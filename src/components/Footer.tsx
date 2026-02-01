import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/TAYVR', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tayvr', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mahditayar.25@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              ET.
            </motion.span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Elmahdi Tayar. {t('footer.builtWith')}{' '}
              <Heart size={14} className="text-destructive" fill="currentColor" />
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
