import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'security', label: 'Security' },
    { id: 'embedded', label: 'Embedded' },
    { id: 'backend', label: 'Backend' },
  ];

  const projects = [
    {
      title: 'AI-Powered Chatbot Platform',
      description: 'Developed an intelligent chatbot using vector database and LLM API to answer questions and provide information about a specific platform',
      tags: ['Python', 'TensorFlow', 'React', 'Flask',"LLM API","RAG","Vector Database"],
      category: 'ai',
      github: 'https://github.com/Brainly-Code/Brainly-Code',
      demo: 'https://frontend-mdy5.onrender.com',
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Full-stack e-commerce platform with real-time analytics and inventory management.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind',"Google Maps","Spring boot","React Native"],
      category: 'web',
      github: '#',
      demo: 'https://shopsphere-frontend.vercel.app/',
    },
    {
      title: 'Waste Classifier',
      description: 'It is an AI model which is able to classify wastes in different categories using different algorithms like CV or image scanning!',
      tags: ['Python', 'Tensorflow', 'CV','YoloV8',"Pytorch","React Native","ReactJS"],
      category: 'ai',
      github: 'https://github.com/Isaac-1-lang/Waste_Classifier_Modal',
      demo: '#',
    },
    {
      title: 'Smart Iot Bin',
      description: 'IoT system for waste-sorting automation using Arduino and mobile app control to send notifications and data.',
      tags: ['Arduino', 'React Native', 'MQTT','Python','YoloV8','Vector embeddings'],
      category: 'embedded',
      github: '#',
      demo: '#',
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive tool to visualize and understand neural network architectures and training.',
      tags: ['PyTorch', 'React', 'D3.js'],
      category: 'ai',
      github: '#',
      demo: '#',
    },
    {
      title: 'Blockchain DApp',
      description: 'Decentralized application for secure transactions using Solidity and Web3.',
      tags: ['Solidity', 'React', 'Web3.js',"Smart Contracts"],
      category: 'web',
      github: 'https://github.com/Isaac-1-lang/Blockchain_Gaming',
      demo: '#',
    },
    {
      title: 'Blockchain Gaming DApp',
      description: 'Decentralized application for playing games but not completed but it will be able to allow people to play on different servers and make some transactions',
      tags: ['Solidity', 'React', 'Web3.js'],
      category: 'web',
      github: 'https://github.com/Isaac-1-lang/Blockchain_Gaming',
      demo: '#',
    },
    {
      title: 'Green IQ',
      description: 'It is a mobile app which will be able to create a smooth supply chain between house holders and recycling companies in collecting and recycling wastes',
      tags: ['React Native', 'ExpressJS', 'Tensorflow',"Google Maps"],
      category: 'web',
      github: 'https://github.com/Isaac-1-lang/Green-IQ',
      demo: '#',
    },
    {
      title: 'Ciphera',
      description: 'It is a web based app and browser-based extension which is used to prevent sending of sensitive data to LLMs which might cause breaching as lose digital confidentiality',
      tags: ['MERN Stack', 'Google Models',"LLM APIs"],
      category: 'web',
      github: 'https://github.com/Isaac-1-lang/ciphera-data-guard',
      demo: 'ciphera.onrender.com',
    },
    {
      title: 'YoloV8-Fine-Tuned',
      description: 'It is a fine-tuned version of YoloV8 model which is able to detect more than 100 types of wastes including plastics, metals, papers etc',
      tags: ['YoloV8', 'Tensorflow',"Python","CV"],
      category: 'web',
      github: 'https://github.com/Isaac-1-lang/ciphera-data-guard',
      demo: 'ciphera.onrender.com',
    },
    {
      title: 'BrainBridge',
      description: 'It is a platform which is able to connect students with mentors and tutors and help them with their studies and projects',
      tags: ['Spring Boot', 'ReactJS',"Spring Security","PostgreSQL"],
      category: 'web',
      github: 'https://github.com/Isaac-1-lang/BrainBridge_V2',
      demo: 'https://brainbridge.onrender.com',
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
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
              Featured <span className="bg-gradient-hero bg-clip-text text-transparent">Projects</span>
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
              className="text-muted-foreground mt-4 text-lg"
            >
              A curated selection from 20+ completed projects showcasing innovation and technical excellence
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? 'shadow-sm' : 'hover:border-primary'}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  y: -12,
                  rotateY: 5,
                  rotateX: 2,
                  transition: { duration: 0.3 }
                }}
                className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="p-6 relative z-10">
                  <motion.h3 
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          backgroundColor: 'hsl(var(--primary))',
                          color: 'hsl(var(--primary-foreground))',
                          borderColor: 'hsl(var(--primary))'
                        }}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2 border-t border-border/50">
                    <motion.a
                      href={project.github}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors font-medium"
                    >
                      <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors font-medium"
                    >
                      <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://github.com/Isaac-1-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
            >
              <Github className="h-4 w-4" />
              More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
