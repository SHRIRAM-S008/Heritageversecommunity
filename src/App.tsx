import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { RegionalCraftCard } from './components/RegionalCraftCard';
import { ArtisanGallery } from './components/ArtisanGallery';
import { ArtisanProfiles } from './components/ArtisanProfiles';
import { Timeline } from './components/Timeline';
import { AIPreservationSection } from './components/AIPreservationSection';
import { Footer } from './components/Footer';
import { Sparkles } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const crafts = [
    {
      region: 'Tamil Nadu',
      craft: 'Tanjore Painting',
      description:
        'Exquisite gold-foil artwork depicting Hindu deities, known for rich colors and surface richness achieved through intricate layering and embellishments.',
      image: 'https://images.unsplash.com/photo-1745195734388-db01e755ebb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5qb3JlJTIwcGFpbnRpbmclMjB0YW1pbHxlbnwxfHx8fDE3NjE5Nzk4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#FF6B6B',
    },
    {
      region: 'Karnataka',
      craft: 'Mysore Silk',
      description:
        'Luxurious silk sarees woven with pure mulberry silk and real gold zari, representing royal elegance and centuries of weaving mastery in the palaces of Mysore.',
      image: 'https://images.unsplash.com/photo-1752469126143-9de2078e5281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXNvcmUlMjBzaWxrJTIwc2FyZWV8ZW58MXx8fHwxNzYxOTc5ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#4ECDC4',
    },
    {
      region: 'Odisha',
      craft: 'Pattachitra',
      description:
        'Ancient scroll paintings characterized by bold lines, vibrant colors, and mythological narratives, traditionally created on cloth with natural dyes and indigenous materials.',
      image: 'https://images.unsplash.com/photo-1757620761808-d5062cfc6a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXR0YWNoaXRyYSUyMG9kaXNoYSUyMGFydHxlbnwxfHx8fDE3NjE5Nzk4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#FFD93D',
    },
    {
      region: 'Rajasthan',
      craft: 'Blue Pottery',
      description:
        'Turquoise-glazed ceramic art brought by Turko-Persian artisans, distinguished by its unique use of quartz stone and absence of clay, creating a distinctive translucent appearance.',
      image: 'https://images.unsplash.com/photo-1728323448598-4b5052f0183a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwcG90dGVyeSUyMHJhamFzdGhhbnxlbnwxfHx8fDE3NjE5Nzk4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#6C5CE7',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0612] text-[#f5f0e8]">
      {/* Scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <motion.div id="home" style={{ opacity, scale }}>
        <HeroSection heroImage="https://images.unsplash.com/photo-1759065842739-dbf5fb0f2d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGFydCUyMHBhaW50aW5nJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzYxOTc5ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080" />
      </motion.div>

      {/* Regional Crafts Section */}
      <section id="crafts" className="relative py-32 px-4">
        {/* Background temple image with parallax */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1688024099219-fd598f8f0b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJhbCUyMGhlcml0YWdlJTIwdGVtcGxlfGVufDF8fHx8MTc2MTk3OTgwNHww&ixlib=rb-4.1.0&q=80&w=1080)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] tracking-[0.3em] uppercase">Regional Mastery</span>
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            <h2 className="text-5xl md:text-7xl mb-6 gradient-gold">
              Iconic Crafts of India
            </h2>

            <p className="text-xl md:text-2xl text-[#a89f8d] max-w-3xl mx-auto">
              Four states, four masterful traditions, each carrying the soul of centuries
            </p>
          </motion.div>

          {/* Crafts grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {crafts.map((craft, index) => (
              <RegionalCraftCard key={craft.region} {...craft} index={index} />
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-40 left-10 w-2 h-2 bg-[#D4AF37] rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-3 h-3 bg-[#FFD700] rounded-full"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Artisan Gallery */}
      <ArtisanGallery />

      {/* Artisan Profiles */}
      <ArtisanProfiles />

      {/* Timeline */}
      <Timeline />

      {/* AI Preservation Section */}
      <div id="ai">
        <AIPreservationSection aiImage="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE5NTM3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080" />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating gold accent line - decorative */}
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-30 hidden xl:block"
        animate={{ height: ['128px', '160px', '128px'] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}
