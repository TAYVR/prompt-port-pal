import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronRight, Globe, ShoppingCart, Building2, Car, Plane, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'MasterFut',
      subtitle: t('projects.items.masterfut.subtitle'),
      description: t('projects.items.masterfut.description'),
      icon: ShoppingCart,
      link: 'https://masterfut.com',
      tech: ['Laravel', 'React.js', 'MySQL', 'Stripe', 'PayPal'],
      features: [
        t('projects.features.10Languages'),
        t('projects.features.multiplePaymentGateways'),
        t('projects.features.adminDashboard'),
        t('projects.features.highTrafficOptimization'),
      ],
      color: 'from-green-500/20 to-emerald-500/20',
      accentColor: 'text-green-400',
    },
    {
      id: 2,
      title: 'Ka3ba',
      subtitle: t('projects.items.ka3ba.subtitle'),
      description: t('projects.items.ka3ba.description'),
      icon: Plane,
      link: 'https://ka3ba.com',
      tech: ['Next.js', 'React.js', 'Laravel', 'MySQL'],
      features: [
        t('projects.features.quoteManagement'),
        t('projects.features.accountingSystem'),
        t('projects.features.supplierManagement'),
        t('projects.features.programPlanning'),
      ],
      color: 'from-amber-500/20 to-orange-500/20',
      accentColor: 'text-amber-400',
    },
    {
      id: 3,
      title: 'Almoulate Immobilier',
      subtitle: t('projects.items.almoulate.subtitle'),
      description: t('projects.items.almoulate.description'),
      icon: Building2,
      link: null,
      tech: ['Laravel', 'Livewire', 'Bootstrap', 'MySQL'],
      features: [
        t('projects.features.financialTransactions'),
        t('projects.features.projectManagement'),
        t('projects.features.hrModule'),
        t('projects.features.analyticsReports'),
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-blue-400',
    },
    {
      id: 4,
      title: 'AliGarage',
      subtitle: t('projects.items.aligarage.subtitle'),
      description: t('projects.items.aligarage.description'),
      icon: Car,
      link: null,
      tech: ['Vue.js', 'Laravel', 'SQL Server', 'Bootstrap'],
      features: [
        t('projects.features.stockManagement'),
        t('projects.features.serviceHistory'),
        t('projects.features.posSystem'),
        t('projects.features.profitTracking'),
      ],
      color: 'from-purple-500/20 to-pink-500/20',
      accentColor: 'text-purple-400',
    },
    {
      id: 5,
      title: 'SmileBusiness',
      subtitle: t('projects.items.smilebusiness.subtitle'),
      description: t('projects.items.smilebusiness.description'),
      icon: Globe,
      link: 'https://smilebusiness.ma',
      tech: ['Laravel', 'Bootstrap', 'MySQL', 'CMS'],
      features: [
        t('projects.features.clientQuotations'),
        t('projects.features.quoteManagement'),
        t('projects.features.cmsDashboard'),
        t('projects.features.productCatalog'),
      ],
      color: 'from-teal-500/20 to-cyan-500/20',
      accentColor: 'text-teal-400',
    },
    {
      id: 6,
      title: 'SchoolSystem',
      subtitle: t('projects.items.schoolsystem.subtitle'),
      description: t('projects.items.schoolsystem.description'),
      icon: GraduationCap,
      link: null,
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'REST API'],
      features: [
        t('projects.features.multiPortalAccess'),
        t('projects.features.attendanceTracking'),
        t('projects.features.lmsIntegration'),
        t('projects.features.feeManagement'),
      ],
      color: 'from-rose-500/20 to-red-500/20',
      accentColor: 'text-rose-400',
    },
  ];

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            {t('projects.tag')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className={`h-full p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 ${
                hoveredId === project.id ? 'shadow-lg shadow-primary/10' : ''
              }`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-secondary/50 ${project.accentColor}`}>
                      <project.icon size={24} />
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className={`text-sm font-medium mb-3 ${project.accentColor}`}>
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-border hover:border-primary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group"
            asChild
          >
            <a href="https://github.com/TAYVR" target="_blank" rel="noopener noreferrer">
              {t('projects.viewMoreOnGithub')}
              <ChevronRight size={18} className="ms-2 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
