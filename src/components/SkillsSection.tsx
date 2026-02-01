import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Cloud,
  Layers,
  Palette,
  Terminal,
  Globe
} from 'lucide-react';

const techLogos = [
  { name: 'HTML5', icon: Code },
  { name: 'CSS3', icon: Palette },
  { name: 'JavaScript', icon: Terminal },
  { name: 'React', icon: Layers },
  { name: 'Laravel', icon: Server },
  { name: 'Node.js', icon: Globe },
];

export const SkillsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      icon: Palette,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'Next.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'TypeScript', level: 88 },
      ],
    },
    {
      title: t('skills.categories.backend'),
      icon: Server,
      skills: [
        { name: 'Laravel', level: 95 },
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 82 },
        { name: 'Django', level: 75 },
        { name: 'PHP', level: 92 },
      ],
    },
    {
      title: t('skills.categories.database'),
      icon: Database,
      skills: [
        { name: 'MySQL', level: 92 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL Server', level: 78 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: t('skills.categories.devops'),
      icon: Cloud,
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'VPS Hosting', level: 88 },
        { name: 'Linux', level: 82 },
        { name: 'CI/CD', level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            {t('skills.tag')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('skills.title')} <span className="text-gradient">{t('skills.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <tech.icon size={32} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
