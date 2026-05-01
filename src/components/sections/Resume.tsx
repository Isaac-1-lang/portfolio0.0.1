import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Brain, Server, Layout } from 'lucide-react';

type ResumeItem = {
  icon: typeof Brain;
  title: string;
  description: string;
  downloadUrl: string;
  color: string;
  bgColor: string;
};

const resumes: ResumeItem[] = [
  {
    icon: Brain,
    title: 'AI/ML Engineer',
    description: 'Specialized in machine learning, deep learning, LLMs, and computer vision',
    downloadUrl: 'PLACEHOLDER_AI_ML_RESUME_URL',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10 hover:bg-purple-500/20',
  },
  {
    icon: Server,
    title: 'Backend Developer',
    description: 'Expert in Python, Node.js, Django, Laravel, and scalable API design',
    downloadUrl: 'PLACEHOLDER_BACKEND_RESUME_URL',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10 hover:bg-green-500/20',
  },
  {
    icon: Layout,
    title: 'Frontend Developer',
    description: 'Proficient in React, Next.js, TypeScript, and modern UI/UX',
    downloadUrl: 'PLACEHOLDER_FRONTEND_RESUME_URL',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10 hover:bg-blue-500/20',
  },
];

const cv = {
  icon: FileText,
  title: 'Complete CV',
  description: 'Full curriculum vitae with all experience, education, and achievements',
  downloadUrl: 'PLACEHOLDER_CV_URL',
  color: 'text-orange-500',
  bgColor: 'bg-orange-500/10 hover:bg-orange-500/20',
};

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleDownload = (url: string, title: string) => {
    if (url.startsWith('PLACEHOLDER')) {
      alert(`${title} will be available soon!`);
      return;
    }
    window.open(url, '_blank');
  };

  return (
    <section id="resume" className="py-20 md:py-32 relative bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Resume & <span className="bg-gradient-hero bg-clip-text text-transparent">CV</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-xl mx-auto mb-4"
          >
            Download my tailored resumes for different roles, or grab the complete CV
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-hero mx-auto rounded-full"
          />
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {resumes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all group cursor-pointer"
              onClick={() => handleDownload(item.downloadUrl, item.title)}
            >
              <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4 transition-colors`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          whileHover={{ y: -6 }}
          className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all group cursor-pointer"
          onClick={() => handleDownload(cv.downloadUrl, cv.title)}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className={`w-14 h-14 rounded-lg ${cv.bgColor} flex items-center justify-center transition-colors flex-shrink-0`}>
              <cv.icon className={`w-7 h-7 ${cv.color}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {cv.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cv.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Resume;
