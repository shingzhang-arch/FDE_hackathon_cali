import { motion } from 'framer-motion';
import { Bot, Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center justify-center min-h-screen">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>FDE Hackathon 2026 - Team Cali</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white text-center leading-tight mb-6"
        >
          Weekly AI Check-ins.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            Instant Team Insights.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mb-12"
        >
          Weekly update: I'm giving you info, can you give me info in return?
          <br />
          <span className="text-lg md:text-xl text-white/70 mt-2 block">
            An AI agent that turns your weekly updates into valuable insights, 
            connects you with similar projects, and surfaces solutions automatically.
          </span>
        </motion.p>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            'Operational Efficiency',
            'Accelerating Engagements',
            'Leadership Insights'
          ].map((pillar, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm md:text-base"
            >
              {pillar}
            </div>
          ))}
        </motion.div>

        {/* AI Agent visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl animated-gradient flex items-center justify-center shadow-2xl shadow-purple-500/30">
            <Bot className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>
          {/* Pulsing rings */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-white/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-white/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
