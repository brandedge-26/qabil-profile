import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import path from 'path';

const PRIMARY = '#28166F';
const DARK = '#111827';
const GRAY = '#6B7280';
const LIGHT = '#F7F8FA';

const pub = (p: string) => path.join(process.cwd(), 'public', p);

const styles = StyleSheet.create({
  page: { fontFamily: 'Helvetica', backgroundColor: '#ffffff', paddingBottom: 48 },
  logoHeader: { alignItems: 'center', paddingTop: 24, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: '#E5E7EB', marginHorizontal: 40 },
  logo: { width: 80, height: 40, objectFit: 'contain' },
  content: { paddingHorizontal: 40, paddingTop: 22 },
  label: { fontSize: 7, color: PRIMARY, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 5 },
  h2: { fontSize: 20, color: DARK, fontFamily: 'Helvetica-Bold', marginBottom: 6 },
  divider: { width: 30, height: 2, backgroundColor: PRIMARY, marginTop: 8, marginBottom: 18 },
  bodyText: { fontSize: 9, color: GRAY, lineHeight: 1.7, marginBottom: 10 },
  coverHero: { backgroundColor: PRIMARY, borderRadius: 12, padding: 34, marginBottom: 22, alignItems: 'center' },
  coverTitle: { fontSize: 28, color: '#ffffff', fontFamily: 'Helvetica-Bold', textAlign: 'center', marginBottom: 5 },
  coverSub: { fontSize: 10, color: 'rgba(255,255,255,0.7)', textAlign: 'center', letterSpacing: 1 },
  coverBadge: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 5, marginTop: 12 },
  coverBadgeText: { fontSize: 8, color: '#ffffff', letterSpacing: 1.5, textTransform: 'uppercase' },
  statsRow: { flexDirection: 'row', marginHorizontal: 40, marginBottom: 20, gap: 8 },
  statBox: { flex: 1, backgroundColor: LIGHT, borderRadius: 8, padding: 10, alignItems: 'center' },
  statNum: { fontSize: 16, color: PRIMARY, fontFamily: 'Helvetica-Bold' },
  statLabel: { fontSize: 7, color: GRAY, textTransform: 'uppercase', letterSpacing: 1, marginTop: 3, textAlign: 'center' },
  timelineRow: { flexDirection: 'row', gap: 8, marginBottom: 8, alignItems: 'flex-start' },
  timelineDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: PRIMARY, marginTop: 2 },
  timelineYear: { fontSize: 8, color: PRIMARY, fontFamily: 'Helvetica-Bold' },
  timelineTitle: { fontSize: 8, color: DARK, fontFamily: 'Helvetica-Bold', marginLeft: 5 },
  timelineDesc: { fontSize: 7.5, color: GRAY, marginTop: 1 },
  catHeader: { backgroundColor: PRIMARY, borderRadius: 8, padding: 12, marginBottom: 12 },
  catLabel: { fontSize: 7, color: 'rgba(255,255,255,0.6)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 3 },
  catTitle: { fontSize: 14, color: '#ffffff', fontFamily: 'Helvetica-Bold' },
  catDesc: { fontSize: 8, color: 'rgba(255,255,255,0.7)', marginTop: 4, lineHeight: 1.5 },
  productGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  productCard: { width: '31%', backgroundColor: LIGHT, borderRadius: 6, padding: 8, borderLeftWidth: 2, borderLeftColor: PRIMARY },
  productImage: { width: '100%', height: 65, objectFit: 'contain', backgroundColor: '#ffffff', borderRadius: 4, marginBottom: 5 },
  productCode: { fontSize: 7, color: GRAY, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 },
  productName: { fontSize: 8, color: DARK, fontFamily: 'Helvetica-Bold', marginBottom: 2 },
  productMaterial: { fontSize: 7, color: PRIMARY },
  productSize: { fontSize: 7, color: GRAY, marginTop: 1 },
  capGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  capCard: { width: '47%', backgroundColor: LIGHT, borderRadius: 8, padding: 12, marginBottom: 4 },
  capDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: PRIMARY, marginBottom: 7 },
  capTitle: { fontSize: 9, color: DARK, fontFamily: 'Helvetica-Bold', marginBottom: 3 },
  capDesc: { fontSize: 8, color: GRAY, lineHeight: 1.5 },
  pillsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginBottom: 10 },
  pill: { backgroundColor: `${PRIMARY}15`, borderRadius: 20, paddingHorizontal: 9, paddingVertical: 3, borderWidth: 1, borderColor: `${PRIMARY}30` },
  pillText: { fontSize: 7.5, color: PRIMARY },
  clientGroup: { marginBottom: 12 },
  contactBanner: { backgroundColor: PRIMARY, borderRadius: 10, padding: 18, alignItems: 'center', marginBottom: 14 },
  contactPhone: { fontSize: 16, color: '#ffffff', fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  contactInfo: { fontSize: 8.5, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  outletGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  outletCard: { width: '47%', backgroundColor: LIGHT, borderRadius: 8, padding: 12 },
  outletName: { fontSize: 7, color: PRIMARY, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 },
  outletCity: { fontSize: 10, color: DARK, fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  outletAddress: { fontSize: 7.5, color: GRAY, lineHeight: 1.5, marginBottom: 4 },
  outletPhone: { fontSize: 8, color: PRIMARY, fontFamily: 'Helvetica-Bold' },
  pageFooter: { position: 'absolute', bottom: 14, left: 40, right: 40, flexDirection: 'row', justifyContent: 'space-between' },
  footerText: { fontSize: 7, color: '#D1D5DB' },
});

const CATEGORIES = [
  { slug: 'floor-drain', parent: 'Basic Bathroom Needs', title: 'Floor', titleHighlight: 'Drain', description: 'High-quality stainless steel floor drains designed for efficient drainage and lasting performance.', products: [{ name: 'Floor Drain', code: 'QFD08', material: 'St. Steel 304 Grade', size: '6"×6"', image: pub('products/floor-drain/Floor Drain.jpg') }, { name: 'Floor Drain (Tile Insert)', code: 'QFD33', material: 'St. Steel 304 Grade', size: '6"×6"', image: pub('products/floor-drain/Floor Drain (Tile Insert).jpg') }] },
  { slug: 'basin-fittings', parent: 'Basic Bathroom Needs', title: 'Basin', titleHighlight: 'Fittings', description: 'Premium brass basin fittings designed for durability and a perfect finish in modern bathrooms.', products: [{ name: 'Bolt Kits', material: 'SS 304 Grade Rods & Brass Nuts', image: pub('products/basin fittings/Bolt kits.jpg') }, { name: 'Bottle Traps', material: 'Brass (CP) & ABS Plastic', size: '1¼" and 1½"', image: pub('products/basin fittings/Bottle-Traps.jpg') }, { name: 'Basin Wastes', material: 'Brass', size: '1¼" & 1½"', image: pub('products/basin fittings/Basin Waster.jpg') }, { name: 'Basin Wastes (QBW05)', material: 'Brass', size: '1¼" & 1½"', image: pub('products/basin fittings/Basin Waster (2).jpg') }] },
  { slug: 'commode-wc-fittings', parent: 'Basic Bathroom Needs', title: 'Commode &', titleHighlight: 'WC Fittings', description: 'Reliable commode and WC fittings built for easy installation and long-lasting performance.', products: [{ name: 'Commode Connectors', material: 'Plastic (Battery Grade)', size: '5"×4"', image: pub('products/commode and wc fitting/Commode Connectors.jpg') }, { name: 'Flush Tank', material: 'Pure PVC', size: '6-12 Liters', image: pub('products/commode and wc fitting/Flush Tank.jpg') }, { name: 'Chain Connections', material: 'S. Steel 304Grade & Nuts in Brass (CP)', size: '18" and 24"', image: pub('products/commode and wc fitting/Chain Connections.jpg') }, { name: 'Toilet Showers', material: 'PVC', size: '1 meter S. Steel chain', image: pub('products/commode and wc fitting/Toilet Showers.jpg') }] },
  { slug: 'cp-joined-fittings', parent: 'CP Fittings', title: 'CP Joined', titleHighlight: 'Fittings', description: 'Chrome-plated brass joined fittings for all standard plumbing connections.', products: [{ name: 'Extension CP Nipple', material: 'Brass, Chrome Plated', size: '½" thread MxF', image: pub('products/cp joinded fiting/Extension CP Nipple.jpg') }, { name: 'CP Joined Fitting', material: 'Brass, Chrome Plated', size: '½" threads', image: pub('products/cp joinded fiting/CP Joined Fitting.jpg') }] },
  { slug: 'valves', parent: 'CP Fittings', title: 'Valves &', titleHighlight: 'Controls', description: 'Industrial-grade brass valves built for precise flow control and long service life.', products: [{ name: 'Handle Valve', material: 'Brass Body + S.S. 304 Grade Handle & Nut', size: '½", ¾", 1", 1¼", 1½", 2"', image: pub('products/valve/Handle Valve.jpg') }, { name: 'Foot Valve', material: 'Gun Metal Brass', size: '1", 1¼", 1½", 2", 2½", 3"', image: pub('products/valve/Foot Valve.jpg') }] },
  { slug: 'cp-bathroom-fittings', parent: 'Basic Bathroom Needs', title: 'CP Bathroom', titleHighlight: 'Fittings & Accessories', description: 'Premium CP Bathroom Fittings crafted for everyday elegance and lasting performance.', products: [{ name: 'Single Lever Bath Mixers', material: 'Brass', image: pub('products/CP Bathroom fittings & accessorice/Single Lever Bath Mixers.jpg') }, { name: 'Single Lever Basin Mixers', material: 'Brass', image: pub('products/CP Bathroom fittings & accessorice/Single Lever Basin Mixers.jpg') }, { name: 'Kitchen Mixers Counter Mount', material: 'Brass', image: pub('products/CP Bathroom fittings & accessorice/Kitchen Mixers Counter Mount.jpg') }, { name: 'Kitchen Mixers Wall Mount', material: 'Brass', image: pub('products/CP Bathroom fittings & accessorice/Kitchen Mixers Wall Mount.jpg') }, { name: 'Bib Taps', material: 'Brass', image: pub('products/CP Bathroom fittings & accessorice/Bib Taps.jpg') }, { name: 'Bathroom Accessories', material: 'Stainless Steel', image: pub('products/CP Bathroom fittings & accessorice/Bathroom Accessories.jpg') }] },
  { slug: 'pipe-fittings', parent: 'Pipe Fittings', title: 'Pipe', titleHighlight: 'Fittings', description: 'Galvanized iron pipe fittings and clips for secure pipe mounting in all environments.', products: [{ name: 'Pipe Clips', material: 'Iron (Galvanized)', size: '½" to 6"', image: pub('products/pipe fitting/Pipe Clips.jpg') }, { name: 'Hanging Clips', material: 'Iron (Galvanized) with Rubber', size: '½" to 6"', image: pub('products/pipe fitting/Hanging Clips.jpg') }] },
];

const TIMELINE = [
  { year: '1975', title: 'Founded', desc: 'Qabil Engineering Works established in Karachi, Pakistan.' },
  { year: '1990', title: 'City Expansion', desc: 'Extended distribution to major cities across Pakistan.' },
  { year: '2005', title: 'CP Fittings Range', desc: 'Introduced a comprehensive chrome-plated fittings product line.' },
  { year: '2024', title: 'Nationwide Network', desc: 'Established a robust nationwide dealer and outlet network.' },
];

const CAPABILITIES = [
  { title: 'Direct Manufacturer', desc: 'We manufacture everything in-house, ensuring strict quality control and competitive pricing.' },
  { title: 'Custom Solutions', desc: 'Products tailored to your specific project needs, from size to finish.' },
  { title: 'Extended Warranty', desc: 'Industry-leading warranty coverage with individual spare parts availability.' },
  { title: 'Quality Assured', desc: 'Every product tested against international standards before delivery.' },
  { title: 'Design Innovation', desc: 'In-house R&D team continuously developing new product lines.' },
  { title: 'Expert Support', desc: 'Dedicated technical team assisting architects, builders, and plumbers.' },
];

const HOSPITALS = ['Agha Khan University & Hospital', 'Liaquat National Hospital', 'Memon Medical Institute', 'Kiran Hospital', 'Tabba Hearts Hospital', 'DOW University Hospital', 'SIUT Trust Hospital', 'Karachi Hospital (Nazimabad)'];
const GOVT = ['Sindh Assembly', 'Indus Rangers'];
const EDUCATIONAL = ['Aga Khan Education Services', "Generation's School", 'DHA Suffa University', 'BVS Parsi School', 'United Nations Schools'];
const PRIVATE = ['Regent Plaza Hotel', 'Meezan Bank HO', 'Swiss Pharmaceuticals', 'Bosch Pharmaceuticals', 'Sami Pharmaceuticals', 'Youngs (pvt) Ltd', 'Dolmen Malls', 'Lucky One Mall'];
const BUILDERS = ['Dolmen (Pvt) Ltd', 'Lucky Landmark', 'Machyara Group', 'Chapal Builders', 'Ali Lakhani Builders', 'Saima Builders', "King's Builders", 'Tai Builders', 'Karim Builders', 'Maymar Housing', 'Roomi Builders', 'Sumair Builders', 'Lakhani Builders', 'Al-Ghafoor Builders', 'Euro Builders', 'Central Builders', 'Diamond Builders', 'Aman Builders', 'Imtiaz Construction', 'ZKB Engineers'];

const OUTLETS = [
  { name: 'Head Office', city: 'DHA Karachi', address: 'Plot No 2-C, Mezzanine Floor, Street No 8, Khayaban-e-Jami Phase VII, DHA Karachi.', phone: '92-21-35314218' },
  { name: 'Sales Outlet', city: 'Gulbahar', address: 'Plot 1096/A, Shop No 2 & 3, Gulbahar Colony No 1.', phone: '92-21-36684190' },
  { name: 'Sales Outlet', city: 'Stadium Road', address: 'Shop No 5, Salwa Arcade, Stadium Road, Overseas C.H.S. Society.', phone: '92-21-34924865' },
  { name: 'Sales Outlet', city: 'D.H.A.', address: 'Plot No 36-C, Lane No 11, Bukhari Commercial, Phase VI DHA.', phone: '92-21-35841242' },
];

function LogoHeader() {
  return (
    <View style={styles.logoHeader}>
      <Image src={pub('qabil-logo.png')} style={styles.logo} />
    </View>
  );
}

function Footer({ label }: { label: string }) {
  return (
    <View style={styles.pageFooter}>
      <Text style={styles.footerText}>© 2025 Qabil Engineering Works</Text>
      <Text style={styles.footerText}>{label}</Text>
      <Text style={styles.footerText}>www.qabil.com.pk</Text>
    </View>
  );
}

export default function QabilPdfDocument() {
  return (
    <Document title="Qabil Engineering Works — Company Profile">

      {/* Cover */}
      <Page size="A4" style={styles.page}>
        <LogoHeader />
        <View style={styles.content}>
          <View style={styles.coverHero}>
            <Text style={styles.coverTitle}>Qabil Engineering Works</Text>
            <Text style={styles.coverSub}>Premium Sanitary Fittings · Karachi, Pakistan</Text>
            <View style={styles.coverBadge}>
              <Text style={styles.coverBadgeText}>Manufacturing Excellence Since 1975</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsRow}>
          {[['50+', 'Years of Excellence'], ['1000+', 'Products'], ['Nationwide', 'Network'], ['Trusted', 'Institutions']].map(([num, lbl]) => (
            <View key={lbl} style={styles.statBox}>
              <Text style={styles.statNum}>{num}</Text>
              <Text style={styles.statLabel}>{lbl}</Text>
            </View>
          ))}
        </View>
        <View style={[styles.content, { paddingTop: 0 }]}>
          <Text style={styles.label}>Company Overview</Text>
          <Text style={styles.bodyText}>Since its establishment in 1975, Qabil Engineering Works has emerged as an industry trailblazer, pioneering innovation and setting a benchmark for manufacturing excellence in the field of sanitary fittings.</Text>
          <Text style={styles.label}>Our Journey</Text>
          {TIMELINE.map((item) => (
            <View key={item.year} style={styles.timelineRow}>
              <View style={styles.timelineDot} />
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.timelineYear}>{item.year}{'  '}</Text>
                  <Text style={styles.timelineTitle}>{item.title}</Text>
                </View>
                <Text style={styles.timelineDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
        <Footer label="Company Profile" />
      </Page>

      {/* Products */}
      {CATEGORIES.map((cat) => (
        <Page key={cat.slug} size="A4" style={styles.page}>
          <LogoHeader />
          <View style={styles.content}>
            <View style={styles.catHeader}>
              {cat.parent !== 'Basic Bathroom Needs' && (
                <Text style={styles.catLabel}>{cat.parent}</Text>
              )}
              <Text style={styles.catTitle}>{cat.title} {cat.titleHighlight}</Text>
              <Text style={styles.catDesc}>{cat.description}</Text>
            </View>
            <View style={styles.productGrid}>
              {cat.products.map((p, i) => (
                <View key={i} style={styles.productCard}>
                  {p.image && <Image src={p.image} style={styles.productImage} />}
                  <Text style={styles.productName}>{p.name}</Text>
                  <Text style={styles.productMaterial}>{p.material}</Text>
                  {'size' in p && p.size && <Text style={styles.productSize}>{p.size}</Text>}
                </View>
              ))}
            </View>
          </View>
          <Footer label={`${cat.title} ${cat.titleHighlight}`} />
        </Page>
      ))}

      {/* Capabilities */}
      <Page size="A4" style={styles.page}>
        <LogoHeader />
        <View style={styles.content}>
          <Text style={styles.label}>Why Choose Us</Text>
          <Text style={styles.h2}>Strength & Capabilities</Text>
          <View style={styles.divider} />
          <Text style={styles.bodyText}>The core strength of QABIL lies in being manufacturers and pioneers of high-quality products — uniquely positioned to customize for any situation or need.</Text>
          <View style={styles.capGrid}>
            {CAPABILITIES.map((cap) => (
              <View key={cap.title} style={styles.capCard}>
                <View style={styles.capDot} />
                <Text style={styles.capTitle}>{cap.title}</Text>
                <Text style={styles.capDesc}>{cap.desc}</Text>
              </View>
            ))}
          </View>
        </View>
        <Footer label="Strength & Capabilities" />
      </Page>

      {/* Clients */}
      <Page size="A4" style={styles.page}>
        <LogoHeader />
        <View style={styles.content}>
          <Text style={styles.label}>Trusted By</Text>
          <Text style={styles.h2}>{"Pakistan's Best"}</Text>
          <View style={styles.divider} />
          {[
            { title: 'Hospitals', items: HOSPITALS },
            { title: 'Government Institutions', items: GOVT },
            { title: 'Educational Institutions', items: EDUCATIONAL },
            { title: 'Private Institutions & Corporates', items: PRIVATE },
          ].map(({ title, items }) => (
            <View key={title} style={styles.clientGroup}>
              <Text style={[styles.label, { marginBottom: 5 }]}>{title}</Text>
              <View style={styles.pillsRow}>
                {items.map((name) => (
                  <View key={name} style={styles.pill}>
                    <Text style={styles.pillText}>{name}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
          <View style={styles.clientGroup}>
            <Text style={[styles.label, { marginBottom: 5 }]}>Builders & Contractors</Text>
            <View style={styles.pillsRow}>
              {BUILDERS.map((name) => (
                <View key={name} style={styles.pill}>
                  <Text style={styles.pillText}>{name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <Footer label="Our Clients" />
      </Page>

      {/* Contact */}
      <Page size="A4" style={styles.page}>
        <LogoHeader />
        <View style={styles.content}>
          <Text style={styles.label}>Get In Touch</Text>
          <Text style={styles.h2}>Contact Us</Text>
          <View style={styles.divider} />
          <View style={styles.contactBanner}>
            <Text style={[styles.label, { color: 'rgba(255,255,255,0.6)', marginBottom: 5 }]}>Consumer Care</Text>
            <Text style={styles.contactPhone}>0304-111-4566  |  0334-111-4566</Text>
            <Text style={styles.contactInfo}>qabilbrothers@gmail.com</Text>
            <Text style={styles.contactInfo}>www.qabil.com.pk</Text>
            <Text style={styles.contactInfo}>fb.com/qabilsanitary</Text>
          </View>
          <Text style={[styles.label, { marginBottom: 8 }]}>Our Outlets</Text>
          <View style={styles.outletGrid}>
            {OUTLETS.map((o) => (
              <View key={o.city} style={styles.outletCard}>
                <Text style={styles.outletName}>{o.name}</Text>
                <Text style={styles.outletCity}>{o.city}</Text>
                <Text style={styles.outletAddress}>{o.address}</Text>
                <Text style={styles.outletPhone}>{o.phone}</Text>
              </View>
            ))}
          </View>
        </View>
        <Footer label="Contact" />
      </Page>

    </Document>
  );
}
