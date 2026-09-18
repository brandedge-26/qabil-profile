'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const OUTLETS = [
  {
    name: 'Head Office',
    location: 'Karachi',
    address: 'Office No 1201, 12th Floor, Roshan Trade Center, Shaheed-e-Millat Rd, Bahadurabad BYJCHS, Karachi.',
    phone: '021-34124865',
    tel: '+922134124865',
    highlight: true,
  },
  {
    name: 'Sales Outlet',
    location: 'Gulbahar',
    address: 'Plot 1096/A, Shop No 2 & 3, Gulbahar Colony No 1.',
    phone: '92-21-36684190',
    tel: '+922136684190',
    highlight: false,
  },
  {
    name: 'Sales Outlet',
    location: 'Stadium Road',
    address: 'Shop No 5, Salwa Arcade, Stadium Road, Overseas C.H.S. Society.',
    phone: '92-21-34924865',
    tel: '+922134924865',
    highlight: false,
  },
  {
    name: 'Sales Outlet',
    location: 'D.H.A.',
    address: 'Plot No 36-C, Lane No 11, Bukhari Commercial, Phase VI DHA.',
    phone: '92-21-35841242',
    tel: '+922135841242',
    highlight: false,
  },
];

function FadeUp({ children, delay = 0, isInView }: { children: React.ReactNode; delay?: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="contact" ref={ref} className="bg-[#F7F8FA] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <FadeUp delay={0} isInView={isInView}>
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#28166F] font-semibold">
              Get In Touch
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#111827] mt-2"
              style={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              Get In Touch
            </h2>
            <div className="w-12 h-0.5 bg-[#28166F] mx-auto mt-4" />
          </div>
        </FadeUp>

        {/* Consumer care banner */}
        <FadeUp delay={0.1} isInView={isInView}>
          <div className="bg-[#28166F] rounded-3xl p-8 text-center mb-10">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-3">
              Consumer Care
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              <a
                href="tel:03041114566"
                className="text-white font-bold text-3xl hover:text-white/80 transition-colors flex items-center gap-2"
              >
                <Phone size={22} />
                0304-111-4566
              </a>
              <span className="text-white/20 hidden md:block text-3xl font-thin">|</span>
              <a
                href="tel:03341114566"
                className="text-white font-bold text-3xl hover:text-white/80 transition-colors flex items-center gap-2"
              >
                <Phone size={22} />
                0334-111-4566
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
              <a
                href="mailto:qabilbrothers@gmail.com"
                className="text-white/70 text-sm hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} />
                qabilbrothers@gmail.com
              </a>
              <a
                href="https://www.qabil.com.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Globe size={14} />
                www.qabil.com.pk
              </a>
              <a
                href="https://www.facebook.com/qabilsanitary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                fb.com/qabilsanitary
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Outlets grid — 2x2 */}
        <FadeUp delay={0.2} isInView={isInView}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OUTLETS.map((outlet) => (
              <div
                key={outlet.location}
                className={`rounded-2xl bg-white p-6 border transition-shadow hover:shadow-md ${
                  outlet.highlight
                    ? 'border-[#28166F] border-2'
                    : 'border-[#E5E7EB]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#28166F] font-semibold">
                      {outlet.name}
                    </span>
                    <h3
                      className="font-bold text-[#111827] text-lg mt-0.5"
                      style={{ fontFamily: 'var(--font-playfair-display)' }}
                    >
                      {outlet.location}
                    </h3>
                  </div>
                  {outlet.highlight && (
                    <span className="text-xs bg-[#28166F] text-white px-2.5 py-1 rounded-full font-semibold shrink-0 ml-2">
                      HQ
                    </span>
                  )}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed flex items-start gap-2 mb-4">
                  <MapPin size={14} className="text-[#28166F] mt-0.5 shrink-0" />
                  {outlet.address}
                </p>

                <a
                  href={`tel:${outlet.tel}`}
                  className="text-sm text-[#28166F] font-semibold flex items-center gap-2 hover:underline"
                >
                  <Phone size={14} />
                  {outlet.phone}
                </a>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
