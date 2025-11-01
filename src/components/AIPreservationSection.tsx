import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, Shield, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AIPreservationSectionProps {
  aiImage: string;
}

export const AIPreservationSection = ({ aiImage }: AIPreservationSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Brain,
      title: 'AI Pattern Recognition',
      description: 'Advanced algorithms analyze and preserve intricate traditional patterns',
    },
    {
      icon: Shield,
      title: 'Digital Safeguarding',
      description: 'Creating permanent digital archives of endangered craft techniques',
    },
    {
      icon: Users,
      title: 'Artisan Empowerment',
      description: 'Connecting master craftspeople with global markets and apprentices',
    },
    {
      icon: Sparkles,
      title: 'Innovation & Tradition',
      description: 'Blending ancient wisdom with modern technology for cultural continuity',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0612] via-[#1a0f2e] to-[#0a0612]" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 border border-[#D4AF37]/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 border border-[#D4AF37]/10 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#D4AF37] tracking-[0.3em] uppercase">The Future</span>
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          
          <h2 className="text-5xl md:text-7xl mb-6 gradient-gold">
            AI for Cultural Preservation
          </h2>
          
          <p className="text-xl md:text-2xl text-[#a89f8d] max-w-3xl mx-auto">
            Leveraging artificial intelligence to safeguard millennia of artisan knowledge
            and ensure its transmission to future generations
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass gold-glow">
              <ImageWithFallback
                src={aiImage}
                alt="AI Technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-transparent to-transparent" />
              
              {/* Floating tech elements */}
              <motion.div
                className="absolute top-4 right-4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-[#D4AF37]">AI Powered</span>
              </motion.div>
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl" />
          </motion.div>

          {/* Features side */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass p-6 rounded-xl group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl text-[#f5f0e8] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-[#a89f8d]">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0a0612] rounded-lg text-xl"
          >
            Support Tradition
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
