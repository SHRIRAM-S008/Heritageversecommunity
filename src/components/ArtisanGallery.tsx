import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { X, ZoomIn, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Intricate Mandala Art',
    category: 'Pattern Work',
    image: 'https://images.unsplash.com/photo-1711552466487-ac9afb5528cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5kYWxhJTIwYXJ0JTIwZGV0YWlsfGVufDF8fHx8MTc2MTk4MDA5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sacred geometric patterns created with traditional techniques',
  },
  {
    id: 2,
    title: 'Handwoven Textiles',
    category: 'Weaving',
    image: 'https://images.unsplash.com/photo-1759738097761-506cd03c7ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwd2VhdmluZyUyMGxvb20lMjBpbmRpYXxlbnwxfHx8fDE3NjE5ODAwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Traditional loom weaving passed through generations',
  },
  {
    id: 3,
    title: 'Artisan at Work',
    category: 'Craftsmanship',
    image: 'https://images.unsplash.com/photo-1756670164589-08daf1a0d236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwY3JhZnRzbWFuJTIwd29ya2luZ3xlbnwxfHx8fDE3NjE5ODAwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Master craftsman demonstrating centuries-old techniques',
  },
  {
    id: 4,
    title: 'Pottery Creation',
    category: 'Ceramics',
    image: 'https://images.unsplash.com/photo-1582140099533-11fe4d348e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwYXJ0aXNhbiUyMGhhbmRzJTIwY2xheXxlbnwxfHx8fDE3NjE5ODAwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Skilled hands shaping clay into functional art',
  },
  {
    id: 5,
    title: 'Traditional Painting',
    category: 'Fine Art',
    image: 'https://images.unsplash.com/photo-1633453662486-ec96a5dbb579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHBhaW50aW5nJTIwYXJ0aXN0fGVufDF8fHx8MTc2MTk4MDA5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Artist creating timeless pieces with natural pigments',
  },
  {
    id: 6,
    title: 'Colorful Ceramics',
    category: 'Pottery',
    image: 'https://images.unsplash.com/photo-1739548663379-ff1cbcf5cbf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjZXJhbWljJTIwcG90dGVyeSUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTk4MDA5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Vibrant pottery showcasing regional artistic traditions',
  },
];

export const ArtisanGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Pattern Work', 'Weaving', 'Craftsmanship', 'Ceramics', 'Fine Art', 'Pottery'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0612] via-[#0a0612] to-[#1a0f2e]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#D4AF37] tracking-[0.3em] uppercase">Visual Journey</span>
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <h2 className="text-5xl md:text-7xl mb-6 gradient-gold">
            Artisan Gallery
          </h2>

          <p className="text-xl md:text-2xl text-[#a89f8d] max-w-3xl mx-auto mb-12">
            Witness the beauty of traditional craftsmanship through our curated collection
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-[#D4AF37] text-[#0a0612]'
                    : 'glass text-[#D4AF37] hover:bg-[#D4AF37]/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xl glass gold-glow h-80"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-[#0a0612]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#D4AF37] text-sm mb-2">{item.category}</span>
                  <h3 className="text-2xl text-[#f5f0e8] mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-[#a89f8d]">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-sm">Click to view</span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-[#D4AF37] text-sm">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0612]/95 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full glass gold-glow rounded-2xl overflow-hidden"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 glass rounded-full text-[#D4AF37]"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <div className="relative h-[60vh]">
                <ImageWithFallback
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-8 bg-gradient-to-t from-[#1a0f2e] to-transparent">
                <span className="inline-block px-4 py-1 glass text-[#D4AF37] text-sm rounded-full mb-4">
                  {selectedItem.category}
                </span>
                <h3 className="text-4xl text-[#f5f0e8] mb-4">{selectedItem.title}</h3>
                <p className="text-xl text-[#a89f8d]">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
