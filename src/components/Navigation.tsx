import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Crafts', href: '#crafts' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Artisans', href: '#artisans' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'AI Heritage', href: '#ai' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 transition-all duration-300 ${
          isScrolled ? 'glass gold-glow rounded-2xl' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </motion.div>
            <span className="text-2xl gradient-gold">HeritageVerse</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                onClick={() => scrollToSection(item.href)}
                className="text-[#f5f0e8] hover:text-[#D4AF37] transition-colors relative group"
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#D4AF37] text-[#0a0612] rounded-lg"
            >
              Support
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#D4AF37]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass rounded-xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#f5f0e8] hover:text-[#D4AF37] transition-colors text-left py-2 border-b border-[#D4AF37]/20 last:border-0"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#D4AF37] text-[#0a0612] rounded-lg mt-4"
              >
                Support
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
