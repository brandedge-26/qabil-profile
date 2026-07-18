import { Factory, Settings2, BadgeCheck } from 'lucide-react';

const STRENGTHS = [
  {
    icon: Factory,
    title: 'Direct Manufacturer',
    desc: 'We are not resellers — we manufacture. This allows us to customize products for specific needs and offer pricing that no distributor can match.',
  },
  {
    icon: Settings2,
    title: 'Customization Ready',
    desc: 'Our design and analysis team creates tailored solutions — easy to use, easy to install, and compatible with all standard fittings.',
  },
  {
    icon: BadgeCheck,
    title: 'Extended Warranty',
    desc: 'Every Qabil product comes with an extended warranty beyond industry standard, plus individual spare parts availability for long-term support.',
  },
];

export default function StrengthSection() {
  return (
    <section id="strength" className="py-20 bg-[#28166F]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">Why Choose Us</span>
          <h2 className="text-3xl font-bold text-white mt-2">Strength & Capabilities</h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {STRENGTHS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/10 border border-white/15 rounded-lg p-7 text-white hover:bg-white/15 transition-colors">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/15 mb-5">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-3">{title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="border-t border-white/15 pt-10 text-center">
          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed italic">
            &ldquo;The core strength of QABIL® lies in being manufacturers and pioneers of high-quality
            products — uniquely positioned to customize for any situation or need.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
