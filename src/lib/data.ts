// src/lib/data.ts

export const COMPANY = {
  name: 'Jaybhadra Builders',
  tagline: 'Building Dreams, Delivering Trust',
  location: 'Sangamner, Maharashtra, India',
  phone: '+91 98765 43210',
  phoneRaw: '919876543210',
  email: 'info@jayabhadrabuilders.com',
  whatsapp: '919876543210',
  founded: '2010',
  address: 'Near Bus Stand, Sangamner, Ahmednagar District, Maharashtra - 422605',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60456.06986738773!2d74.16831!3d19.57335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4a4b9fb77571%3A0xa4a4d9e15a4b14b3!2sSangamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699876543210',
};

export const STATS = [
  { value: 27, label: 'Projects', suffix: '+' },
  { value: 14, label: 'Years Experience', suffix: '+' },
  { value: 500, label: 'Happy Families', suffix: '+' },
  { value: 100, label: 'Client Satisfaction', suffix: '%' },
];

export const PROJECTS = [
  {
    id: 1,
    name: 'Shivprasad Residency',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'completed',
    specs: '2BHK, 3BHK',
    completionYear: '2022',
    units: '48 Units',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    description: 'Premium residential complex with modern amenities and elegant design.',
  },
  {
    id: 2,
    name: 'Swami Vivekanand Commercial Hub',
    location: 'Sangamner, Maharashtra',
    category: 'commercial',
    status: 'completed',
    specs: 'Shops, Showrooms',
    completionYear: '2021',
    units: '24 Shops',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    description: 'Prime commercial complex in the heart of Sangamner city.',
  },
  {
    id: 3,
    name: 'Jaybhadra Heights',
    location: 'Near Highway, Sangamner',
    category: 'residential',
    status: 'ongoing',
    specs: '2BHK, 3BHK, Penthouse',
    completionYear: '2025',
    units: '72 Units',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    description: 'Luxury high-rise residential project with panoramic views.',
    urgency: 'Only 8 units left!',
  },
  {
    id: 4,
    name: 'Green Valley Bungalows',
    location: 'Outskirts, Sangamner',
    category: 'residential',
    status: 'completed',
    specs: 'Bungalows',
    completionYear: '2023',
    units: '16 Bungalows',
    image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&q=80',
    description: 'Exclusive bungalow community with private gardens and club facilities.',
  },
  {
    id: 5,
    name: 'Mahadev Business Park',
    location: 'Main Road, Sangamner',
    category: 'commercial',
    status: 'ongoing',
    specs: 'Office Spaces, Showrooms',
    completionYear: '2025',
    units: '36 Offices',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    description: 'Modern business park with state-of-the-art office infrastructure.',
    urgency: 'Limited units available!',
  },
  {
    id: 6,
    name: 'Samarth Nagar Phase II',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'ongoing',
    specs: '1BHK, 2BHK',
    completionYear: '2026',
    units: '60 Units',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    description: 'Affordable luxury housing for first-time homebuyers.',
    urgency: 'Pre-launch offer — Book now!',
  },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Premium Bungalows',
    icon: '🏡',
    description: 'Standalone luxury bungalows with private gardens, parking, and premium finishes tailored to your lifestyle.',
  },
  {
    id: 2,
    title: 'Residential Houses',
    icon: '🏘️',
    description: 'Quality residential complexes with modern amenities, security, and community living designed for families.',
  },
  {
    id: 3,
    title: 'Commercial Buildings',
    icon: '🏢',
    description: 'Purpose-built commercial spaces including offices, business parks, and mixed-use developments.',
  },
  {
    id: 4,
    title: 'Shops & Showrooms',
    icon: '🏬',
    description: 'Prime retail spaces in high-footfall locations, designed for maximum business visibility and convenience.',
  },
  {
    id: 5,
    title: 'RCC Structures',
    icon: '🔩',
    description: 'Industrial-grade RCC construction using top-tier materials and proven engineering for lasting durability.',
  },
  {
    id: 6,
    title: 'Material Supply',
    icon: '🧱',
    description: 'Quality construction materials sourced directly — cement, steel, bricks, and fittings at competitive rates.',
  },
];

export const WHY_US = [
  {
    icon: '💎',
    title: 'Premium Materials',
    description: 'We use only ISI-certified, Grade A materials — from foundation to finishing — ensuring lasting quality.',
  },
  {
    icon: '👷',
    title: 'Expert Team',
    description: '14+ years of collective expertise. Our engineers, architects and craftsmen bring unmatched skill to every project.',
  },
  {
    icon: '⚙️',
    title: 'Modern Technology',
    description: 'Advanced construction techniques, 3D design previews, and smart home integration in select projects.',
  },
  {
    icon: '⏱️',
    title: 'On-Time Delivery',
    description: 'We respect your investment timeline. 95% of our projects are delivered on or before the committed date.',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Patil',
    location: 'Sangamner',
    property: '3BHK — Shivprasad Residency',
    rating: 5,
    review: 'Jaybhadra Builders delivered our dream home exactly on time. The quality of materials and finishing is outstanding. Their team was professional and transparent throughout the process. Highly recommend!',
  },
  {
    id: 2,
    name: 'Priya & Sunil Sharma',
    location: 'Sangamner',
    property: 'Bungalow — Green Valley',
    rating: 5,
    review: 'We were apprehensive about investing in real estate, but Jaybhadra Builders made the entire journey smooth and trust-worthy. Our bungalow exceeded all expectations. Truly building dreams!',
  },
  {
    id: 3,
    name: 'Mahesh Deshmukh',
    location: 'Ahmednagar',
    property: 'Shop — Swami Vivekanand Hub',
    rating: 5,
    review: 'Got a shop for my business in their commercial complex. Prime location, perfect construction quality. The 3-year maintenance guarantee gives great peace of mind. Will invest again!',
  },
  {
    id: 4,
    name: 'Anita Kulkarni',
    location: 'Sangamner',
    property: '2BHK — Samarth Nagar',
    rating: 5,
    review: 'As a first-time homebuyer, I was nervous about the process. The Jaybhadra team guided me at every step. Transparent pricing, no hidden costs. My family is very happy!',
  },
  {
    id: 5,
    name: 'Vinod Waghmare',
    location: 'Sangamner',
    property: 'Office Space — Mahadev Business Park',
    rating: 5,
    review: 'Premium office space with modern infrastructure at a competitive price. The building quality is top-notch and the management is very responsive. Highly satisfied with my investment.',
  },
];

export const TRUST_BADGES = [
  '✅ Trusted Since 2010',
  '🔧 3-Year Maintenance Guarantee',
  '📋 RERA Compliant Projects',
  '🏅 ISO Certified Construction',
  '🤝 500+ Happy Families',
  '⭐ 4.9/5 Customer Rating',
];

export const BUDGET_OPTIONS = [
  'Under ₹20 Lakhs',
  '₹20 – ₹40 Lakhs',
  '₹40 – ₹70 Lakhs',
  '₹70 Lakhs – ₹1 Crore',
  'Above ₹1 Crore',
  'Commercial Investment',
];

export const INTEREST_OPTIONS = [
  '2BHK Flat',
  '3BHK Flat',
  'Bungalow / Villa',
  'Commercial Shop',
  'Showroom / Office',
  'Plot / Land',
  'RCC Construction',
  'Material Supply',
  'Just Exploring',
];
