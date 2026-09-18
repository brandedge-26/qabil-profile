'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const STATS = [
  { num: '50+', label: 'Years of Excellence' },
  { num: '1000+', label: 'Products' },
  { num: 'Nationwide', label: 'Network' },
  { num: 'Trusted', label: 'Institutions' },
];

function FadeLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#F7F8FA] flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — content */}
          <div className="flex-1 w-full">
            {/* Badge */}
            <FadeLeft delay={0}>
              <div className="inline-block mb-6">
                <span className="border border-[#28166F] text-[#28166F] text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold">
                  Since 1975 · Karachi, Pakistan
                </span>
              </div>
            </FadeLeft>

            {/* H1 */}
            <FadeLeft delay={0.15}>
              <h1
                className="text-5xl lg:text-7xl font-bold text-[#111827] leading-tight mb-4"
                style={{ fontFamily: 'var(--font-playfair-display)' }}
              >
                Manufacturing
                <br />
                Excellence
                <br />
                <span className="text-[#28166F]">Since 1975</span>
              </h1>
            </FadeLeft>

            {/* Subtitle */}
            <FadeLeft delay={0.3}>
              <p className="text-xl text-gray-500 mt-4 max-w-lg leading-relaxed">
                Premium Sanitary Solutions Crafted for Modern Living
              </p>
            </FadeLeft>

            {/* Short description */}
            <FadeLeft delay={0.4}>
              <p className="text-gray-500 mt-4 max-w-lg leading-relaxed text-base">
                Since its establishment in 1975, Qabil Engineering Works has
                emerged as an industry trailblazer — manufacturing high-quality
                brass, stainless steel, and PVC sanitary fittings that combine
                elegance with lasting functionality.
              </p>
            </FadeLeft>

            {/* CTA Buttons */}
            <FadeLeft delay={0.5}>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/pdf/Qabil_New_Profile.pdf"
                  download="Qabil_New_Profile.pdf"
                  className="bg-[#111827] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#28166F] transition-all duration-300 text-sm"
                >
                  Download Company Profile
                </a>
                <a
                  href="#products"
                  className="border-2 border-[#111827] text-[#111827] px-8 py-4 rounded-full font-semibold hover:bg-[#111827] hover:text-white transition-all duration-300 text-sm"
                >
                  Explore Products
                </a>
              </div>
            </FadeLeft>

            {/* Stats */}
            <FadeLeft delay={0.65}>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-start sm:items-center gap-x-6 gap-y-6 sm:gap-0 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center">
                    <div className="sm:text-center sm:px-5 sm:first:pl-0">
                      <div
                        className="text-xl sm:text-2xl font-bold text-[#28166F]"
                        style={{ fontFamily: 'var(--font-playfair-display)' }}
                      >
                        {stat.num}
                      </div>
                      <div className="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                    {i < STATS.length - 1 && (
                      <div className="hidden sm:block w-px h-8 bg-gray-200 mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </FadeLeft>
          </div>

          {/* RIGHT — premium image area */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full lg:max-w-[50%]"
          >
            <div className="relative rounded-3xl min-h-[540px] lg:min-h-[620px] overflow-hidden shadow-2xl">
              {/* Banner image */}
              <Image
                src="/banner.jpg"
                alt="Qabil Premium Sanitary Fittings"
                fill
                className="object-cover"
                priority
              />

              {/* Subtle dark overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Top-left floating card */}
              <div className="absolute top-8 left-8 bg-white/85 backdrop-blur-sm rounded-2xl p-4 shadow-lg z-10">
                <div
                  className="text-xs text-[#28166F] font-bold uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-playfair-display)' }}
                >
                  Qabil® Premium
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">
                  Sanitary Fittings
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
