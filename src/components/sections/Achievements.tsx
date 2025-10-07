import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Award, Target } from 'lucide-react';

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      year: '2025',
      icon: Trophy,
      title: 'PicoCTF 2025 Participant',
      description: 'Competed in one of the world\'s largest cybersecurity capture-the-flag competitions.',
      color: 'text-accent',
    },
    {
      year: '2024',
      icon: Medal,
      title: 'E_15TH iCONIC Contest',
      description: 'Showcased innovative solutions in embedded systems and IoT development.',
      color: 'text-primary',
    },
    {
      year: '2024',
      icon: Award,
      title: 'AIMS Mathematics Challenge',
      description: 'Competed in advanced mathematics and problem-solving competitions.',
      color: 'text-accent-variant',
    },
    {
      year: '2023-Present',
      icon: Target,
      title: '20+ Projects Completed',
      description: 'Delivered diverse projects across AI/ML, cybersecurity, and full-stack development.',
      color: 'text-primary',
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Achievements & <span className="bg-gradient-hero bg-clip-text text-transparent">Recognition</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-hero mx-auto rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center ${achievement.color}`}
                  >
                    <achievement.icon className="h-8 w-8" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-glow-primary transition-all">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < achievements.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
