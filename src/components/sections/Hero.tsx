import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Code2, Cpu, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Animated Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative w-48 h-48 mx-auto mb-12"
          >
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              style={{ borderTopColor: 'hsl(var(--primary))' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-2 border-accent/30 rounded-full"
              style={{ borderBottomColor: 'hsl(var(--accent))' }}
            />

            {/* Profile Image / Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border-2 border-primary/20 shadow-sm overflow-hidden flex items-center justify-center"
            >
              {/* Light mode: colored logo; Dark mode: white logo */}
              <img
                src="/logo.png"
                alt="Logo"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover block dark:hidden"
              />
              <img
                src="/logoWhite.png"
                alt="Logo"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover hidden dark:block"
              />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-primary text-lg font-medium">Yo!, I'm</span>
          </motion.div>
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent"
          >
            NIYOBYOSE Isaac Precieux
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Full-Stack Developer | Cybersecurity Enthusiast | AI & Robotics Innovator
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Passionate tech innovator from Rwanda Coding Academy with 2+ years of experience 
            and 20+ completed projects in AI/ML, Mobile and full-stack development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 shadow-sm"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center"
          >
            {[
              { icon: Github, href: 'https://github.com/Isaac-1-lang', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/niyobyose-isaac-precieux-339369380/', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/Precieux982', label: 'Twitter' },
              { icon: Mail, href: 'mailto:isaprecieux112@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-sm transition-all"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6 text-primary animate-glow-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
