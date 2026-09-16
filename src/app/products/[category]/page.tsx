import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Settings,
  Medal,
  Gem,
  Sparkles,
  ShieldCheck,
  Layers,
  Droplets,
  Wrench,
  Star,
  Award,
  Handshake,
} from "lucide-react";
import { getCategoryBySlug, getAllSlugs } from "../../data/products";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ category: slug }));
}

const FEATURE_ICONS = [Shield, Settings, Medal, Gem];

const BADGE_ICONS = [
  { icon: ShieldCheck, label: "Trusted Since 1975" },
  { icon: Settings, label: "Precision Engineering" },
  { icon: Medal, label: "Superior Quality" },
];

const BOTTOM_BADGES = [
  { icon: ShieldCheck, label: "Trusted Since 1975" },
  { icon: Settings, label: "Precision Engineering" },
  { icon: Medal, label: "Superior Quality" },
  { icon: Handshake, label: "Committed to a Better Future" },
];

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-[var(--font-jakarta)]">
      {/* ── Top Header Bar ── */}
      <header className="bg-white border-b border-gray-100 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/qabil-logo.png"
              alt="Qabil Logo"
              width={120}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          {/* Tagline */}
          <p className="text-gray-500 text-sm font-medium text-center hidden md:block">
            Engineering Trust. Delivering Excellence Since 1975.
          </p>

          {/* Badge Icons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {BADGE_ICONS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-full bg-[#28166F]/10 flex items-center justify-center">
                  <Icon size={16} className="text-[#28166F]" />
                </div>
                <span className="text-[10px] text-gray-500 font-medium text-center leading-tight hidden lg:block max-w-[60px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Back Link ── */}
      <div className="max-w-7xl mx-auto px-8 pt-5">
        <Link
          href="/"
          className="text-xs text-gray-400 hover:text-[#28166F] transition-colors inline-flex items-center gap-1"
        >
          ← Back to Profile
        </Link>
      </div>

      {/* ── Hero Section ── */}
      <section className="max-w-7xl mx-auto px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          {/* Left Panel */}
          <div className="lg:w-[45%] bg-white p-10 lg:p-16 flex flex-col justify-center">
            {/* Parent Label Pill */}
            {category.parent !== 'Basic Bathroom Needs' && (
              <span className="inline-block self-start bg-[#28166F] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                {category.parent}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-5">
              <span className="text-black">{category.title} </span>
              <span className="text-[#28166F]">{category.titleHighlight}</span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              {category.description}
            </p>

            {/* Feature Bullets */}
            <ul className="flex flex-col gap-3">
              {category.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                return (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#28166F]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#28166F]" />
                    </div>
                    <span className="text-xs font-bold uppercase text-gray-700 tracking-wide">
                      {feature}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Panel – Image Placeholder */}
          <div className="lg:w-[55%] bg-gray-100 flex items-center justify-center min-h-[400px]">
            <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-gray-300 gap-3 p-16 min-h-[400px]">
              <Layers size={48} className="text-gray-200" />
              <span className="text-sm text-gray-300 text-center">
                {category.title} {category.titleHighlight}
              </span>
              <span className="text-xs text-gray-300">Product Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Collection ── */}
      <section className="max-w-7xl mx-auto px-8 pb-12">
        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold whitespace-nowrap">
            • FEATURED COLLECTION •
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Product Cards Grid */}
        <div
          className={`grid gap-6 ${
            category.products.length === 1
              ? "grid-cols-1 max-w-sm"
              : category.products.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
              : category.products.length >= 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-3"
          }`}
        >
          {category.products.map((product, idx) => (
            <div
              key={`${product.name}-${idx}`}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="bg-gray-50 rounded-lg h-48 mb-4 flex flex-col items-center justify-center gap-2">
                <Droplets size={32} className="text-gray-200" />
                <span className="text-xs text-gray-300">Product Photo</span>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {product.name}
                </h3>
                <p className="text-[#28166F] text-sm font-medium mb-1">
                  Material: {product.material}
                </p>
                {product.size && (
                  <p className="text-gray-400 text-xs mb-2">
                    Size: {product.size}
                  </p>
                )}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="border-b-2 border-[#28166F] w-8 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Years Banner ── */}
      <section className="bg-[#28166F] text-white">
        <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col lg:flex-row items-center gap-10 justify-between">
          {/* Left – 50+ YEARS */}
          <div className="flex flex-col items-center lg:items-start gap-1 flex-shrink-0">
            <span className="text-7xl font-black leading-none">50+</span>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-xs uppercase tracking-widest text-white/70 mt-1">
              YEARS
            </span>
          </div>

          {/* Middle – Tagline */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-px bg-white/30" />
              <Award size={18} className="text-white/60" />
              <div className="w-8 h-px bg-white/30" />
            </div>
            <h2 className="text-xl font-bold uppercase tracking-wide leading-snug max-w-xs">
              Years of Manufacturing Excellence
            </h2>
            <p className="text-white/60 text-xs max-w-sm leading-relaxed">
              Delivering precision-engineered plumbing solutions trusted by
              professionals and homes across Pakistan since 1975.
            </p>
          </div>

          {/* Right – Icon Badges */}
          <div className="grid grid-cols-2 gap-4 flex-shrink-0">
            {BOTTOM_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 bg-white/10 rounded-xl px-4 py-3"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon size={15} className="text-white" />
                </div>
                <span className="text-[10px] text-white/80 text-center leading-tight max-w-[64px] font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer Strip ── */}
      <div className="bg-[#1a0f4f] text-white/40 text-xs text-center py-4 px-8">
        © {new Date().getFullYear()} Qabil Plumbing Solution. All rights
        reserved.
      </div>
    </div>
  );
}
