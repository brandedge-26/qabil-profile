'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const TIMELINE = [
  {
    year: '1963',
    title: 'A Legacy Begins',
    desc: 'Chairman Mr. Abid Hussain undertook major city development projects and supplied to the Army and Government sectors. Alongside these ventures, he established expertise in the manufacturing of a diverse range of sanitary and plumbing products.',
  },
  {
    year: '1975',
    title: 'Qabil Engineering Works Established',
    desc: "Qabil Engineering Works was established in Karachi, marking a significant milestone in the company's journey. The company pioneered the manufacturing of a wide range of plumbing products, laying the foundation for its growing industry presence.",
  },
  {
    year: '1990',
    title: 'Product Portfolio Expansion',
    desc: 'Qabil expanded its product portfolio in response to evolving market requirements and emerging industry trends. The focus remained on introducing modern products with superior quality, durability, and reliable performance.',
  },
  {
    year: '2010',
    title: 'Nationwide Distribution',
    desc: 'Qabil expanded its distribution network through company-operated outlets and authorized dealerships across major cities of Pakistan.',
  },
  {
    year: '2025',
    title: 'A Trusted Industry Name',
    desc: 'With decades of experience, quality maintain and a continually evolving product portfolio, Qabil further strengthened its position within the sanitary and plumbing industry.',
  },
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
                src="/shop.png"
                alt="Qabil Plumbing Solutions Story"
                fill
                className="object-cover"
              />
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
                Six Decades of
                <br />
                <span className="text-[#28166F]">Plumbing Excellence</span>
              </h2>
            </FadeUp>

            {/* Timeline */}
            <FadeUp delay={0.2} isInView={isInView}>
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
