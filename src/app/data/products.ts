export interface Product {
  name: string;
  code?: string;
  material: string;
  size?: string;
  description: string;
  note?: string;
  image?: string;
}

export interface Category {
  slug: string;
  parent: string;
  title: string;
  titleHighlight: string;
  description: string;
  features: string[];
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "floor-drain",
    parent: "Basic Bathroom Needs",
    title: "Floor",
    titleHighlight: "Drain",
    description:
      "High-quality stainless steel floor drains designed for efficient drainage and lasting performance.",
    features: [
      "STAINLESS STEEL 304 GRADE",
      "MULTIPLE DESIGN OPTIONS",
      "EASY INSTALLATION",
      "CORROSION RESISTANT",
    ],
    products: [
      {
        name: "Floor Drain",
        code: "QFD08",
        material: "St. Steel 304 Grade",
        size: '6"×6"',
        description: "Standard round floor drain with 304 grade stainless steel construction.",
        note: "*Various other designs available",
        image: "/products/floor-drain/Floor Drain.jpg",
      },
      {
        name: "Floor Drain (Tile Insert)",
        code: "QFD33",
        material: "St. Steel 304 Grade",
        size: '6"×6"',
        description: "Square tile insert drain for seamless bathroom floor integration.",
        note: "*Various other designs available",
        image: "/products/floor-drain/Floor Drain (Tile Insert).jpg",
      },
    ],
  },
  {
    slug: "basin-fittings",
    parent: "Basic Bathroom Needs",
    title: "Basin",
    titleHighlight: "Fittings",
    description:
      "Premium brass basin fittings designed for durability and a perfect finish in modern bathrooms.",
    features: [
      "PREMIUM BRASS MATERIAL",
      "VARIOUS SIZE OPTIONS",
      "DURABLE CONSTRUCTION",
      "QUALITY ASSURED",
    ],
    products: [
      {
        name: "Bolt Kits",
        material: "SS 304 Grade Rods & Brass Nuts",
        description: "High-strength bolt kits for secure basin fixing.",
        note: "*Various other options available",
        image: "/products/basin fittings/Bolt kits.jpg",
      },
      {
        name: "Bottle Traps",
        material: "Brass (CP) & ABS Plastic (Battery Grade)",
        size: '1¼" and 1½"',
        description: "Elegant bottle traps in brass or ABS finish.",
        image: "/products/basin fittings/Bottle-Traps.jpg",
      },
      {
        name: "Basin Wastes",
        material: "Brass",
        size: '1¼" & 1½"',
        description: "Standard basin waste fittings in durable brass.",
        note: "*Various other types available",
        image: "/products/basin fittings/Basin Waster.jpg",
      },
      {
        name: "Basin Wastes",
        code: "QBW05",
        material: "Brass",
        size: '1¼" & 1½"',
        description: "Premium pop-up basin waste with smooth operation.",
        note: "*Various other types available",
        image: "/products/basin fittings/Basin Waster (2).jpg",
      },
    ],
  },
  {
    slug: "commode-wc-fittings",
    parent: "Basic Bathroom Needs",
    title: "Commode &",
    titleHighlight: "WC Fittings",
    description:
      "Reliable commode and WC fittings built for easy installation and long-lasting performance.",
    features: [
      "PURE PVC MATERIAL",
      "SOFT PUSH BUTTON",
      "6-12L ADJUSTABLE FILL",
      "EASY INSTALLATION",
    ],
    products: [
      {
        name: "Commode Connectors",
        material: "Plastic (Battery Grade)",
        size: '5"×4"',
        description: "Flexible commode connectors for secure toilet installation.",
        note: "*Other types available",
        image: "/products/commode and wc fitting/Commode Connectors.jpg",
      },
      {
        name: "Flush Tank",
        material: "Pure PVC",
        size: "6-12 Liters",
        description: "Pure PVC flush tank with soft push button and adjustable fill.",
        image: "/products/commode and wc fitting/Flush Tank.jpg",
      },
      {
        name: "Chain Connections",
        material: "S. Steel 304Grade & Nuts in Brass (CP)",
        size: '18" and 24"',
        description: "Stainless steel chain connections for reliable flush operation.",
        image: "/products/commode and wc fitting/Chain Connections.jpg",
      },
      {
        name: "Toilet Showers",
        material: "PVC",
        size: "1 meter S. Steel chain",
        description: "PVC toilet shower with high-quality stainless steel chain.",
        note: "*Colors: all basic colors and chrome available",
        image: "/products/commode and wc fitting/Toilet Showers.jpg",
      },
    ],
  },
  {
    slug: "cp-joined-fittings",
    parent: "CP Fittings",
    title: "CP Joined",
    titleHighlight: "Fittings",
    description:
      "Chrome-plated brass joined fittings for all standard plumbing connections.",
    features: [
      "BRASS CHROME PLATED",
      "MULTIPLE THREAD SIZES",
      "MxF THREAD TYPE",
      "VARIOUS LENGTHS",
    ],
    products: [
      {
        name: "Extension CP Nipple",
        material: "Brass, Chrome Plated",
        size: '½" thread MxF, Lengths: 1"-1½"-2"-3"-4"-6"',
        description: "Extension nipples for flexible reach in tight plumbing spaces.",
        note: "*Various other thread sizes available",
        image: "/products/cp joinded fiting/Extension CP Nipple.jpg",
      },
      {
        name: "CP Joined Fitting",
        material: "Brass, Chrome Plated",
        size: '½" threads',
        description: "T-joint and other joined fittings in polished chrome brass.",
        note: "*Various other options available",
        image: "/products/cp joinded fiting/CP Joined Fitting.jpg",
      },
    ],
  },
  {
    slug: "valves",
    parent: "CP Fittings",
    title: "Valves &",
    titleHighlight: "Controls",
    description:
      "Industrial-grade brass valves built for precise flow control and long service life.",
    features: [
      "BRASS BODY CONSTRUCTION",
      "SS 304 GRADE HANDLE",
      "WIDE SIZE RANGE",
      "PRESSURE TESTED",
    ],
    products: [
      {
        name: "Handle Valve",
        material: "Brass Body + S.S. 304 Grade Handle & Nut",
        size: '½", ¾", 1", 1¼", 1½", 2"',
        description: "Heavy-duty handle valve with stainless steel handle for easy operation.",
        image: "/products/valve/Handle Valve.jpg",
      },
      {
        name: "Foot Valve",
        material: "Gun Metal Brass",
        size: '1", 1¼", 1½", 2", 2½", 3", 4", 5", 6"',
        description: "Gun metal brass foot valves for pump suction lines and water systems.",
        image: "/products/valve/Foot Valve.jpg",
      },
    ],
  },
  {
    slug: "cp-bathroom-fittings",
    parent: "Basic Bathroom Needs",
    title: "CP Bathroom",
    titleHighlight: "Fittings & Accessories",
    description:
      "Premium CP Bathroom Fittings crafted for everyday elegance and lasting performance.",
    features: [
      "PREMIUM BRASS CONSTRUCTION",
      "HIGH GLOSS CHROME FINISH",
      "LEAK PROOF TECHNOLOGY",
      "BUILT TO LAST 10+ YEARS",
    ],
    products: [
      {
        name: "Single Lever Bath Mixers",
        material: "Brass",
        description: "Sleek design with smooth operation and long-lasting chrome finish.",
        note: "*Various other designs and color options available",
        image: "/products/CP Bathroom fittings & accessorice/Single Lever Bath Mixers.jpg",
      },
      {
        name: "Single Lever Basin Mixers",
        material: "Brass",
        description: "Modern elegance with precision control and durable performance.",
        note: "*Various other designs and color options available",
        image: "/products/CP Bathroom fittings & accessorice/Single Lever Basin Mixers.jpg",
      },
      {
        name: "Kitchen Mixers Counter Mount",
        material: "Brass",
        description: "Functional design for everyday convenience and reliability.",
        note: "*Various other designs available",
        image: "/products/CP Bathroom fittings & accessorice/Kitchen Mixers Counter Mount.jpg",
      },
      {
        name: "Kitchen Mixers Wall Mount",
        material: "Brass",
        description: "Space-saving wall mount design for modern kitchens.",
        note: "*Various other designs available",
        image: "/products/CP Bathroom fittings & accessorice/Kitchen Mixers Wall Mount.jpg",
      },
      {
        name: "Bib Taps",
        material: "Brass",
        description: "Classic bib taps in solid brass with chrome plating.",
        note: "*Various other designs available",
        image: "/products/CP Bathroom fittings & accessorice/Bib Taps.jpg",
      },
      {
        name: "Bathroom Accessories",
        material: "Stainless Steel",
        description: "Complete range of bathroom accessories in stainless steel.",
        note: "*Various other designs available",
        image: "/products/CP Bathroom fittings & accessorice/Bathroom Accessories.jpg",
      },
    ],
  },
  {
    slug: "pipe-fittings",
    parent: "Pipe Fittings",
    title: "Pipe",
    titleHighlight: "Fittings",
    description:
      "Galvanized iron pipe fittings and clips for secure pipe mounting in all environments.",
    features: [
      "GALVANIZED IRON MATERIAL",
      "RUBBER LINED OPTIONS",
      "WIDE SIZE RANGE",
      "WEATHER RESISTANT",
    ],
    products: [
      {
        name: "Pipe Clips",
        material: "Iron (Galvanized)",
        size: '½", ¾", 1", 1¼", 1½", 2", 3", 4", 6"',
        description: "Galvanized iron pipe clips for wall and ceiling mounting.",
        image: "/products/pipe fitting/Pipe Clips.jpg",
      },
      {
        name: "Hanging Clips",
        material: "Iron (Galvanized) with Rubber",
        size: '½", ¾", 1", 1¼", 1½", 2", 3", 4", 6"',
        description: "Rubber-lined hanging clips for vibration-free pipe suspension.",
        image: "/products/pipe fitting/Hanging Clips.jpg",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return CATEGORIES.map((c) => c.slug);
}
