import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { Team } from '@/components/sections/Team';
import { ThemeProvider } from '@/contexts/ThemeContext';
import {
  Github,
  Gitlab,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  PhoneCall,
  MessageCircle,
  Twitter,
  Code2,
  Swords,
  BarChart2,
  Trophy,
  BookOpenText,
  GraduationCap,
  Smile,
  Globe
} from 'lucide-react';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Team />
        <Contact />
        
        {/* Footer */}
        <footer className="py-10 border-t border-border">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <div className="flex flex-wrap gap-3 justify-center mb-5">
              {[
                { label: 'GitHub', href: 'https://github.com/Isaac-1-lang', Icon: Github, bg: 'bg-[#181717]', color: 'text-white' },
                { label: 'GitLab', href: 'https://gitlab.com/Isaac-1-lang', Icon: Gitlab, bg: 'bg-[#FC6D26]', color: 'text-white' },
                { label: 'CourseNetworking', href: 'https://www.thecn.com/NI471', Icon: GraduationCap, bg: 'bg-[#0EA5E9]', color: 'text-white' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/niyobyose-isaac-precieux-339369380/', Icon: Linkedin, bg: 'bg-[#0A66C2]', color: 'text-white' },
                { label: 'Gmail', href: 'mailto:isaprecieux112@gmail.com', Icon: Mail, bg: 'bg-[#EA4335]', color: 'text-white' },
                { label: 'Facebook', href: '#', Icon: Facebook, bg: 'bg-[#1877F2]', color: 'text-white' },
                { label: 'Instagram', href: '#', Icon: Instagram, bg: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', color: 'text-white' },
                { label: 'WhatsApp', href: 'https://www.instagram.com/isaacniyo78/', Icon: MessageCircle, bg: 'bg-[#25D366]', color: 'text-white' },
                { label: 'Call', href: 'tel:+250788598775', Icon: PhoneCall, bg: 'bg-[#10B981]', color: 'text-white' },
                { label: 'HuggingFace', href: 'https://huggingface.co/Claudineuwa', Icon: Smile, bg: 'bg-[#FFCC4D]', color: 'text-[#3C2A00]' },
                { label: 'X', href: 'https://x.com/PrecieuxIs73595', Icon: Twitter, bg: 'bg-black', color: 'text-white' },
                { label: 'LeetCode', href: 'https://leetcode.com/u/Isaac_250/', Icon: Code2, bg: 'bg-[#FFA116]', color: 'text-white' },
                { label: 'Codeforces', href: 'https://codeforces.com/profile/Isaac_250', Icon: Swords, bg: 'bg-[#1F8ACB]', color: 'text-white' },
                { label: 'Kaggle', href: 'https://www.kaggle.com/isaac250', Icon: BarChart2, bg: 'bg-[#20BEFF]', color: 'text-white' },
                { label: 'AtCoder', href: 'https://atcoder.jp/users/Isaac_250', Icon: Trophy, bg: 'bg-[#2F7ED8]', color: 'text-white' },
                { label: 'GeeksforGeeks', href: '#', Icon: BookOpenText, bg: 'bg-[#2F8D46]', color: 'text-white' },
                { label: 'Website', href: '#', Icon: Globe, bg: 'bg-[#6B7280]', color: 'text-white' },
              ].map(({ label, href, Icon, bg, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`group inline-flex items-center justify-center w-10 h-10 rounded-full ${bg} ${color} transition-all duration-200 hover:opacity-95 hover:scale-110 hover:-translate-y-0.5 hover:shadow-md`}
                  title={label}
                >
                  <Icon className="h-5 w-5 transition-transform duration-200 group-hover:-rotate-6" />
                </a>
              ))}
            </div>
            <p className="text-sm">
              © 2025 NIYOBYOSE Isaac Precieux. Built with passion and code.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
