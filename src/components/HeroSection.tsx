import { motion } from 'framer-motion';

const teamMembers = [
  'Shing Diorio',
  'Dahlia Dinh',
  'Keith McAfee',
  'Keith Mancuso',
];

export default function HeroSection() {
  return (
    <section id="hero" className="mb-24 scroll-mt-20 full-bleed">
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 text-center leading-tight mb-8"
          >
            How might we turn weekly updates into weekly insights?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B46C1] to-[#14B8A6]">
              FDE Pulse
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
