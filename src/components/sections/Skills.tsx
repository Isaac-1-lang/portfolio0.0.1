import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'security', label: 'Security' },
    { id: 'embedded', label: 'Embedded' },
  ];

  const skills = [
    { name: 'React', category: 'frontend', level: 95 },
    { name: 'Next.js', category: 'frontend', level: 90 },
    { name: 'React Native', category: 'frontend', level: 85 },
    { name: 'Tailwind CSS', category: 'frontend', level: 95 },
    { name: 'Laravel', category: 'backend', level: 88 },
    { name: 'PHP', category: 'backend', level: 85 },
    { name: 'Django', category: 'backend', level: 82 },
    { name: 'Flask', category: 'backend', level: 80 },
    { name: 'Python', category: 'backend', level: 90 },
    { name: 'TensorFlow', category: 'ai-ml', level: 85 },
    { name: 'PyTorch', category: 'ai-ml', level: 83 },
    { name: 'Solidity', category: 'backend', level: 75 },
    { name: 'C++', category: 'backend', level: 80 },
    { name: 'Cryptography', category: 'security', level: 88 },
    { name: 'Arduino', category: 'embedded', level: 85 },
    { name: 'MicroPython', category: 'embedded', level: 80 },
    { name: 'Robotics', category: 'embedded', level: 82 },
    { name: 'Figma', category: 'frontend', level: 90 },
    { name: 'Blender', category: 'frontend', level: 75 },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
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
              Technical <span className="bg-gradient-hero bg-clip-text text-transparent">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-hero mx-auto rounded-full"
            />
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? 'shadow-glow-primary' : 'hover:border-primary'}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-glow-primary transition-all"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + index * 0.05, duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-hero rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
