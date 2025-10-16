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
      description: 'Expert in React, Next.js, Laravel, Django, and modern mobile technologies',
    },
    {
      icon: Brain,
      title: 'AI/ML Research',
      description: 'Specializing in TensorFlow, PyTorch,CV,CNN,RAG and LLM architectures',
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

          {/* Story + Images */}
          <StoryWithPreview isInView={isInView} />

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
 
function StoryWithPreview({ isInView }: { isInView: boolean }) {
  const items = [
    {
      text: "Junior full-stack developer and AI enthusiast from Rwanda, passionate about creating intelligent solutions for education and daily life.",
      img: "/innovation.jpeg",
    },
    {
      text: "Working with JavaScript, React, Node.js, Python, Django, and React Native. Currently exploring ML, AI, and C++ systems programming.",
      img: "/codingAndSe.jpeg",
    },
    {
      text: "Built AI assistants, waste classification systems, and e-commerce platforms focused on learning and community impact.",
      img: "/projects.jpeg",
    },
    {
      text: "Aspiring cybersecurity engineer and AI researcher, building tools that empower people to learn and create responsibly.",
      img: "/Apakah goal Anda_.jpeg",
    },
    {
      text: "Active in competitive programming and CTF competitions. Enjoy public speaking, chess, football, and strategic problem-solving.",
      img: "/lifeOutCoding.jpeg",
    },
    {
      text: "Mentor aspiring developers, explore ML training and DevOps, and blend technical skills with creative design using Adobe tools.",
      img: "/innovation.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="flex flex-col"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-lg overflow-hidden border border-border bg-card shadow-sm mb-3"
          >
            <img
              src={item.img}
              alt={`About section ${i + 1}`}
              className="w-full h-48 object-cover"
            />
          </motion.div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}