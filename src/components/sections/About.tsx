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
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
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
              Crafting intelligent solutions at the intersection of technology and innovation
            </motion.p>
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
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
      text: "I'm a passionate full-stack developer and AI enthusiast from Rwanda, dedicated to crafting intelligent solutions that bridge the gap between cutting-edge technology and real-world impact. With expertise spanning web development, machine learning, and cybersecurity, I transform complex problems into elegant, scalable solutions.",
      img: "/innovation.jpeg",
    },
    {
      text: "My technical arsenal includes modern JavaScript frameworks (React, Next.js), robust backend technologies (Python, Django, Flask, Spring Boot), and mobile development with React Native. I'm continuously expanding my knowledge in AI/ML, computer vision, and LLM architectures to stay at the forefront of innovation.",
      img: "/codingAndSe.jpeg",
    },
    {
      text: "I've built 20+ production-ready projects including AI-powered chatbots leveraging RAG and vector databases, intelligent waste classification systems using computer vision, and full-stack e-commerce platforms. Each project reflects my commitment to clean code, user-centric design, and scalable architecture.",
      img: "/projects.jpeg",
    },
    {
      text: "Beyond coding, I'm an aspiring cybersecurity engineer and AI researcher, passionate about building secure systems and ethical AI solutions. I believe technology should empower communities and create positive change, which drives my work in educational platforms and sustainable tech initiatives.",
      img: "/Apakah goal Anda_.jpeg",
    },
    {
      text: "When I'm not coding, I'm competing in programming contests and CTF challenges, honing my problem-solving skills. I also mentor aspiring developers, sharing knowledge and fostering the next generation of tech talent. My interests extend to strategic games like chess and team sports, which keep me balanced and sharp.",
      img: "/lifeOutCoding.jpeg",
    },
    {
      text: "I'm always exploring new frontiers—from MLOps and DevOps automation to creative design with Adobe tools. My goal is to blend technical excellence with creative innovation, building solutions that are not just functional, but truly transformative.",
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
          className="flex flex-col group"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 2,
              transition: { duration: 0.4 }
            }}
            className="rounded-lg overflow-hidden border border-border bg-card shadow-sm mb-4 relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img
              src={item.img}
              alt={`About section ${i + 1}`}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
          <motion.p 
            className="text-sm text-muted-foreground leading-relaxed"
            whileHover={{ color: 'hsl(var(--foreground))' }}
            transition={{ duration: 0.2 }}
          >
            {item.text}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}