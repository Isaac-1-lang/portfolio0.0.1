import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Globe, Twitter } from 'lucide-react';

type Collaborator = {
  name: string;
  role: string;
  avatar: string; // public path or remote URL
  links: Partial<{
    github: string;
    linkedin: string;
    x: string;
    website: string;
  }>;
  contributions: string[]; // brief bullets of what you built together
  projects: string[]; // project names/areas
};

const collaborators: Collaborator[] = [
  {
    name: 'RUKUNDO Furaha Divin',
    role: 'Full Stack Developper',
    avatar: '/download.jpeg',
    links: {
      github: 'https://github.com/gravityz0',
      linkedin: 'https://www.linkedin.com/in/rukundo-furaha-divin-73b574381/',
      x: 'https://www.instagram.com/direct/t/17844646124815562/',
      website: '',
    },
    contributions: ['Backend Development', 'Integration'],
    projects: ['Green IQ', 'ShopShere'],
  },
  {
    name: 'IZERE Joshua',
    role: 'Backend Developper',
    avatar: '/joshua.png',
    links: {
      github: 'https://github.com/I-Josh-pro-grammin',
      linkedin: 'https://www.linkedin.com/in/rukundo-furaha-divin-73b574381/',
      x:'https://www.instagram.com/izerejoshua25/'
    },
    contributions: ['Backend Development', 'DevOps'],
    projects: ['Brainly-Code'],
  },
  ,
  {
    name: 'BYIRINGIRO Aloys',
    role: 'Full stack Developper & Gamer',
    avatar: '/aloys.png',
    links: {
      github: 'https://github.com/Byiringiro-Aloys',
      linkedin: 'https://www.linkedin.com/in/byiringiro-aloys-895781373/',
      x:'https://www.instagram.com/_b_aloys/'
    },
    contributions: ['Backend Development', 'DevOps'],
    projects: ['Brainly-Code'],
  },
  ,
  {
    name: 'UWASE Sonia',
    role: 'Frontend Developper & Designer',
    avatar: '/sonia.png',
    links: {
      github: 'https://github.com/I-Josh-pro-grammin',
      linkedin: 'https://www.linkedin.com/in/rukundo-furaha-divin-73b574381/',
      x:'https://www.instagram.com/___sonia16/'
    },
    contributions: ['Backend Development', 'DevOps'],
    projects: ['Brainly-Code'],
  },
  ,
  {
    name: 'UWASE UTUJE Sandrine',
    role: 'Full Stack Developper & Designer',
    avatar: '/sandrine.png',
    links: {
      github: 'https://github.com/utujesandrine456',
      linkedin: 'https://www.linkedin.com/in/uwase-utuje-sandrine-5842b8386/',
      x:'https://www.instagram.com/utuje_001/'
    },
    contributions: ['Backend Development', 'DevOps'],
    projects: ['Brainly-Code'],
  },
  ,
  {
    name: 'Abayo Hirwa Jovin',
    role: 'Backend Developper',
    avatar: '/logoWhite.png',
    links: {
      github: 'https://github.com/AbayoHJovin',
      linkedin: 'https://www.linkedin.com/in/rukundo-furaha-divin-73b574381/',
      x:'https://www.instagram.com/izerejoshua25/'
    },
    contributions: ['Backend & Frontend Development', 'DevOps'],
    projects: ['Brainly-Code'],
  },
  ,
  {
    name: 'BAZIRAMWABO Gabriel',
    role: 'Instructor at Rwanda Coding Academy',
    avatar: '/logo.png',
    links: {
      github: 'https://github.com/I-Josh-pro-grammin',
      linkedin: 'https://www.linkedin.com/in/gabriel-baziramwabo-a00a8430/',
      x:'https://www.instagram.com/izerejoshua25/'
    },
    contributions: ['Backend Development', 'DevOps'],
    projects: ['Yolov8',"AI/ML mentorship","Embedded Systems"],
  },
  ,
  {
    name: 'RWAGAJU Aphoridice',
    role: 'Instructor at Rwanda Coding Academy',
    avatar: '/legend.png',
    links: {
      github: 'https://github.com/I-Josh-pro-grammin',
      linkedin: 'https://www.linkedin.com/in/rukundo-furaha-divin-73b574381/',
      x:'https://www.instagram.com/izerejoshua25/'
    },
    contributions: ['Connection Support', 'e_15th Iconic contest'],
    projects: ['Green IQ'],
  },
  ,
  {
    name: 'UHIRIWE Chrisostom',
    role: 'Full Stack Developper & Gamer',
    avatar: '/chrysostom.png',
    links: {
      github: 'https://github.com/I-Josh-pro-grammin',
      linkedin: 'https://www.linkedin.com/in/rukundo-furaha-divin-73b574381/',
      x:'https://www.instagram.com/u.h.i.r.i.w.e___/'
    },
    contributions: ['Backend Development', 'Model Fine tuning'],
    projects: ['Ciphera'],
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
              Collaboration <span className="bg-gradient-hero bg-clip-text text-transparent">& Teamwork</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '120px' } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-hero mx-auto rounded-full"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((c, idx) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-glow-primary transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={c.avatar} alt={c.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-semibold">{c.name}</h3>
                      <p className="text-sm text-muted-foreground">{c.role}</p>
                    </div>
                  </div>

                  {/* Contributions */}
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    {c.contributions.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Projects Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.projects.map((p) => (
                      <span key={p} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {c.links.github && (
                      <a href={c.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                         className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#181717] text-white hover:opacity-90 transition-opacity">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {c.links.linkedin && (
                      <a href={c.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                         className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {c.links.x && (
                      <a href={c.links.x} target="_blank" rel="noopener noreferrer" aria-label="X"
                         className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-black text-white hover:opacity-90 transition-opacity">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {c.links.website && (
                      <a href={c.links.website} target="_blank" rel="noopener noreferrer" aria-label="Website"
                         className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#6B7280] text-white hover:opacity-90 transition-opacity">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
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


