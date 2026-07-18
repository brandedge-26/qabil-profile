import Link from "next/link";
import {
  Droplets,
  ShowerHead,
  Waves,
  Toilet,
  Gauge,
  CircleDot,
  Pipette,
  Package,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: Droplets,
    title: "All Variety of Faucets",
    desc: "Single lever, bib taps, kitchen & bath mixers",
    slug: "cp-bathroom-fittings",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Fittings & Accessories",
    desc: "CP fittings, stainless steel accessories",
    slug: "cp-bathroom-fittings",
  },
  {
    icon: Waves,
    title: "Basin & Sink Fittings",
    desc: "Basin wastes, bottle traps, bolt kits",
    slug: "basin-fittings",
  },
  {
    icon: Toilet,
    title: "Tub & Commode Fittings",
    desc: "Flush tanks, toilet showers, chain connections",
    slug: "commode-wc-fittings",
  },
  {
    icon: Gauge,
    title: "Valves",
    desc: "Foot valves, ball valves & float valves",
    slug: "valves",
  },
  {
    icon: CircleDot,
    title: "Floor Drains & Clean Out",
    desc: "SS 304 grade, multiple designs available",
    slug: "floor-drain",
  },
  {
    icon: Pipette,
    title: "CP Joined Fittings & Nipples",
    desc: "Brass chrome plated, extension nipples",
    slug: "cp-joined-fittings",
  },
  {
    icon: Package,
    title: "PPRC Pipes & Fittings",
    desc: "Pipe clips, hanging clips, pressure pipes",
    slug: "pipe-fittings",
  },
];

export default function ProductCategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#28166F] font-semibold">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-black mt-2">
            Product Categories
          </h2>
          <div className="w-12 h-0.5 bg-[#28166F] mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {CATEGORIES.map(({ icon: Icon, title, desc, slug }) => (
            <Link
              key={title}
              href={`/products/${slug}`}
              className="bg-white border border-gray-100 rounded-lg p-5 hover:shadow-md hover:border-[#28166F]/20 transition-all group cursor-pointer block"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#28166F]/8 mb-3 group-hover:bg-[#28166F] transition-colors">
                <Icon
                  size={18}
                  className="text-[#28166F] group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-bold text-black text-sm mb-1 leading-snug">
                {title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          * New bathroom sets and more products coming soon. Contact our sales
          team for the full catalog.
        </p>
      </div>
    </section>
  );
}
