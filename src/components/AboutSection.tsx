import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, Code2, Rocket } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: t('about.stats.yearsExperience'), value: '5+' },
    { label: t('about.stats.projectsCompleted'), value: '20+' },
    { label: t('about.stats.technologies'), value: '15+' },
    { label: t('about.stats.happyClients'), value: '30+' },
  ];

  const highlights = [
    {
      icon: Code2,
      title: t('about.highlights.cleanArchitecture.title'),
      description: t('about.highlights.cleanArchitecture.description'),
    },
    {
      icon: Rocket,
      title: t('about.highlights.performanceFirst.title'),
      description: t('about.highlights.performanceFirst.description'),
    },
    {
      icon: Briefcase,
      title: t('about.highlights.businessFocus.title'),
      description: t('about.highlights.businessFocus.description'),
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {t('about.tag')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}{' '}
              <span className="text-gradient">{t('about.titleHighlight')}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                {t('about.intro')}{' '}
                <span className="text-foreground inline-flex items-center gap-1">
                  <MapPin size={16} className="text-primary" /> {t('about.location')}
                </span>
                {t('about.introEnd')}
              </p>
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-2xl border border-border hover:border-primary/50 bg-card/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Code Block Decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 rounded-2xl bg-secondary/50 border border-border font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <code className="text-muted-foreground">
                <span className="text-primary">const</span> developer = {'{'}
                <br />
                <span className="ps-4">name:</span> <span className="text-green-400">"Elmahdi Tayar"</span>,
                <br />
                <span className="ps-4">role:</span> <span className="text-green-400">"Full-Stack Dev"</span>,
                <br />
                <span className="ps-4">passion:</span> <span className="text-green-400">"Building great products"</span>
                <br />
                {'}'};
              </code>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
