import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const teamMembers = [
  'Shing Diorio',
  'Dahlia Dinh',
  'Keith McAfee',
  'Keith Mancuso',
];

export default function HeroSection() {
  return (
    <section id="hero" className="mb-24 scroll-mt-20 -mx-6 md:-mx-8">
      <div className="relative min-h-[80vh] bg-gradient-to-br from-purple-50 via-white to-teal-50 overflow-hidden">
        {/* Subtle pulse background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-32 flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>FDE Hackathon 2026 - Team Cali</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 text-center leading-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B46C1] to-[#14B8A6]">
              FDE Pulse
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-700 text-center max-w-2xl mb-12"
          >
            How might we turn weekly updates into weekly insights?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="px-5 py-2.5 rounded-full bg-white border-2 border-slate-200 text-slate-700 font-medium text-sm md:text-base shadow-sm"
              >
                {member}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
