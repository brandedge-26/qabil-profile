'use client';

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { CATEGORIES } from '../data/products';

const PRIMARY = '#28166F';
const DARK = '#111827';
const GRAY = '#6B7280';
const LIGHT = '#F7F8FA';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    paddingBottom: 40,
  },
  // Logo header (top center on every page)
  logoHeader: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginHorizontal: 40,
  },
  logo: {
    width: 90,
    height: 45,
    objectFit: 'contain',
  },
  // Page content area
  content: {
    paddingHorizontal: 40,
    paddingTop: 24,
  },
  // Section label
  label: {
    fontSize: 7,
    color: PRIMARY,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  // Section title
  h1: {
    fontSize: 28,
    color: DARK,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  h1Accent: {
    fontSize: 28,
    color: PRIMARY,
    fontFamily: 'Helvetica-Bold',
  },
  h2: {
    fontSize: 20,
    color: DARK,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
  },
  divider: {
    width: 32,
    height: 2,
    backgroundColor: PRIMARY,
    marginTop: 10,
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 9,
    color: GRAY,
    lineHeight: 1.7,
    marginBottom: 12,
  },
  // Cover page
  coverHero: {
    backgroundColor: PRIMARY,
    marginHorizontal: 40,
    borderRadius: 12,
    padding: 36,
    marginBottom: 24,
    alignItems: 'center',
  },
  coverTitle: {
    fontSize: 32,
    color: '#ffffff',
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  coverSubtitle: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    letterSpacing: 1,
  },
  coverBadge: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginTop: 14,
  },
  coverBadgeText: {
    fontSize: 8,
    color: '#ffffff',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  // Stats row
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginBottom: 24,
    gap: 8,
  },
  statBox: {
    flex: 1,
    backgroundColor: LIGHT,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  statNum: {
    fontSize: 18,
    color: PRIMARY,
    fontFamily: 'Helvetica-Bold',
  },
  statLabel: {
    fontSize: 7,
    color: GRAY,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 3,
    textAlign: 'center',
  },
  // Timeline
  timelineRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: PRIMARY,
    marginTop: 3,
  },
  timelineYear: {
    fontSize: 9,
    color: PRIMARY,
    fontFamily: 'Helvetica-Bold',
  },
  timelineTitle: {
    fontSize: 9,
    color: DARK,
    fontFamily: 'Helvetica-Bold',
    marginLeft: 6,
  },
  timelineDesc: {
    fontSize: 8,
    color: GRAY,
    marginTop: 2,
  },
  // Product category
  categoryHeader: {
    backgroundColor: PRIMARY,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  categoryLabel: {
    fontSize: 7,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  categoryTitle: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Helvetica-Bold',
  },
  categoryDesc: {
    fontSize: 8,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
    lineHeight: 1.5,
  },
  // Product grid - 3 columns
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  productCard: {
    width: '31%',
    backgroundColor: LIGHT,
    borderRadius: 6,
    padding: 10,
    borderLeftWidth: 2,
    borderLeftColor: PRIMARY,
  },
  productImage: {
    width: '100%',
    height: 70,
    objectFit: 'contain',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    marginBottom: 6,
  },
  productCode: {
    fontSize: 7,
    color: GRAY,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 2,
  },
  productName: {
    fontSize: 8,
    color: DARK,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 2,
  },
  productMaterial: {
    fontSize: 7,
    color: PRIMARY,
  },
  productSize: {
    fontSize: 7,
    color: GRAY,
    marginTop: 1,
  },
  // Capabilities
  capGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  capCard: {
    width: '47%',
    backgroundColor: LIGHT,
    borderRadius: 8,
    padding: 12,
    marginBottom: 4,
  },
  capTitle: {
    fontSize: 9,
    color: DARK,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  capDesc: {
    fontSize: 8,
    color: GRAY,
    lineHeight: 1.5,
  },
  capDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: PRIMARY,
    marginBottom: 8,
  },
  // Clients
  pillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 12,
  },
  pill: {
    backgroundColor: `${PRIMARY}10`,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: `${PRIMARY}25`,
  },
  pillText: {
    fontSize: 8,
    color: PRIMARY,
  },
  clientGroup: {
    marginBottom: 14,
  },
  clientGroupTitle: {
    fontSize: 7,
    color: PRIMARY,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  // Contact
  contactBanner: {
    backgroundColor: PRIMARY,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  contactPhone: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 3,
  },
  outletGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  outletCard: {
    width: '47%',
    backgroundColor: LIGHT,
    borderRadius: 8,
    padding: 12,
  },
  outletName: {
    fontSize: 7,
    color: PRIMARY,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 2,
  },
  outletCity: {
    fontSize: 10,
    color: DARK,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  outletAddress: {
    fontSize: 7.5,
    color: GRAY,
    lineHeight: 1.5,
    marginBottom: 4,
  },
  outletPhone: {
    fontSize: 8,
    color: PRIMARY,
    fontFamily: 'Helvetica-Bold',
  },
  // Footer bar
  pageFooter: {
    position: 'absolute',
    bottom: 16,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 7,
    color: '#D1D5DB',
  },
});

function LogoHeader() {
  return (
    <View style={styles.logoHeader}>
      <Image src="/qabil-logo.png" style={styles.logo} />
    </View>
  );
}

function PageFooter({ page }: { page: string }) {
  return (
    <View style={styles.pageFooter}>
      <Text style={styles.footerText}>© 2025 Qabil Engineering Works</Text>
      <Text style={styles.footerText}>{page}</Text>
      <Text style={styles.footerText}>www.qabil.com.pk</Text>
    </View>
  );
}

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

export default function QabilPdfDocument() {
  return (
    <Document title="Qabil Engineering Works — Company Profile">

      {/* PAGE 1 — Cover */}
      <Page size="A4" style={styles.page}>
        <LogoHeader />
        <View style={styles.content}>
          <View style={styles.coverHero}>
            <Text style={styles.coverTitle}>Qabil Engineering Works</Text>
            <Text style={styles.coverSubtitle}>Premium Sanitary Fittings · Karachi, Pakistan</Text>
            <View style={styles.coverBadge}>
              <Text style={styles.coverBadgeText}>Manufacturing Excellence Since 1975</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsRow}>
          {[['50+', 'Years of Excellence'], ['1000+', 'Products'], ['Nationwide', 'Network'], ['Trusted', 'Institutions']].map(([num, label]) => (
            <View key={label} style={styles.statBox}>
              <Text style={styles.statNum}>{num}</Text>
              <Text style={styles.statLabel}>{label}</Text>
            </View>
          ))}
        </View>
        <View style={[styles.content, { paddingTop: 0 }]}>
          <Text style={styles.label}>Company Overview</Text>
          <Text style={styles.bodyText}>
            Since its establishment in 1975, Qabil Engineering Works has emerged as an industry trailblazer, pioneering innovation and setting a benchmark for manufacturing excellence in the field of sanitary fittings. Our journey has been marked by a relentless commitment to crafting high-quality products that not only meet but exceed the evolving needs of our customers — blending functionality with a touch of opulence.
          </Text>
          <Text style={styles.label}>Our Journey</Text>
          {TIMELINE.map((item) => (
            <View key={item.year} style={styles.timelineRow}>
              <View style={styles.timelineDot} />
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.timelineYear}>{item.year}</Text>
                  <Text style={styles.timelineTitle}>{item.title}</Text>
                </View>
                <Text style={styles.timelineDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
        <PageFooter page="Company Profile" />
      </Page>

      {/* PAGES — Products (one page per category) */}
      {CATEGORIES.map((cat) => (
        <Page key={cat.slug} size="A4" style={styles.page}>
          <LogoHeader />
          <View style={styles.content}>
            <View style={styles.categoryHeader}>
              {cat.parent !== 'Basic Bathroom Needs' && (
                <Text style={styles.categoryLabel}>{cat.parent}</Text>
              )}
              <Text style={styles.categoryTitle}>{cat.title} {cat.titleHighlight}</Text>
              <Text style={styles.categoryDesc}>{cat.description}</Text>
            </View>
            <View style={styles.productGrid}>
              {cat.products.map((product, i) => (
                <View key={i} style={styles.productCard}>
                  {product.image && (
                    <Image src={`${product.image}`} style={styles.productImage} />
                  )}
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productMaterial}>{product.material}</Text>
                  {product.size && <Text style={styles.productSize}>{product.size}</Text>}
                </View>
              ))}
            </View>
          </View>
          <PageFooter page={`${cat.title} ${cat.titleHighlight}`} />
        </Page>
      ))}

      {/* PAGE — Strength & Capabilities */}
      <Page size="A4" style={styles.page}>
        <LogoHeader />
        <View style={styles.content}>
          <Text style={styles.label}>Why Choose Us</Text>
          <Text style={styles.h2}>Strength & Capabilities</Text>
          <View style={styles.divider} />
          <Text style={styles.bodyText}>
            The core strength of QABIL® lies in being manufacturers and pioneers of high-quality products — uniquely positioned to customize for any situation or need.
          </Text>
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
        <PageFooter page="Strength & Capabilities" />
      </Page>

      {/* PAGE — Clients */}
      <Page size="A4" style={styles.page}>
        <LogoHeader />
        <View style={styles.content}>
          <Text style={styles.label}>Trusted By</Text>
          <Text style={styles.h2}>Pakistan's Best</Text>
          <View style={styles.divider} />
          {[
            { title: 'Hospitals', items: HOSPITALS },
            { title: 'Government Institutions', items: GOVT },
            { title: 'Educational Institutions', items: EDUCATIONAL },
            { title: 'Private Institutions & Corporates', items: PRIVATE },
          ].map(({ title, items }) => (
            <View key={title} style={styles.clientGroup}>
              <Text style={[styles.label, { marginBottom: 6 }]}>{title}</Text>
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
            <Text style={[styles.label, { marginBottom: 6 }]}>Builders & Contractors</Text>
            <View style={styles.pillsRow}>
              {BUILDERS.map((name) => (
                <View key={name} style={styles.pill}>
                  <Text style={styles.pillText}>{name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <PageFooter page="Our Clients" />
      </Page>

      {/* PAGE — Contact */}
      <Page size="A4" style={styles.page}>
        <LogoHeader />
        <View style={styles.content}>
          <Text style={styles.label}>Get In Touch</Text>
          <Text style={styles.h2}>Contact Us</Text>
          <View style={styles.divider} />
          <View style={styles.contactBanner}>
            <Text style={[styles.label, { color: 'rgba(255,255,255,0.6)', marginBottom: 6 }]}>Consumer Care</Text>
            <Text style={styles.contactPhone}>0304-111-4566  |  0334-111-4566</Text>
            <Text style={styles.contactInfo}>qabilbrothers@gmail.com</Text>
            <Text style={styles.contactInfo}>www.qabil.com.pk</Text>
            <Text style={styles.contactInfo}>fb.com/qabilsanitary</Text>
          </View>
          <Text style={[styles.label, { marginBottom: 10 }]}>Our Outlets</Text>
          <View style={styles.outletGrid}>
            {OUTLETS.map((outlet) => (
              <View key={outlet.city} style={styles.outletCard}>
                <Text style={styles.outletName}>{outlet.name}</Text>
                <Text style={styles.outletCity}>{outlet.city}</Text>
                <Text style={styles.outletAddress}>{outlet.address}</Text>
                <Text style={styles.outletPhone}>{outlet.phone}</Text>
              </View>
            ))}
          </View>
        </View>
        <PageFooter page="Contact" />
      </Page>

    </Document>
  );
}
