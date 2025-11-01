import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Crown, Palette, Gem, Globe } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1000 BCE',
    title: 'Ancient Origins',
    description: 'Birth of Pattachitra and temple art traditions in Odisha, depicting divine narratives on palm leaves and cloth',
    icon: Crown,
    color: '#FFD700',
  },
  {
    year: '16th Century',
    title: 'Tanjore Glory',
    description: 'Nayak rulers patronize Tanjore painting, establishing gold foil embellishment as the hallmark of South Indian art',
    icon: Palette,
    color: '#FF6B6B',
  },
  {
    year: '17th Century',
    title: 'Royal Mysore Silk',
    description: 'Mysore Palace weavers perfect the art of pure silk sarees with real gold zari, becoming a royal tradition',
    icon: Gem,
    color: '#4ECDC4',
  },
  {
    year: '18th Century',
    title: 'Blue Pottery Arrives',
    description: 'Turko-Persian artisans bring quartz-based pottery to Jaipur, creating the iconic turquoise glazed ceramics',
    icon: Globe,
    color: '#6C5CE7',
  },
  {
    year: '2025',
    title: 'AI Preservation Era',
    description: 'Technology meets tradition as AI helps document, preserve, and promote endangered crafts for future generations',
    icon: Sparkles,
    color: '#D4AF37',
  },
];

export const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="timeline" ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0612] via-[#1a0f2e] to-[#0a0612]" />
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#6C5CE7]/5 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            <span className="text-[#D4AF37] tracking-[0.3em] uppercase">Through The Ages</span>
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <h2 className="text-5xl md:text-7xl mb-6 gradient-gold">
            Heritage Timeline
          </h2>

          <p className="text-xl md:text-2xl text-[#a89f8d] max-w-3xl mx-auto">
            A journey through millennia of artistic excellence and cultural evolution
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5 }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass gold-glow p-6 rounded-xl group cursor-pointer"
                    >
                      {/* Year */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className="inline-block px-4 py-1 mb-4 rounded-full"
                        style={{ backgroundColor: `${event.color}20`, color: event.color }}
                      >
                        {event.year}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-3xl text-[#f5f0e8] mb-3 group-hover:text-[#D4AF37] transition-colors">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#a89f8d]">{event.description}</p>

                      {/* Decorative line */}
                      <motion.div
                        className="h-1 rounded-full mt-4"
                        style={{ backgroundColor: event.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 my-6 md:my-0"
                  >
                    <div
                      className="w-16 h-16 rounded-full glass flex items-center justify-center border-2 z-10"
                      style={{ borderColor: event.color }}
                    >
                      <event.icon className="w-8 h-8" style={{ color: event.color }} />
                    </div>
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 glass px-8 py-4 rounded-full">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#a89f8d]">
              3000+ years of continuous artistic tradition
            </span>
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
