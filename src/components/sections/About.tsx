import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Shield, Cpu } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in React, Next.js, Laravel, Django, and modern web technologies',
    },
    {
      icon: Brain,
      title: 'AI/ML Research',
      description: 'Specializing in TensorFlow, PyTorch, and neural network architectures',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Focused on cryptography and secure system design',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Arduino, robotics, and MicroPython for IoT solutions',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
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
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-hero mx-auto rounded-full"
            />
          </div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate full-stack developer and tech innovator from Rwanda Coding Academy. 
              My journey in technology spans over 2 years, during which I've completed more than 20 projects 
              across diverse domains including AI/ML, cybersecurity, and embedded systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm an active participant in competitive programming and cybersecurity challenges 
              like PicoCTF 2025 and E_15TH iCONIC contest. I also enjoy public speaking, solving puzzles, 
              playing chess and football, with creative skills in Figma, Blender, and Adobe tools.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-glow-primary transition-all"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
