import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Brain, Shield, Cpu,
  Gamepad2, Crown, Music2, BookOpen,
  Dumbbell, Trophy, Rocket, Globe,
  ArrowRight, MapPin, GraduationCap, Flame,
} from 'lucide-react';

const hobbies = [
  { icon:Crown,     label: 'Chess',            color: 'text-amber-500',  bg: 'bg-amber-500/10' },
  { icon: Gamepad2,  label: 'Gaming',            color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { icon: Trophy,    label: 'CTF Challenges',    color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { icon: BookOpen,  label: 'Reading',           color: 'text-sky-500',    bg: 'bg-sky-500/10'    },
  { icon: Music2,    label: 'Music',             color: 'text-pink-500',   bg: 'bg-pink-500/10'   },
  { icon: Dumbbell,  label: 'Fitness',           color: 'text-green-500',  bg: 'bg-green-500/10'  },
  { icon: Globe,     label: 'Open Source',       color: 'text-blue-500',   bg: 'bg-blue-500/10'   },
  { icon: Globe,    label: 'Building Projects', color: 'text-orange-500', bg: 'bg-orange-500/10' },
];

const roadmap = [
  {
    icon: GraduationCap,
    year: '2024',
    title: 'Started at Rwanda Coding Academy',
    desc: 'Dived into software engineering, embedded systems & competitive programming.',
    done: true,
  },
  {
    icon: Code2,
    year: '2025',
    title: 'Full-Stack & AI Projects',
    desc: 'Built 10+ projects spanning React, Django, and computer vision.',
    done: true,
  },
  {
    icon: Shield,
    year: '2024',
    title: 'Cybersecurity & LLMs',
    desc: 'Explored cryptography, RAG pipelines, and LLM fine-tuning.',
    done: true,
  },
  {
    icon: Brain,
    year: '2025',
    title: 'AI Research & MLOps',
    desc: 'Focusing on production AI systems, model deployment, and research.',
    done: true,
  },
  {
    icon: Flame,
    year: '2026+',
    title: 'Global Impact',
    desc: 'Building scalable products that solve real problems across Africa and beyond.',
    done: false,
  },
];

const pillars = [
  { icon: Code2,   label: 'Full-Stack Dev',   sub: 'React · Django · Laravel' },
  { icon: Brain,   label: 'AI / ML',          sub: 'PyTorch · LLMs · CV'      },
  { icon: Shield,  label: 'Cybersecurity',    sub: 'Crypto · CTF · Secure Design' },
  { icon: Cpu,     label: 'Embedded Systems', sub: 'Arduino · IoT · MicroPython'  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
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
            animate={isInView ? { width: '120px' } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-hero mx-auto rounded-full"
          />
        </div>

        {/* Bio + Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-10 mb-16 items-center"
        >
          {/* Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Rwanda Coding Academy, Rwanda</span>
            </div>
            <p className="text-lg leading-relaxed">
              Hey, I'm <span className="text-primary font-semibold">Isaac</span> ,a senior software Engineer and AI enthusiast who loves turning complex problems into clean, working software.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I build across the stack: web apps,mobile apps, AI models, embedded systems, and everything in between. I care about code quality, real-world impact, and shipping things that actually work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of code, you'll find me playing chess, grinding CTF challenges, or mentoring fellow devs.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-sm">{p.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{p.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            Life Beyond <span className="bg-gradient-hero bg-clip-text text-transparent">the Screen</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {hobbies.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.07 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-border ${h.bg} cursor-default transition-all`}
              >
                <h.icon className={`w-4 h-4 ${h.color}`} />
                <span className="text-sm font-medium">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-center">
            My <span className="bg-gradient-hero bg-clip-text text-transparent">Journey</span>
          </h3>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2" />

            <div className="space-y-8">
              {roadmap.map((step, i) => {
                const isRight = i % 2 === 0;
                return (
                  <motion.div
                    key={step.year}
                    initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.12 }}
                    className={`relative flex items-start gap-4 md:gap-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Card */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isRight ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <div className={`bg-card border rounded-xl p-4 hover:border-primary transition-all ${step.done ? 'border-border' : 'border-primary/40'}`}>
                        <div className={`flex items-center gap-2 mb-1 ${isRight ? 'md:justify-end' : ''}`}>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${step.done ? 'bg-primary/10 text-primary' : 'bg-orange-500/10 text-orange-500'}`}>
                            {step.year}
                          </span>
                          {!step.done && <ArrowRight className="w-3 h-3 text-orange-500" />}
                        </div>
                        <p className="font-semibold text-sm">{step.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-background z-10"
                      style={{ borderColor: step.done ? 'hsl(var(--primary))' : '#f97316' }}>
                      <step.icon className={`w-2.5 h-2.5 ${step.done ? 'text-primary' : 'text-orange-500'}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
