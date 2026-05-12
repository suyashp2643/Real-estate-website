// src/lib/data.ts

export const COMPANY = {
  name: 'Jaybhadra Builders',
  tagline: 'Building Dreams, Delivering Trust',
  location: 'Sangamner & Nashik, Maharashtra, India',
  phone: '+91 91307 11811',
  phoneRaw: '919130711811',
  email: 'info@jaybhadrabuilders.com',
  whatsapp: '919130711811',

  nashikPhone: '+91 9765711811',
  nashikPhoneRaw: '919765711811',

  address: '132 K.V. Road, Jaybhadra Complex, Sai Shraddha Chowk, Sangamner 422605',
  nashikAddress: 'Shop No. 1021 & 1022, First Floor, Roongtha Shopping Hub, Nashik Mumbai Highway, Indira Nagar, Nashik',

  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60456.06986738773!2d74.16831!3d19.57335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4a4b9fb77571%3A0xa4a4d9e15a4b14b3!2sSangamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699876543210','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5!2d74.2099!3d19.5748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4b3b3b3b3b3b%3A0x0!2s132%20K.V.%20Road%2C%20Jaybhadra%20Complex%2C%20Sai%20Shraddha%20Chowk%2C%20Sangamner%20422605!5e0!3m2!1sen!2sin!4v1699876543210',
  nashikMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8!2d73.8076!3d19.9867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb3c0e069dc9%3A0x9858de4caaa9bb59!2sRoongta%20Shopping%20Hub%2C%20Indira%20Nagar%2C%20Nashik!5e0!3m2!1sen!2sin!4v1699876543210',

  founded: '2010',
};

export const STATS = [
  { value: 30, label: 'Projects', suffix: '+' },
  { value: 16, label: 'Years Experience', suffix: '+' },
  { value: 500, label: 'Happy Families', suffix: '+' },
  { value: 100, label: 'Client Satisfaction', suffix: '%' },
];
export interface Project {
  id: number;
  slug: string;
  name: string;
  location: string;
  category: string;
  status: string;
  specs: string;
  completionYear?: string;
  units?: string;
  image: string;
  description: string;
  fullDescription?: string;
  highlights?: string[];
  amenities?: string[];
  gallery?: string[];
  urgency?: string;
}
export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'golden-city',
    name: 'Golden City',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'completed',
    specs: '1BHK', 
    completionYear: '2019',
    units: '12 Units',
    image: 'https://i.ibb.co/NdfxX0f1/Golden-City.jpg',
    description: 'Premium residential complex with modern amenities and elegant design in the heart of Sangamner.',
    fullDescription: 'Golden City is one of Jaybhadra Builders most prestigious residential projects located in the heart of Sangamner. This premium complex offers spacious 2BHK and 3BHK apartments with world-class amenities, modern architecture, and top-quality construction materials. Every unit is designed to maximize natural light and ventilation while providing a comfortable and luxurious lifestyle.',
    highlights: ['Premium 1BHK Apartments', 'Modern Architecture', 'Quality Construction', 'Prime Location', 'Vastu Compliant', 'Car Parking'],
    amenities: ['24/7 Security', 'Power Backup', 'Water Supply', 'Garden Area', 'Children Play Area', 'Visitor Parking'],
    gallery: [
      'https://i.ibb.co/NdfxX0f1/Golden-City.jpg',
    ],
  },
  {
    id: 2,
    slug: 'professor-colony',
    name: 'Professor Colony',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'completed',
    specs: 'Residential',
    completionYear: '2015',
    units: 'Residential Units',
    image: 'https://i.ibb.co/qY0csLrs/Professor-Collony.jpg',
    description: 'Well-planned residential colony built with premium quality materials and modern infrastructure.',
    fullDescription: 'Professor Colony is a thoughtfully designed residential project by Jaybhadra Builders. Built with premium quality materials, this colony offers comfortable and affordable homes with modern infrastructure. The project features well-planned layouts, wide internal roads, and all essential civic amenities making it an ideal choice for families.',
    highlights: ['Well-Planned Layout', 'Wide Internal Roads', 'Premium Materials', 'Modern Infrastructure', 'Vastu Compliant', 'Secure Community'],
    amenities: ['24/7 Security', 'Water Supply', 'Power Backup', 'Street Lighting', 'Drainage System', 'Visitor Parking'],
    gallery: [
      'https://i.ibb.co/qY0csLrs/Professor-Collony.jpg',
    ],
  },
  {
    id: 3,
    slug: 'golden-city-phase-2',
    name: 'Golden City Phase II',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'completed',
    specs: '1RK, 2BHK',
    completionYear: '2016',
    units: '24 Units',
    image: 'https://i.ibb.co/NdwG4RCb/Golden-City-2.jpg',
    description: 'Second phase of the successful Golden City project with upgraded amenities and finishing.',
    fullDescription: 'Golden City Phase II is the highly anticipated second phase of our flagship Golden City project. Building on the success of Phase I, this project features upgraded amenities, better finishing, and improved design. Residents enjoy the same prime location benefits with enhanced facilities and modern living standards.',
    highlights: ['Upgraded Amenities', 'Better Finishing', 'Improved Design', 'Prime Location', '1RK & 2BHK Options', 'Vastu Compliant'],
    amenities: ['24/7 Security', 'Power Backup', 'Water Supply', 'Garden Area', 'Children Play Area', 'Car Parking'],
    gallery: [
      'https://i.ibb.co/NdwG4RCb/Golden-City-2.jpg',
    ],
  },
  {
    id: 4,
    slug: 'shelu',
    name: 'Shelu',
    location: 'Shelu, Maharashtra',
    category: 'residential',
    status: 'completed',
    specs: 'Residential',
    completionYear: '2017',
    units: 'Residential Units',
    image: 'https://i.ibb.co/yc6SsYPp/Shelu-Jalana.jpg',
    description: 'Quality residential construction delivering comfortable and affordable homes at Shelu.',
    fullDescription: 'The Shelu project by Jaybhadra Builders brings premium quality construction to this growing locality. Designed for comfortable family living, this residential project offers well-ventilated homes with quality materials and reliable construction standards that Jaybhadra Builders is known for.',
    highlights: ['Quality Construction', 'Comfortable Homes', 'Well Ventilated', 'Affordable Pricing', 'Family Friendly', 'Growing Locality'],
    amenities: ['Water Supply', 'Power Backup', 'Security', 'Parking', 'Street Lighting', 'Drainage'],
    gallery: [
      'https://i.ibb.co/yc6SsYPp/Shelu-Jalana.jpg',
    ],
  },
  {
    id: 5,
    slug: 'near-pachore-hospital',
    name: 'Near Pachore Hospital',
    location: 'Sangamner, Maharashtra',
    category: 'residential,commercial',
    status: 'completed',
    specs: 'Residential, Commercial',
    completionYear: '2024',
    units: 'Residential Units & Commercial Units',
    image: 'https://i.ibb.co/gLJMrdt0/Neat-pachore-hospital-Sangmner.jpg',
    description: 'Strategically located residential project near Pachore Hospital with easy access to all amenities.',
    fullDescription: 'This strategically located residential project near Pachore Hospital offers the perfect blend of convenience and comfort. Located close to the hospital, schools, and markets, this project is ideal for medical professionals and families who value accessibility. Built with Jaybhadra Builders signature quality and reliability.',
    highlights: ['Prime Location', 'Near Hospital', 'Close to Schools', 'Market Nearby', 'Quality Construction', 'Easy Access'],
    amenities: ['Water Supply', 'Power Backup', 'Security', 'Parking', 'Street Lighting', 'Drainage'],
    gallery: [
      'https://i.ibb.co/gLJMrdt0/Neat-pachore-hospital-Sangmner.jpg',
    ],
  },
  {
    id: 6,
    slug: 'golden-city-gunjalwadi',
    name: 'Golden City, Gunjalwadi',
    location: 'Gunjalwadi, Sangamner',
    category: 'residential',
    status: 'completed',
    specs: '1BHK',
    completionYear: '2023',
    units: '12 Units',
    image: 'https://i.ibb.co/cXSxmh5g/Whats-App-Image-2026-05-04-at-13-43-49.jpg',
    description: 'Premium housing project at Gunjalwadi offering spacious homes with top-quality construction.',
    fullDescription: 'Golden City Gunjalwadi is a premium residential project situated in the peaceful Gunjalwadi area of Sangamner. This project offers spacious homes with top-quality construction, wide open spaces, and a serene living environment away from the city bustle while still being well connected to all urban conveniences.',
    highlights: ['Spacious Homes', 'Peaceful Location', 'Top Quality', 'Open Spaces', 'Well Connected', '1BHK', 'Premium Finishing'],
    amenities: ['Water Supply', 'Power Backup', 'Security', 'Parking', 'Garden', 'Children Play Area'],
    gallery: [
      'https://i.ibb.co/cXSxmh5g/Whats-App-Image-2026-05-04-at-13-43-49.jpg',
    ],
  },
  {
    id: 7,
    slug: 'golden-city-sangamner',
    name: 'Golden City, Sangamner',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'Completed',
    specs: '1BHK',
    units: '12 Units',
    image: 'https://i.ibb.co/5h32ZdpP/Whats-App-Image-2026-05-04-at-13-44-21.jpg',
    description: 'Quality residential construction delivering comfortable and affordable homes at Golden City, Sangamner.',
    fullDescription: 'Quality residential construction delivering comfortable and affordable homes at Golden City, Sangamner.',
    highlights: ['1BHK', 'Prime Location', '1BHK Options', 'Limited Units Left'],
    amenities: ['24/7 Security', 'Power Backup', 'Water Supply', 'Lift', 'Car Parking', 'CCTV Surveillance'],
    gallery: [
      'https://i.ibb.co/5h32ZdpP/Whats-App-Image-2026-05-04-at-13-44-21.jpg',
    ],
  },
  {
    id: 8,
    slug: 'nirmal-nagar',
    name: 'Nirmal Nagar',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'Completed',
    completionYear: '2012',
    specs: 'Residential',
    units: 'Residential Units',
    image: 'https://i.ibb.co/RkbbMJn4/Whats-App-Image-2026-05-04-at-13-46-39.jpg',
    description: 'Modern residential project at Nirmal Nagar, Sangamner offering quality homes at great value.',
    fullDescription: 'Nirmal Nagar is a modern residential project by Jaybhadra Builders offering quality homes at great value. Located in a developing area of Sangamner with excellent connectivity, this project is perfect for families looking for a comfortable home at an affordable price point without compromising on quality.',
    highlights: ['Modern Design', 'Affordable Pricing', 'Quality Construction', 'Good Connectivity', 'Family Friendly'],
    amenities: ['Water Supply', 'Power Backup', 'Security', 'Parking', 'Children Play Area', 'Garden'],
    gallery: [
      'https://i.ibb.co/RkbbMJn4/Whats-App-Image-2026-05-04-at-13-46-39.jpg',
    ],
  },
  {
    id: 9,
    slug: 'rahane-mala',
    name: 'Rahane Mala',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'completed',
    completionYear: '2021',
    specs: 'Residential',
    units: '24 Units',
    image: 'https://i.ibb.co/ddV757s/Whats-App-Image-2026-05-04-at-13-49-06.jpg',
    description: 'Modern residential project at Rahane Mala with premium construction and modern design.',
    fullDescription: 'Rahane Mala is an modern residential project by Jaybhadra Builders. Located in one of Sangamner most sought-after areas, this project promises premium construction quality with modern design aesthetics.',
    highlights: ['Premium Construction', 'Modern Design', 'Sought-After Location', 'Best Unit Selection'],
    amenities: ['24/7 Security', 'Power Backup', 'Water Supply', 'Parking', 'Garden', 'Children Play Area'],
    gallery: [
      'https://i.ibb.co/ddV757s/Whats-App-Image-2026-05-04-at-13-49-06.jpg',
    ],
  },
  {
    id: 10,
    slug: 'takeshwar-temple-ranemala',
    name: 'Takeshwar Temple, Ranemala',
    location: 'Ranemala, Sangamner',
    category: 'residential',
    status: 'completed',
    specs: 'Residential',
    completionYear: '2023',
    units: '24 Units',
    image: 'https://i.ibb.co/JFxwkx7L/Whats-App-Image-2026-05-04-at-13-50-02.jpg',
    description: 'Peaceful residential project near Takeshwar Temple at Ranemala with serene surroundings.',
    fullDescription: 'Situated near the sacred Takeshwar Temple at Ranemala, this residential project by Jaybhadra Builders offers a peaceful and spiritually enriching living environment. The serene surroundings, clean air, and tranquil atmosphere make this an ideal home for families seeking peace and quality of life away from city noise.',
    highlights: ['Peaceful Location', 'Near Temple', 'Serene Surroundings', 'Clean Environment', 'Quality Construction', 'Vastu Compliant'],
    amenities: ['Water Supply', 'Power Backup', 'Security', 'Parking', 'Garden', 'Street Lighting'],
    gallery: [
      'https://i.ibb.co/JFxwkx7L/Whats-App-Image-2026-05-04-at-13-50-02.jpg',
    ],
  },
  {
    id: 11,
    slug: 'saishraddha-chowk',
    name: 'Saishraddha Chowk',
    location: 'Sangamner, Maharashtra',
    category: 'commercial',
    status: 'completed',
    specs: 'Commercial Complex',
    completionYear: '2025',
    units: 'Commercial Units',
    image: 'https://i.ibb.co/Z6yZyzSc/Whats-App-Image-2026-05-04-at-13-51-34.jpg',
    description: 'Prime commercial complex at Saishraddha Chowk — the busiest junction in Sangamner city.',
    fullDescription: 'The Saishraddha Chowk Commercial Complex is strategically located at one of the busiest junctions in Sangamner. This prime commercial development offers excellent visibility, high footfall, and easy accessibility making it the perfect investment for businesses, shops, and showrooms. Built with commercial-grade construction for lasting durability.',
    highlights: ['Prime Location', 'High Footfall', 'Excellent Visibility', 'Commercial Grade', 'Easy Accessibility', 'Great Investment'],
    amenities: ['24/7 Security', 'Power Backup', 'Water Supply', 'CCTV', 'Ample Parking', 'Fire Safety'],
    gallery: [
      'https://i.ibb.co/Z6yZyzSc/Whats-App-Image-2026-05-04-at-13-51-34.jpg',
    ],
  },
  {
    id: 12,
    slug: 'golden-city-sangamner-latest',
    name: 'Golden City Sangamner',
    location: 'Sangamner, Maharashtra',
    category: 'residential',
    status: 'ongoing',
    specs: '2BHK, 3BHK, Penthouse',
    units: 'Wing A — 24 Units | Wing B & C — 42 Units | 12 Shops',
    image: 'https://i.ibb.co/MD5jJj6v/Whats-App-Image-2026-05-04-at-13-52-17.jpg',
    description: 'Latest phase of Golden City with penthouse options and premium specifications throughout.',
    fullDescription: 'The latest and most premium phase of Golden City Sangamner features exclusive penthouse options along with spacious 2BHK and 3BHK apartments. This project represents the pinnacle of Jaybhadra Builders craftsmanship with the finest materials, modern amenities, and attention to detail in every aspect of construction.',
    highlights: ['Exclusive Penthouses', '2BHK & 3BHK Options', 'Premium Specifications', 'Finest Materials', 'Modern Amenities', 'Only a Few Units Left'],
    amenities: ['24/7 Security', 'Power Backup', 'Water Supply', 'Lift', 'Rooftop Access', 'CCTV Surveillance'],
    urgency: 'Only a few units left!',
    gallery: [
      'https://i.ibb.co/MD5jJj6v/Whats-App-Image-2026-05-04-at-13-52-17.jpg',
    ],
  },
  {
    id: 13,
    slug: 'jaybhadra-commercials',
    name: 'Jay Bhadra Commercial\'s',
    location: 'Sangamner, Maharashtra',
    category: 'commercial',
    status: 'ongoing',
    specs: 'Shops, Offices, Showrooms',
    units: 'Ground + 4 Floors | Multiple Commercial Units',
    image: 'https://i.ibb.co/Y7Gnywbz/jaybhadra-commercial-jpg.jpg',
    description: 'Premium commercial complex with ground floor shops, showrooms and upper floor office spaces in prime Sangamner location.',
    fullDescription: 'Jay Bhadra Commercials is an impressive ongoing commercial development by Jaybhadra Builders. This landmark building features ground floor retail shops and showrooms including premium fashion and lifestyle brands, upper floor office spaces with modern infrastructure, and a striking glass facade that makes it one of the most prominent commercial buildings in Sangamner. An excellent investment opportunity for businesses and investors alike.',
    highlights: [
      'Ground Floor Shops & Showrooms',
      'Upper Floor Office Spaces',
      'Premium Glass Facade',
      'Prime Corner Location',
      'High Footfall Area',
      'Modern Infrastructure',
      'Ample Parking Space',
      'CCTV & 24/7 Security',
    ],
    amenities: [
      '24/7 Security',
      'Power Backup',
      'Water Supply',
      'CCTV Surveillance',
      'Ample Parking',
      'Fire Safety System',
      'Lift Access',
      'High Speed Internet',
    ],
    urgency: 'Limited units available — Book now!',
    gallery: [
      'https://i.ibb.co/Y7Gnywbz/jaybhadra-commercial-jpg.jpg',
    ],
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
