'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Wrench, Shield, Award, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';

const CAPABILITIES = [
  {
    icon: Factory,
    title: 'Direct Manufacturer',
    desc: 'We manufacture everything in-house, ensuring strict quality control and competitive pricing.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    desc: 'Products tailored to your specific project needs, from size to finish.',
  },
  {
    icon: Shield,
    title: 'Extended Warranty',
    desc: 'Industry-leading warranty coverage with individual spare parts availability.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    desc: 'Every product tested against international standards before delivery.',
  },
  {
    icon: Lightbulb,
    title: 'Design Innovation',
    desc: 'In-house R&D team continuously developing new product lines.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    desc: 'Dedicated technical team assisting architects, builders, and plumbers.',
  },
];

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="capabilities" ref={ref} className="bg-[#111827] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-white font-semibold">
            Why Choose Us
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mt-2"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Strength &amp; Capabilities
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto mt-4" />
        </motion.div>

        {/* 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT — strength image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:w-[40%] w-full"
          >
            <div className="relative rounded-3xl overflow-hidden min-h-[440px] shadow-xl">
              <Image
                src="/strength.jpg"
                alt="Qabil Strength & Capabilities"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
                  <div
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: 'var(--font-playfair-display)' }}
                  >
                    Manufacturing Since 1975
                  </div>
                  <div className="text-white/60 text-xs mt-0.5 uppercase tracking-widest">
                    Karachi, Pakistan
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — capability cards grid */}
          <div className="lg:w-[60%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
                >
                  <Icon className="text-white" size={32} />
                  <h4 className="font-bold text-white text-sm mt-3">{cap.title}</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="italic text-white/50 text-center max-w-2xl mx-auto mt-14 text-lg leading-relaxed"
        >
          &ldquo;The core strength of QABIL® lies in being manufacturers and pioneers of high-quality
          products — uniquely positioned to customize for any situation or need.&rdquo;
        </motion.p>

      </div>
    </section>
  );
}
