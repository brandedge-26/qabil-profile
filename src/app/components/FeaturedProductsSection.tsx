const PRODUCTS = [
  {
    name: 'Floor Drain',
    material: 'St. Steel 304 Grade',
    size: '6" × 6"',
    tag: 'Best Seller',
  },
  {
    name: 'Single Lever Basin Mixer',
    material: 'Brass (CP Finish)',
    size: 'Standard',
    tag: 'Premium',
  },
  {
    name: 'Handle Valve',
    material: 'Brass Body + SS 304 Handle',
    size: '½" to 2"',
    tag: 'Industrial Grade',
  },
];

export default function FeaturedProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#28166F] font-semibold">Highlights</span>
          <h2 className="text-3xl font-bold text-black mt-2">Featured Products</h2>
          <div className="w-12 h-0.5 bg-[#28166F] mx-auto mt-4" />
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">

              {/* Image placeholder */}
              <div className="bg-gray-50 h-48 flex flex-col items-center justify-center border-b border-gray-100">
                <div className="w-16 h-16 rounded-full bg-[#28166F]/8 flex items-center justify-center mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#28166F" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <span className="text-xs text-gray-300">Product Image</span>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-black text-sm leading-snug">{p.name}</h3>
                  <span className="text-xs bg-[#28166F]/8 text-[#28166F] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                    {p.tag}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  <div><span className="font-medium text-gray-700">Material:</span> {p.material}</div>
                  <div><span className="font-medium text-gray-700">Size:</span> {p.size}</div>
                </div>

                <button className="w-full border border-[#28166F] text-[#28166F] text-xs font-semibold py-2 rounded hover:bg-[#28166F] hover:text-white transition-colors cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
