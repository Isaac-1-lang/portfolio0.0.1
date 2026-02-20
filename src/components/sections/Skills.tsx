import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code2, Server, Brain, Shield, Cpu, Palette, Hexagon, Cloud, ExternalLink, Award } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: null },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'ai-ml', label: 'AI/ML', icon: Brain },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'embedded', label: 'Embedded', icon: Cpu },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'blockchain', label: 'Blockchain', icon: Hexagon },
    { id: 'devops', label: 'DevOps', icon: Cloud },
  ];

  const skills = [
    {name:"Spring Framework",category:'backend',level:20,color: 'from-blue-500 to-cyan-500',link:"https://spring.io/"},
    {name:"Rust",category:'backend',level:5,color: 'from-blue-500 to-cyan-500',link:"https://rust/"},
    { name: 'React', category: 'frontend', level: 60, color: 'from-blue-500 to-cyan-500', link: 'https://react.dev/', cert: '' },
    { name: 'Next.js', category: 'frontend', level: 30, color: 'from-blue-500 to-cyan-500', link: 'https://nextjs.org/', cert: '' },
    { name: 'React Native', category: 'frontend', level: 85, color: 'from-blue-500 to-cyan-500', link: 'https://reactnative.dev/', cert: '' },
    { name: 'Tailwind CSS', category: 'frontend', level: 85, color: 'from-blue-500 to-cyan-500', link: 'https://tailwindcss.com/', cert: '' },
    { name: 'Bootstrap', category: 'frontend', level: 75, color: 'from-blue-500 to-cyan-500', link: 'https://getbootstrap.com/', cert: '' },
    { name: 'Material UI', category: 'frontend', level: 40, color: 'from-blue-500 to-cyan-500', link: 'https://mui.com/', cert: '' },
    { name: 'Bulma', category: 'frontend', level: 40, color: 'from-blue-500 to-cyan-500', link: 'https://chakra-ui.com/', cert: '' },
    { name: 'Materialize', category: 'frontend', level: 40, color: 'from-blue-500 to-cyan-500', link: 'https://mui.com/', cert: '' },
    { name: 'Laravel', category: 'backend', level: 50, color: 'from-red-500 to-orange-500', link: 'https://laravel.com/', cert: '' },
    { name: 'PHP', category: 'backend', level: 85, color: 'from-red-500 to-orange-500', link: 'https://www.php.net/', cert: '' },
    { name: 'Django', category: 'backend', level: 32, color: 'from-green-500 to-emerald-500', link: 'https://www.djangoproject.com/', cert: '' },
    { name: 'Flask', category: 'backend', level: 65, color: 'from-green-500 to-emerald-500', link: 'https://flask.palletsprojects.com/', cert: '' },
    { name: 'Python', category: 'backend', level: 90, color: 'from-green-500 to-emerald-500', link: 'https://www.python.org/', cert: '' },
    { name: 'C++', category: 'backend', level: 50, color: 'from-purple-500 to-pink-500', link: 'https://isocpp.org/', cert: '' },
    { name: 'TensorFlow', category: 'ai-ml', level: 85, color: 'from-orange-500 to-yellow-500', link: 'https://www.tensorflow.org/', cert: '' },
    { name: 'PyTorch', category: 'ai-ml', level: 53, color: 'from-orange-500 to-yellow-500', link: 'https://pytorch.org/', cert: '' },
    { name: 'Computer Vision', category: 'ai-ml', level: 80, color: 'from-orange-500 to-yellow-500', link: 'https://opencv.org/', cert: '' },
    { name: 'CNN', category: 'ai-ml', level: 45, color: 'from-orange-500 to-yellow-500', link: '', cert: '' },
    { name: 'RAG', category: 'ai-ml', level: 40, color: 'from-orange-500 to-yellow-500', link: '', cert: '' },
    { name: 'LLM', category: 'ai-ml', level: 23, color: 'from-orange-500 to-yellow-500', link: '', cert: '' },
    { name: 'AI Engineering', category: 'ai-ml', level: 60, color: 'from-orange-500 to-yellow-500', link: '', cert: '' },
    { name: 'Cryptography', category: 'security', level: 78, color: 'from-red-500 to-pink-500', link: '', cert: '' },
    { name: 'Penetration Testing', category: 'security', level: 50, color: 'from-red-500 to-pink-500', link: 'https://www.offensive-security.com/', cert: '' },
    { name: 'Ethical Hacking', category: 'security', level: 75, color: 'from-red-500 to-pink-500', link: '', cert: '' },
    { name: 'Network Security', category: 'security', level: 70, color: 'from-red-500 to-pink-500', link: '', cert: '' },
    { name: 'Web Security', category: 'security', level: 65, color: 'from-red-500 to-pink-500', link: 'https://owasp.org/', cert: '' },
    { name: 'Mobile Security', category: 'security', level: 60, color: 'from-red-500 to-pink-500', link: '', cert: '' },
    { name: 'Cloud Security', category: 'security', level: 25, color: 'from-red-500 to-pink-500', link: '', cert: '' },
    { name: 'Arduino', category: 'embedded', level: 85, color: 'from-teal-500 to-cyan-500', link: 'https://www.arduino.cc/', cert: '' },
    { name: 'MicroPython', category: 'embedded', level: 40, color: 'from-teal-500 to-cyan-500', link: 'https://micropython.org/', cert: '' },
    { name: 'Robotics', category: 'embedded', level: 82, color: 'from-teal-500 to-cyan-500', link: '', cert: '' },
    { name: 'Figma', category: 'design', level: 90, color: 'from-purple-500 to-indigo-500', link: 'https://www.figma.com/', cert: '' },
    { name: 'Blender', category: 'design', level: 35, color: 'from-purple-500 to-indigo-500', link: 'https://www.blender.org/', cert: '' },
    { name: 'Photoshop', category: 'design', level: 70, color: 'from-purple-500 to-indigo-500', link: 'https://www.adobe.com/products/photoshop.html', cert: '' },
    { name: 'Illustrator', category: 'design', level: 65, color: 'from-purple-500 to-indigo-500', link: 'https://www.adobe.com/products/illustrator.html', cert: '' },
    { name: 'InDesign', category: 'design', level: 60, color: 'from-purple-500 to-indigo-500', link: 'https://www.adobe.com/products/indesign.html', cert: '' },
    { name: 'Canva', category: 'design', level: 80, color: 'from-purple-500 to-indigo-500', link: 'https://www.canva.com/', cert: '' },
    { name: 'Solidity', category: 'blockchain', level: 45, color: 'from-indigo-500 to-blue-500', link: 'https://soliditylang.org/', cert: '' },
    { name: 'Docker', category: 'devops', level: 45, color: 'from-sky-500 to-blue-500', link: 'https://www.docker.com/', cert: '' },
    { name: 'Kubernetes', category: 'devops', level: 40, color: 'from-sky-500 to-blue-500', link: 'https://kubernetes.io/', cert: '' },
    { name: 'CI/CD', category: 'devops', level: 35, color: 'from-sky-500 to-blue-500', link: '', cert: '' },
    { name: 'Linux', category: 'devops', level: 80, color: 'from-sky-500 to-blue-500', link: 'https://www.kernel.org/', cert: '' },
    { name: 'AWS', category: 'devops', level: 30, color: 'from-sky-500 to-blue-500', link: 'https://aws.amazon.com/', cert: '' },
    { name:"MLOps", category: 'ai-ml', level: 30, color: 'from-sky-500 to-blue-500', link: '', cert: '' },
    { name:"Git", category: 'devops', level: 85, color: 'from-sky-500 to-blue-500', link: 'https://git-scm.com/', cert: '' },
    { name:"GitHub", category: 'devops', level: 95, color: 'from-sky-500 to-blue-500', link: 'https://github.com/', cert: '' },
    { name:"GitLab", category: 'devops', level: 30, color: 'from-sky-500 to-blue-500', link: 'https://gitlab.com/', cert: '' },
    { name:"Automation", category: 'devops', level: 30, color: 'from-sky-500 to-blue-500', link: '', cert: '' },
    { name:"Testing", category: 'devops', level: 30, color: 'from-sky-500 to-blue-500', link: '', cert: '' },

  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillLevel = (level: number) => {
    if (level >= 80) return 'Expert';
    if (level >= 60) return 'Advanced';
    if (level >= 40) return 'Intermediate';
    return 'Learning';
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              Technical <span className="bg-gradient-hero bg-clip-text text-transparent">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-hero mx-auto rounded-full mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              A comprehensive toolkit spanning full-stack development, AI/ML, cybersecurity, and beyond
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category.id)}
                  className={`${activeCategory === category.id ? 'shadow-sm' : 'hover:border-primary'} gap-2`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {category.label}
                </Button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 3,
                  transition: { duration: 0.3 }
                }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all group relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Subtle background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <motion.h3 
                          className="font-semibold text-base group-hover:text-primary transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill.name}
                        </motion.h3>
                        {skill.link && (
                          <motion.a
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ rotate: 15, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="h-3.5 w-3.5 text-primary" />
                          </motion.a>
                        )}
                        {skill.cert && (
                          <motion.a
                            href={skill.cert}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ rotate: 15, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Award className="h-3.5 w-3.5 text-yellow-500" />
                          </motion.a>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors">{getSkillLevel(skill.level)}</span>
                    </div>
                    <motion.span 
                      className="text-sm text-primary font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="relative h-2.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.03, duration: 0.8, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full shadow-sm group-hover:shadow-md transition-shadow`}
                    >
                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              Showing <span className="text-primary font-semibold">{filteredSkills.length}</span> skills
              {activeCategory !== 'all' && (
                <span> in <span className="text-primary font-semibold">
                  {categories.find(c => c.id === activeCategory)?.label}
                </span></span>
              )}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}