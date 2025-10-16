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
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
      category: 'web',
      github: '#',
      demo: 'https://shopsphere-frontend.vercel.app/',
    },
    {
      title: 'Waste Classifier',
      description: 'It is an AI model which is able to classify wastes in different categories using different algorithms like CV or image scanning!',
      tags: ['Python', 'Tensorflow', 'CV','YoloV8'],
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
      tags: ['Solidity', 'React', 'Web3.js'],
      category: 'web',
      github: 'https://github.com/Isaac-1-lang/Blockchain_Gaming',
      demo: '#',
    },
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
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="bg-gradient-hero bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-hero mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mt-4"
            >
              A selection from 20+ completed projects
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
                className={activeFilter === filter.id ? 'shadow-glow-primary' : 'hover:border-primary'}
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
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary hover:shadow-glow-primary transition-all"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
