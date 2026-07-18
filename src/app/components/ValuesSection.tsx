'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Star } from 'lucide-react';

const VALUE_CARDS = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To deliver innovative, affordable, and premium sanitary solutions that elevate everyday living.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: "To be Pakistan's most trusted name in sanitary manufacturing, known for quality and reliability.",
  },
  {
    icon: Star,
    title: 'Quality',
    desc: 'Every product is rigorously tested against international standards before leaving our facility.',
  },
];

export default function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-[#F7F8FA] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALUE_CARDS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#28166F]/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#28166F]" />
              </div>
              <h4
                className="font-bold text-[#111827] text-base mb-2"
                style={{ fontFamily: 'var(--font-playfair-display)' }}
              >
                {title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
