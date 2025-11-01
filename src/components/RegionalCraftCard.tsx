import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RegionalCraftCardProps {
  region: string;
  craft: string;
  description: string;
  image: string;
  index: number;
  color: string;
}

export const RegionalCraftCard = ({
  region,
  craft,
  description,
  image,
  index,
  color,
}: RegionalCraftCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-2xl glass gold-glow h-[500px] cursor-pointer"
      >
        {/* Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={image}
            alt={craft}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-[#0a0612]/50 to-transparent" />
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {/* Region badge */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 glass text-[#D4AF37] text-sm tracking-widest uppercase rounded-full">
              {region}
            </span>
          </motion.div>

          {/* Craft name */}
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            className="text-4xl md:text-5xl mb-4 text-[#f5f0e8] group-hover:text-[#D4AF37] transition-colors duration-300"
          >
            {craft}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            className="text-[#a89f8d] text-lg mb-4 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500"
          >
            {description}
          </motion.p>

          {/* Accent line */}
          <motion.div
            className="h-1 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: index * 0.2 + 0.6 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};
