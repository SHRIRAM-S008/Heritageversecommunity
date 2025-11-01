import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, MapPin, Calendar, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Artisan {
  name: string;
  craft: string;
  location: string;
  experience: string;
  image: string;
  specialty: string;
  awards: string;
}

const artisans: Artisan[] = [
  {
    name: 'Lakshmi Devi',
    craft: 'Silk Weaver',
    location: 'Mysore, Karnataka',
    experience: '35 years',
    image: 'https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHdlYXZpbmclMjB0ZXh0aWxlfGVufDF8fHx8MTc2MTk4MDA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    specialty: 'Traditional Mysore silk with gold zari work',
    awards: 'National Award for Master Craftsmanship',
  },
  {
    name: 'Rajesh Kumar',
    craft: 'Tanjore Artist',
    location: 'Thanjavur, Tamil Nadu',
    experience: '28 years',
    image: 'https://images.unsplash.com/photo-1633453662486-ec96a5dbb579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHBhaW50aW5nJTIwYXJ0aXN0fGVufDF8fHx8MTc2MTk4MDA5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    specialty: 'Gold foil embellishment on classical themes',
    awards: 'Shilp Guru Award 2022',
  },
  {
    name: 'Mohan Das',
    craft: 'Blue Potter',
    location: 'Jaipur, Rajasthan',
    experience: '42 years',
    image: 'https://images.unsplash.com/photo-1582140099533-11fe4d348e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwYXJ0aXNhbiUyMGhhbmRzJTIwY2xheXxlbnwxfHx8fDE3NjE5ODAwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specialty: 'Quartz-based turquoise glazed pottery',
    awards: 'UNESCO Seal of Excellence',
  },
  {
    name: 'Sarita Behera',
    craft: 'Pattachitra Master',
    location: 'Puri, Odisha',
    experience: '30 years',
    image: 'https://images.unsplash.com/photo-1756670164589-08daf1a0d236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwY3JhZnRzbWFuJTIwd29ya2luZ3xlbnwxfHx8fDE3NjE5ODAwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specialty: 'Natural dye scrolls with mythological narratives',
    awards: 'President\'s Award for Heritage Preservation',
  },
];

export const ArtisanProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="artisans" ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f2e] via-[#0a0612] to-[#0a0612]" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 border border-[#D4AF37]/10 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

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
            <span className="text-[#D4AF37] tracking-[0.3em] uppercase">Master Craftspeople</span>
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <h2 className="text-5xl md:text-7xl mb-6 gradient-gold">
            Meet Our Artisans
          </h2>

          <p className="text-xl md:text-2xl text-[#a89f8d] max-w-3xl mx-auto">
            The guardians of tradition, preserving ancient crafts through dedication and mastery
          </p>
        </motion.div>

        {/* Artisan cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {artisans.map((artisan, index) => (
            <motion.div
              key={artisan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative glass gold-glow rounded-2xl overflow-hidden"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-[#0a0612]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
                {/* Award badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className="absolute top-6 right-6 p-3 glass rounded-full"
                >
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>

                {/* Craft label */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="mb-4"
                >
                  <span className="inline-block px-4 py-2 glass text-[#D4AF37] text-sm rounded-full">
                    {artisan.craft}
                  </span>
                </motion.div>

                {/* Name */}
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-4xl mb-4 text-[#f5f0e8] group-hover:text-[#D4AF37] transition-colors"
                >
                  {artisan.name}
                </motion.h3>

                {/* Details */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="space-y-2 mb-4"
                >
                  <div className="flex items-center gap-2 text-[#a89f8d]">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#a89f8d]">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>{artisan.experience} of experience</span>
                  </div>
                </motion.div>

                {/* Specialty */}
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  className="text-[#a89f8d] mb-3"
                >
                  {artisan.specialty}
                </motion.p>

                {/* Award */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                  className="flex items-start gap-2 text-[#D4AF37] text-sm"
                >
                  <Award className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{artisan.awards}</span>
                </motion.div>

                {/* Decorative line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 glass gold-glow text-[#D4AF37] rounded-lg text-xl border border-[#D4AF37]"
          >
            Discover More Artisans
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
