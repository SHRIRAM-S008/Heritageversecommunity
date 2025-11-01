import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Heart, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-[#1a0f2e] to-transparent pattern-overlay" />
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl gradient-gold mb-4"
            >
              HeritageVerse
            </motion.h3>
            <p className="text-[#a89f8d] mb-6">
              Preserving India's rich cultural heritage through the power of artificial intelligence
              and connecting master artisans with the world.
            </p>
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Made with love for Indian culture</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl text-[#f5f0e8] mb-6"
            >
              Connect With Us
            </motion.h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[#a89f8d] hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>heritage@heritageverse.ai</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[#a89f8d] hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>+91 800 HERITAGE</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[#a89f8d] hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <MapPin className="w-5 h-5" />
                <span>Across India's Cultural Heartlands</span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl text-[#f5f0e8] mb-6"
            >
              Explore
            </motion.h4>
            <div className="space-y-3">
              {['Tamil Nadu', 'Karnataka', 'Odisha', 'Rajasthan', 'Artisan Directory', 'AI Technology'].map(
                (link, index) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-[#a89f8d] hover:text-[#D4AF37] transition-colors block group"
                    >
                      <span className="inline-block group-hover:translate-x-2 transition-transform">
                        {link}
                      </span>
                    </a>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[#D4AF37]/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#a89f8d]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm">
                Powered by AI for Culture © 2025 HeritageVerse
              </span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Support Artisans
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </footer>
  );
};
