'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HOSPITALS = [
  'Agha Khan University & Hospital',
  'Liaquat National Hospital',
  'Memon Medical Institute',
  'Kiran Hospital',
  'Tabba Hearts Hospital',
  'DOW University Hospital',
  'SIUT Trust Hospital',
  'Karachi Hospital (Nazimabad)',
];

const GOVT = ['Sindh Assembly', 'Indus Rangers'];

const EDUCATIONAL = [
  'Aga Khan Education Services',
  "Generation's School",
  'DHA Suffa University',
  'BVS Parsi School',
  'United Nations Schools',
];

const PRIVATE = [
  'Regent Plaza Hotel',
  'Meezan Bank HO',
  'Swiss Pharmaceuticals',
  'Bosch Pharmaceuticals',
  'Sami Pharmaceuticals',
  'Youngs (pvt) Ltd',
  'Dolmen Malls',
  'Lucky One Mall',
];

const BUILDERS = [
  'Dolmen (Pvt) Ltd',
  'Lucky Landmark',
  'Machyara Group',
  'Chapal Builders',
  'Ali Lakhani Builders',
  'Saima Builders',
  "King's Builders",
  'Tai Builders',
  'Karim Builders',
  'Maymar Housing',
  'Roomi Builders',
  'Sumair Builders',
  'Lakhani Builders',
  'Al-Ghafoor Builders',
  'Euro Builders',
  'Central Builders',
  'Diamond Builders',
  'Aman Builders',
  'Imtiaz Construction',
  'ZKB Engineers',
];

function ClientPill({ name, variant = 'default' }: { name: string; variant?: 'default' | 'brand' }) {
  return (
    <div
      className={`text-sm font-medium rounded-full px-4 py-2 ${
        variant === 'brand'
          ? 'bg-[#28166F]/5 border border-[#28166F]/15 text-[#28166F]'
          : 'bg-[#F7F8FA] border border-gray-100 text-gray-700'
      }`}
    >
      {name}
    </div>
  );
}

function SubSection({
  title,
  items,
  variant = 'default',
  delay = 0,
  isInView,
}: {
  title: string;
  items: string[];
  variant?: 'default' | 'brand';
  delay?: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay }}
      className="mb-10"
    >
      <h3 className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#28166F] font-semibold mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#28166F] inline-block" />
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {items.map((name) => (
          <ClientPill key={name} name={name} variant={variant} />
        ))}
      </div>
    </motion.div>
  );
}

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="clients" ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-[#28166F] font-semibold">
            Trusted By
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#111827] mt-2"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Trusted By Pakistan&apos;s Best
          </h2>
          <div className="w-12 h-0.5 bg-[#28166F] mx-auto mt-4" />
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Serving a diverse clientele across healthcare, education, government, and real estate sectors nationwide.
          </p>
        </motion.div>

        {/* Client groups */}
        <SubSection title="Hospitals" items={HOSPITALS} variant="brand" delay={0.1} isInView={isInView} />
        <SubSection title="Government Institutions" items={GOVT} variant="brand" delay={0.2} isInView={isInView} />
        <SubSection title="Educational Institutions" items={EDUCATIONAL} variant="brand" delay={0.3} isInView={isInView} />
        <SubSection title="Private Institutions & Corporates" items={PRIVATE} variant="brand" delay={0.4} isInView={isInView} />

        {/* Builders */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#28166F] font-semibold mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#28166F] inline-block" />
            Builders &amp; Contractors
          </h3>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed max-w-2xl">
            Qabil has been the preferred sanitary fitting partner for some of Pakistan&apos;s most reputed
            builders and real estate developers, delivering quality for large-scale residential and commercial projects.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {BUILDERS.map((name) => (
              <ClientPill key={name} name={name} variant="brand" />
            ))}
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-400 text-xs italic text-center"
        >
          * Many more clients procuring directly or via our dealer network across Pakistan.
        </motion.p>

      </div>
    </section>
  );
}
