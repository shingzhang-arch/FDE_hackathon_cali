import { motion } from 'framer-motion';
import { Archive as ArchiveIcon } from 'lucide-react';

interface ArchiveProps {
  children: React.ReactNode;
}

export default function Archive({ children }: ArchiveProps) {
  return (
    <section id="archive" className="mb-24 scroll-mt-20 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
            <ArchiveIcon className="w-4 h-4" />
            Archive
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Additional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800">
              Information
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Detailed documentation and supporting materials.
          </p>
        </motion.div>

        {/* Archive Content */}
        <div className="space-y-24">
          {children}
        </div>
      </div>
    </section>
  );
}
