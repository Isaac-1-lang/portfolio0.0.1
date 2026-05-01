import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',        href: '#about'        },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume',       href: '#resume'       },
  { label: 'Contact',      href: '#contact'      },
];

export function Navigation() {
  const [scrolled, setScrolled]         = useState(false);
  const [active, setActive]             = useState('');
  const [mobileOpen, setMobileOpen]     = useState(false);

  /* track scroll position + active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // find which section is currently in view
      const sections = navLinks.map((l) => document.querySelector(l.href));
      let current = '';
      sections.forEach((el) => {
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 120) current = `#${el.id}`;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    /* outer wrapper — full width but transparent, just for positioning */
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        /* pill shape, shrinks/grows with scroll */
        className={`pointer-events-auto w-full transition-all duration-300 ${
          scrolled ? 'max-w-2xl' : 'max-w-3xl'
        } rounded-2xl border border-border/60 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-background/40 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-4 h-14">

          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <img src="/logo.png" alt="Isaac logo" className="w-9 h-9 rounded-full object-cover" />
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border/40 md:hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
