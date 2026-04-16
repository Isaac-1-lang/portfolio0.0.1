import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'RWAGAJU Aphoridice',
    role: 'Instructor at Rwanda Coding Academy',
    avatar: '/legend.png',
    quote:
      'Isaac demonstrated exceptional problem-solving skills during the e_15th Iconic contest. His ability to connect ideas and deliver under pressure is truly remarkable.',
  },
  {
    name: 'BAZIRAMWABO Gabriel',
    role: 'Instructor at Rwanda Coding Academy',
    avatar: '/logo.png',
    quote:
      'Working with Isaac on AI/ML and Embedded Systems projects was a pleasure. He grasps complex concepts quickly and applies them with precision.',
  },
  {
    name: 'Aime Mellevieux',
    role: 'CEO, Brightforth LTD',
    avatar: '/chrysostom.png',
    quote:
      'Isaac delivered WorkConnect and Intego Office beyond our expectations. Professional, reliable, and always open to feedback — a true asset to any project.',
  },
  {
    name: 'IZERE Joshua',
    role: 'Backend Developer',
    avatar: '/joshua.png',
    quote:
      'Collaborating with Isaac on Brainly-Code was smooth and productive. His technical depth and team spirit make him a great partner to build with.',
  },
  {
    name: 'UWASE UTUJE Sandrine',
    role: 'Full Stack Developer & Designer',
    avatar: '/sandrine.png',
    quote:
      'Isaac brings both creativity and structure to every project. His dedication to clean code and great UX really elevates the final product.',
  },
  {
    name: 'UHIRIWE Chrisostom',
    role: 'Full Stack Developer',
    avatar: '/chrysostom.png',
    quote:
      'Isaac\'s work on Ciphera, especially the model fine-tuning side, was impressive. He dives deep and always finds elegant solutions.',
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              What People <span className="bg-gradient-hero bg-clip-text text-transparent">Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground max-w-xl mx-auto mb-4"
            >
              Feedback from collaborators, mentors, and clients I've had the pleasure of working with.
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '120px' } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-hero mx-auto rounded-full"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-sm transition-all flex flex-col gap-4"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary opacity-60" />

                {/* Quote text */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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

export default Team;
