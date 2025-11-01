import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  heroImage: string;
}

export const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-overlay">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0612]/60 via-[#0a0612]/40 to-[#0a0612] z-10" />
        <ImageWithFallback
          src={heroImage}
          alt="Heritage Arts"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center mb-6 gap-3"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
          </motion.div>
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase">Heritage Reimagined</span>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl mb-6 gradient-gold"
        >
          HeritageVerse
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-4xl text-[#f5f0e8] mb-4">
            Where Tradition Meets Innovation
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-[#a89f8d] mb-12 max-w-3xl mx-auto"
        >
          Preserving the soul of India's masterful artisanship through the lens of artificial intelligence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#D4AF37] text-[#0a0612] rounded-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Heritage</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 glass gold-glow text-[#D4AF37] rounded-lg"
          >
            Discover Artisans
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-30" />
    </section>
  );
};
