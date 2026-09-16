'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package } from 'lucide-react';
import Image from 'next/image';
import { CATEGORIES } from '../data/products';

function CategorySection({ category, index }: { category: (typeof CATEGORIES)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: 0.05 * (index % 3) }}
      className="mb-16 last:mb-0"
    >
      {/* Category header */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6 pb-4 border-b border-gray-200">
        <div className="flex-1">
          {category.parent !== 'Basic Bathroom Needs' && (
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold bg-gray-100 px-2.5 py-1 rounded-full">
              {category.parent}
            </span>
          )}
          <h3
            className="text-2xl font-bold text-[#111827] mt-2"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            {category.title}{' '}
            <span className="text-[#28166F]">{category.titleHighlight}</span>
          </h3>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-xl">
            {category.description}
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {category.features.map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-1.5 bg-[#28166F]/5 px-3 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#28166F] shrink-0" />
              <span className="text-[10px] uppercase text-[#28166F] font-semibold whitespace-nowrap">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.3, delay: 0.04 * i }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-[#28166F]/20 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative h-40 bg-gray-50 overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <Package size={32} className="text-gray-200" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <h4 className="font-bold text-sm text-[#111827] mb-1 leading-snug">
                {product.name}
              </h4>
              <div className="text-xs text-[#28166F] font-medium">{product.material}</div>
              {product.size && (
                <div className="text-xs text-gray-400 mt-1">{product.size}</div>
              )}
              <div className="w-6 h-0.5 bg-[#28166F] mt-3" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section id="products" ref={ref} className="bg-[#F3F4F6] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#28166F] font-semibold">
            What We Offer
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#111827] mt-2"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Our Product Range
          </h2>
          <div className="w-12 h-0.5 bg-[#28166F] mx-auto mt-4" />
        </motion.div>

        {/* All categories stacked */}
        {CATEGORIES.map((category, index) => (
          <CategorySection key={category.slug} category={category} index={index} />
        ))}

      </div>
    </section>
  );
}
