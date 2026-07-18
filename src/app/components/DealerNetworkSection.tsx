'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const CITIES = [
  { name: 'Karachi', note: 'Head Office & Outlets' },
  { name: 'Lahore', note: 'Authorized Dealers' },
  { name: 'Islamabad', note: 'Authorized Dealers' },
  { name: 'Hyderabad', note: 'Authorized Dealers' },
  { name: 'Sukkur', note: 'Authorized Dealers' },
  { name: 'Multan', note: 'Authorized Dealers' },
  { name: 'Faisalabad', note: 'Authorized Dealers' },
  { name: 'Quetta', note: 'Authorized Dealers' },
];

export default function DealerNetworkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="dealer-network" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="/dealer-location.jpg"
        alt="Qabil Dealer Network"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#111827]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest text-white font-semibold">
              Nationwide Presence
            </span>
            <span className="bg-white text-[#111827] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
              Coverage
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mt-2"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Dealer Network
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto mt-4" />
          <p className="text-white/60 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Qabil products are available through an extensive network of authorized dealers and outlets across Pakistan.
          </p>
        </motion.div>

        {/* Cities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CITIES.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/20 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <MapPin size={18} className="text-white" />
              </div>
              <div
                className="text-white font-bold text-base"
                style={{ fontFamily: 'var(--font-playfair-display)' }}
              >
                {city.name}
              </div>
              <div className="text-white/50 text-xs mt-1">{city.note}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/30 text-xs text-center mt-10 italic"
        >
          * Network expanding continuously. Contact us to become an authorized dealer.
        </motion.p>

      </div>
    </section>
  );
}
