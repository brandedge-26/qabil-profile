'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const TIMELINE = [
  { year: '1975', title: 'Founded', desc: 'Qabil Engineering Works established in Karachi, Pakistan.' },
  { year: '1990', title: 'City Expansion', desc: 'Extended distribution to major cities across Pakistan.' },
  { year: '2005', title: 'CP Fittings Range', desc: 'Introduced a comprehensive chrome-plated fittings product line.' },
  { year: '2024', title: 'Nationwide Network', desc: 'Established a robust nationwide dealer and outlet network.' },
];

function FadeUp({ children, delay = 0, isInView }: { children: React.ReactNode; delay?: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

          {/* LEFT — image */}
          <div className="lg:w-[45%] w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-xl h-full min-h-[520px]"
            >
              <Image
                src="/story.png"
                alt="Qabil Plumbing Solutions Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
                  <div
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: 'var(--font-playfair-display)' }}
                  >
                    Qabil Plumbing Solutions
                  </div>
                  <div className="text-white/60 text-xs mt-0.5 uppercase tracking-widest">
                    Est. 1975 · Karachi, Pakistan
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — content */}
          <div className="lg:w-[55%] w-full flex flex-col justify-center">
            <FadeUp delay={0.1} isInView={isInView}>
              <span className="text-xs uppercase tracking-widest text-[#28166F] font-semibold">
                Our Story
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#111827] mt-2 leading-tight"
                style={{ fontFamily: 'var(--font-playfair-display)' }}
              >
                Five Decades of
                <br />
                <span className="text-[#28166F]">Plumbing Excellence</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2} isInView={isInView}>
              <p className="text-gray-500 mt-5 leading-relaxed text-base">
                Since its establishment in 1975, Qabil Engineering Works has emerged as an industry trailblazer,
                pioneering innovation and setting a benchmark for manufacturing excellence in the field of sanitary
                fittings. Our journey has been marked by a relentless commitment to crafting high-quality products
                that not only meet but exceed the evolving needs of our customers — blending functionality with
                a touch of opulence.
              </p>
            </FadeUp>

            {/* Timeline */}
            <FadeUp delay={0.3} isInView={isInView}>
              <div className="mt-8 flex flex-col gap-5">
                {TIMELINE.map((item) => (
                  <div key={item.year} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0 pt-1">
                      <div className="w-3 h-3 rounded-full bg-[#28166F] shrink-0" />
                      <div className="w-px flex-1 bg-gray-200 mt-1 min-h-[32px]" />
                    </div>
                    <div className="pb-2">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[#28166F] font-bold text-sm"
                          style={{ fontFamily: 'var(--font-playfair-display)' }}
                        >
                          {item.year}
                        </span>
                        <span className="font-semibold text-[#111827] text-sm">{item.title}</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
