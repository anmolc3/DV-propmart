/**
 * KV PropMart — Central Properties Repository
 * Dynamic listings array containing realistic property listings across Delhi NCR.
 */

const PROPERTIES_DATA = [
  {
    id: "KVPM001",
    title: "The Grandeur — Luxury 3 BHK High-Rise Apartment",
    slug: "luxury-3-bhk-apartment-new-delhi",
    category: "Residential",
    type: "Apartment",
    listingType: "Sale",
    status: "Ready to Move",
    featured: true,
    price: "₹1.25 Cr",
    priceNumeric: 12500000,
    pricePerSqFt: "₹6,756 / sq.ft.",
    area: "1,850 sq.ft.",
    areaNumeric: 1850,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    parking: 2,
    floor: "14th of 26 Floors",
    furnishing: "Semi-Furnished",
    facing: "North-East (Park Facing)",
    location: "Dwarka Expressway, New Delhi",
    city: "New Delhi",
    heroImage: "assets/images/cat-residential.webp",
    images: [
      "assets/images/cat-residential.webp",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An ultra-spacious 3 BHK premium apartment situated in a gated township along Dwarka Expressway. Designed with Italian marble flooring, expansive panoramic balconies with landscaped greenery views, modular German kitchen, and smart home automation features.",
    amenities: [
      "Clubhouse & Lounge",
      "Olympic Size Swimming Pool",
      "24x7 Multi-tier Security & CCTV",
      "100% Power Backup",
      "High Speed Elevators",
      "Equipped Gymnasium",
      "EV Charging Stations",
      "Jogging & Cycling Track",
      "Badminton & Tennis Court",
      "Children's Play Arena"
    ],
    highlights: [
      "Direct connectivity to IGI Airport (15 mins)",
      "Vastu-compliant architectural layout",
      "Dedicated 2 covered basement parking slots",
      "3-side open well-ventilated configuration"
    ],
    possession: "Immediate / Ready to Move",
    reraApproved: true,
    reraId: "DLRERA2023P0084"
  },
  {
    id: "KVPM002",
    title: "Signature Royal Estate — 4 BHK Independent Luxury Villa",
    slug: "modern-4-bhk-luxury-villa-ghaziabad",
    category: "Residential",
    type: "Villa",
    listingType: "Sale",
    status: "Ready to Move",
    featured: true,
    price: "₹1.85 Cr",
    priceNumeric: 18500000,
    pricePerSqFt: "₹5,781 / sq.ft.",
    area: "3,200 sq.ft.",
    areaNumeric: 3200,
    bedrooms: 4,
    bathrooms: 5,
    balconies: 4,
    parking: 3,
    floor: "Triplex (G + 2)",
    furnishing: "Semi-Furnished",
    facing: "East Facing",
    location: "Wave City, NH-24, Ghaziabad",
    city: "Ghaziabad",
    heroImage: "assets/images/hero-home.webp",
    images: [
      "assets/images/hero-home.webp",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Experience royal luxury living in this sprawling 4 BHK architectural designer villa. Boasting a private landscaped lawn, private jacuzzi, double-height living room with acoustic ceiling, servant quarters, and expansive rooftop terrace with barbecue lounge.",
    amenities: [
      "Private Landscaped Lawn",
      "Private Covered Porch & Driveway",
      "Rooftop Terrace Lounge",
      "24x7 Security & Guard Patrol",
      "Servant Room with Attached Bath",
      "Solar Water Heating System",
      "Designer False Ceiling & Recessed Lights",
      "Automated Security Gating"
    ],
    highlights: [
      "Located in a smart, eco-friendly Hi-Tech City",
      "Direct 14-lane Delhi-Meerut Expressway access",
      "Zero high-tension lines, wide 60ft tree-lined avenue",
      "Freehold clear title property with bank loan approved"
    ],
    possession: "Ready to Move",
    reraApproved: true,
    reraId: "UPRERA2022V0192"
  },
  {
    id: "KVPM003",
    title: "Apex Horizon — Prime Commercial Showroom & Retail Space",
    slug: "commercial-showroom-retail-gurugram",
    category: "Commercial",
    type: "Commercial",
    listingType: "Sale",
    status: "Under Construction (Possession Soon)",
    featured: true,
    price: "₹2.40 Cr",
    priceNumeric: 24000000,
    pricePerSqFt: "₹10,000 / sq.ft.",
    area: "2,400 sq.ft.",
    areaNumeric: 2400,
    bedrooms: 0,
    bathrooms: 2,
    balconies: 0,
    parking: 4,
    floor: "Ground Floor Main High-Street",
    furnishing: "Bare Shell",
    facing: "Main Road 150ft Wide Frontage",
    location: "Golf Course Extension Road, Gurugram",
    city: "Gurugram",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "High-visibility double-height retail shop and commercial showroom on prime Golf Course Extension Road. Surrounded by over 25,000 affluent luxury residential families, ensuring high footfall and excellent rental yield up to 8.5% ROI.",
    amenities: [
      "Double Height 22ft Ceiling",
      "High Footfall Glass Facade",
      "Multi-level Basement Parking",
      "Centralized Air Conditioning Provision",
      "100% DG Power Backup",
      "Fire Fighting & Sprinkler Systems",
      "Escalators & Service Elevators",
      "24x7 Facility Management"
    ],
    highlights: [
      "Promising 8.5% projected rental yield",
      "Anchored by tier-1 brands, cafes, and hypermarket",
      "Excellent frontage on 150m wide sector road",
      "Assured lease assistance available"
    ],
    possession: "December 2026",
    reraApproved: true,
    reraId: "HRERA2024C0315"
  },
  {
    id: "KVPM004",
    title: "Green Valley Enclave — Premium Residential Freehold Plot",
    slug: "premium-residential-plot-noida",
    category: "Plots & Land",
    type: "Plot/Land",
    listingType: "Sale",
    status: "Ready for Registration",
    featured: true,
    price: "₹72 Lakh",
    priceNumeric: 7200000,
    pricePerSqFt: "₹4,000 / sq.ft.",
    area: "1,800 sq.ft. (200 sq.yd.)",
    areaNumeric: 1800,
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    parking: 2,
    floor: "Plot / Land (Basement + G + 3 Permitted)",
    furnishing: "Unfurnished",
    facing: "North-West (Wide 45ft Road)",
    location: "Sector 148, Noida Expressway",
    city: "Noida",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Exclusive gated township residential plot ready for immediate registry and construction. Clean title, paved internal concrete roads, underground cabling, water pipelines, sewage lines, and boundary wall already completed.",
    amenities: [
      "Gated Community with Boom Barrier",
      "Underground Electric & Water Supply",
      "45ft Wide Internal Concrete Roads",
      "Lush Theme Gardens & Parks",
      "Street Lighting with Solar Panels",
      "Rainwater Harvesting System",
      "24x7 Guard Post at Entry Gates"
    ],
    highlights: [
      "5 mins from Aqua Line Metro Station",
      "Freehold registry with immediate mutation",
      "Permission to construct Basement + Ground + 3 floors",
      "Fast appreciating sector near Noida International Airport corridor"
    ],
    possession: "Immediate Registry & Handover",
    reraApproved: true,
    reraId: "UPRERA2023L0412"
  },
  {
    id: "KVPM005",
    title: "Skyline Sky-Villa — 4 BHK Ultra-Luxury Penthouse",
    slug: "ultra-luxury-4bhk-penthouse-noida",
    category: "Luxury Properties",
    type: "Apartment",
    listingType: "Sale",
    status: "Ready to Move",
    featured: true,
    price: "₹3.20 Cr",
    priceNumeric: 32000000,
    pricePerSqFt: "₹8,421 / sq.ft.",
    area: "3,800 sq.ft.",
    areaNumeric: 3800,
    bedrooms: 4,
    bathrooms: 5,
    balconies: 5,
    parking: 3,
    floor: "Top 31st & 32nd Duplex Floor",
    furnishing: "Fully Furnished",
    facing: "East (Unobstructed Green Golf Course View)",
    location: "Sector 128, Wish Town, Noida",
    city: "Noida",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An exemplary penthouse designed for connoisseurs of luxury living. Features a double-height glass atrium, private infinity plunge pool on terrace, imported Italian marble, custom automated curtains, smart climate zoning, and bespoke designer furnishings.",
    amenities: [
      "Private Rooftop Infinity Pool",
      "Private High-Speed Elevator Access",
      "Designer Modular Island Kitchen",
      "Club 18-Hole Golf Course Access",
      "Spa & Wellness Sauna Center",
      "Valet Parking & 3 Reserved Covered Bays",
      "Dedicated Butler / Concierge Desk",
      "VRV Central Air Conditioning"
    ],
    highlights: [
      "Direct breathtaking view of 18-hole Golf Course",
      "Custom Italian designer interiors included",
      "Ultra-low density tower (only 2 units per floor)",
      "Triple height grand entrance lobby"
    ],
    possession: "Ready to Move",
    reraApproved: true,
    reraId: "UPRERA2021P0991"
  },
  {
    id: "KVPM006",
    title: "CyberOne Tower — Modern Corporate Grade-A Office Space",
    slug: "modern-office-space-cyber-city-gurugram",
    category: "Commercial",
    type: "Office",
    listingType: "Rent",
    status: "Ready for Fitouts",
    featured: true,
    price: "₹1.80 Lakh / mo",
    priceNumeric: 180000,
    pricePerSqFt: "₹90 / sq.ft. / mo",
    area: "2,000 sq.ft.",
    areaNumeric: 2000,
    bedrooms: 0,
    bathrooms: 2,
    balconies: 0,
    parking: 3,
    floor: "9th Floor of 18 Floors",
    furnishing: "Furnished / Plug & Play",
    facing: "North-Facing Glass Glazing",
    location: "Cyber City, DLF Phase 2, Gurugram",
    city: "Gurugram",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Fully furnished Grade-A corporate office space with 28 workstations, 2 director cabins, 1 boardroom (12 seater), reception lobby, server room, and executive cafeteria. Ideal for IT/ITES, fintech, and corporate branch offices.",
    amenities: [
      "28 Ergonomic Workstations + Cabins",
      "High Speed Fiber Optic Backbone",
      "Biometric Access & Turnstiles",
      "Central HVAC with HEPA Filtration",
      "Multi-Cuisine Food Court in Building",
      "100% Uninterrupted Power Backup",
      "Dedicated Visitor Parking",
      "LEED Platinum Certified Green Building"
    ],
    highlights: [
      "2 mins walk from Rapid Metro Station",
      "Zero capex required — move-in ready within 24 hours",
      "Professional building management by JLL/CBRE",
      "Flexible lease terms available"
    ],
    possession: "Immediate Lease",
    reraApproved: true,
    reraId: "HRERA2020O0081"
  },
  {
    id: "KVPM007",
    title: "Urban Nest — Contemporary 2 BHK Modern Apartment",
    slug: "contemporary-2-bhk-apartment-noida-ext",
    category: "Residential",
    type: "Apartment",
    listingType: "Sale",
    status: "Ready to Move",
    featured: false,
    price: "₹65 Lakh",
    priceNumeric: 6500000,
    pricePerSqFt: "₹5,652 / sq.ft.",
    area: "1,150 sq.ft.",
    areaNumeric: 1150,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    parking: 1,
    floor: "8th of 22 Floors",
    furnishing: "Semi-Furnished",
    facing: "East Facing",
    location: "Sector 1, Greater Noida West (Noida Extension)",
    city: "Noida",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Well-planned, sun-drenched 2 BHK apartment in a vibrant family township. Features modular kitchen, wooden flooring in master bedroom, premium sanitary fittings, and close proximity to top schools and markets.",
    amenities: [
      "Clubhouse & Swimming Pool",
      "Children's Play Area & Skating Rink",
      "24x7 Security & Guard Surveillance",
      "Commercial Shopping Complex in Society",
      "Power Backup & 2 Elevators per Tower",
      "Podium Level Green Landscaping"
    ],
    highlights: [
      "Near upcoming metro station & Gaur City Mall",
      "Low maintenance society with active RWA",
      "Approved by leading nationalized banks (SBI/HDFC)",
      "High rental demand (₹22,000/mo expected rent)"
    ],
    possession: "Ready to Move",
    reraApproved: true,
    reraId: "UPRERA2022A0784"
  },
  {
    id: "KVPM008",
    title: "Heritage Greens — 3 BHK Independent Builder Floor",
    slug: "independent-builder-floor-south-delhi",
    category: "Residential",
    type: "House",
    listingType: "Sale",
    status: "Ready to Move",
    featured: false,
    price: "₹2.10 Cr",
    priceNumeric: 21000000,
    pricePerSqFt: "₹10,500 / sq.ft.",
    area: "2,000 sq.ft.",
    areaNumeric: 2000,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    parking: 2,
    floor: "2nd Floor with Stilt Parking",
    furnishing: "Semi-Furnished",
    facing: "North Facing",
    location: "Chittaranjan Park / GK-II, South Delhi",
    city: "New Delhi",
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Premium independent builder floor with private stilt parking and OTIS automatic elevator. Features Italian marble, imported sanitary fittings, modular kitchen with chimney & hob, separate drawing-dining, and spacious master suite with walk-in closet.",
    amenities: [
      "Private Automatic Stilt Elevator",
      "Dedicated 2 Stilt Parking Slots",
      "Separate Servant Room with Bathroom",
      "Gated Colony with Security Guards",
      "Private Overhead Water Tank & Booster",
      "Vastu Compliant North-East Orientation"
    ],
    highlights: [
      "Freehold plot with registered DDA title",
      "Walking distance to metro & market",
      "Peaceful green neighbourhood with broad avenues",
      "High capital appreciation South Delhi location"
    ],
    possession: "Immediate Registry & Handover",
    reraApproved: true,
    reraId: "DLRERA2023F0119"
  },
  {
    id: "KVPM009",
    title: "Metropolis High-Street — Prime Corner Retail Shop",
    slug: "corner-retail-shop-sector-18-noida",
    category: "Commercial",
    type: "Shop",
    listingType: "Rent",
    status: "Ready for Fitouts",
    featured: false,
    price: "₹95,000 / mo",
    priceNumeric: 95000,
    pricePerSqFt: "₹146 / sq.ft. / mo",
    area: "650 sq.ft.",
    areaNumeric: 650,
    bedrooms: 0,
    bathrooms: 1,
    balconies: 0,
    parking: 2,
    floor: "Ground Floor Corner Facing",
    furnishing: "Semi-Furnished",
    facing: "Main Plaza Corner Entrance",
    location: "Sector 18 Commercial Hub, Noida",
    city: "Noida",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "High-density retail outlet situated in the heart of Sector 18 Noida commercial hub. Corner shop with two-sided glass display frontage, heavy foot traffic daily from metro stations and surrounding office complexes.",
    amenities: [
      "Two-Side Glass Corner Display",
      "High Visibility Signage Space",
      "24x7 Power Backup & Security",
      "Direct Ground Floor Level Access",
      "Water Inlet & Drain Provision for F&B/Cafe"
    ],
    highlights: [
      "Heavy daily footfall from Sector 18 Metro Station",
      "Surrounded by banks, electronics, and lifestyle brands",
      "Ideal for pharmacy, boutique, cafe, or brand store"
    ],
    possession: "Immediate Lease",
    reraApproved: true,
    reraId: "UPRERA2021S0452"
  },
  {
    id: "KVPM010",
    title: "Emerald Country Homes — 500 Sq. Yd. Luxury Farmhouse Plot",
    slug: "luxury-farmhouse-plot-surajkund-faridabad",
    category: "Plots & Land",
    type: "Plot/Land",
    listingType: "Sale",
    status: "Ready for Registration",
    featured: false,
    price: "₹1.45 Cr",
    priceNumeric: 14500000,
    pricePerSqFt: "₹3,222 / sq.ft.",
    area: "4,500 sq.ft. (500 sq.yd.)",
    areaNumeric: 4500,
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    parking: 4,
    floor: "Plotted Development / Farm Land",
    furnishing: "Unfurnished",
    facing: "Aravalli Ridge View (South-East)",
    location: "Surajkund - Anangpur Road, Faridabad",
    city: "Faridabad",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Scenic countryside plot adjacent to the serene Aravalli forest reserve. Perfect for building a weekend luxury villa, farmhouse, or retreat home away from city pollution with crystal clear air and tranquil greenery.",
    amenities: [
      "Gated Farm Community with Perimeter Fencing",
      "Organic Farm Landscaping Assistance",
      "Sweet Groundwater & Power Connections",
      "Gated Entry with 24-Hour Armed Guard",
      "Paved Internal Roadway with Palm Trees"
    ],
    highlights: [
      "Only 20 minutes drive from South Delhi / GK",
      "Unobstructed panoramic views of Aravalli hills",
      "Clear freehold registry with mutation records"
    ],
    possession: "Immediate Registry",
    reraApproved: true,
    reraId: "HRERA2023L0912"
  },
  {
    id: "KVPM011",
    title: "IndoSpace Industrial Park — 10,000 Sq.Ft. Industrial Shed",
    slug: "industrial-warehouse-shed-greater-noida",
    category: "Commercial",
    type: "Industrial",
    listingType: "Rent",
    status: "Ready to Move",
    featured: false,
    price: "₹2.20 Lakh / mo",
    priceNumeric: 220000,
    pricePerSqFt: "₹22 / sq.ft. / mo",
    area: "10,000 sq.ft.",
    areaNumeric: 10000,
    bedrooms: 0,
    bathrooms: 4,
    balconies: 0,
    parking: 6,
    floor: "Ground Floor PEB Industrial Shed",
    furnishing: "Bare Shell with Crane Girders",
    facing: "60-Meter Industrial Arterial Road",
    location: "Ecotech 12, Greater Noida",
    city: "Noida",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Heavy-duty Pre-Engineered Building (PEB) industrial shed with 30ft clear height, FM2 grade industrial flooring (5 ton/sqm capacity), 4 dock levelers, dedicated transformer yard, and separate office mezzanine.",
    amenities: [
      "30ft Clear Eaves Height",
      "Heavy Load FM2 Flooring (5T/sqm)",
      "4 Hydraulic Dock Levelers with Canopy",
      "Fire NOC Compliant with Hydrants & Sprinklers",
      "150 KVA Dedicated Industrial Power Load",
      "Weighbridge and 24x7 Truck Turning Radius"
    ],
    highlights: [
      "Direct access to Eastern Peripheral Expressway (EPE)",
      "Proximity to Upcoming Jewar Airport Logistics Hub",
      "Approved for Manufacturing, Warehousing & Light Engineering"
    ],
    possession: "Immediate Move-In",
    reraApproved: true,
    reraId: "UPRERA2022I0093"
  },
  {
    id: "KVPM012",
    title: "Palm Meadows — 3 BHK Spacious Residential House",
    slug: "3-bhk-spacious-house-faridabad",
    category: "Residential",
    type: "House",
    listingType: "Sale",
    status: "Ready to Move",
    featured: false,
    price: "₹98 Lakh",
    priceNumeric: 9800000,
    pricePerSqFt: "₹5,444 / sq.ft.",
    area: "1,800 sq.ft.",
    areaNumeric: 1800,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    parking: 2,
    floor: "Duplex (G + 1)",
    furnishing: "Semi-Furnished",
    facing: "North-East",
    location: "Sector 85, Greater Faridabad (Neharpar)",
    city: "Faridabad",
    heroImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Charming independent duplex house featuring wide front verandah, modern open-plan modular kitchen, wooden wardrobes in all bedrooms, private terrace garden, and covered portico car parking.",
    amenities: [
      "Private Gated Driveway",
      "Terrace Garden with Pergola",
      "Round-the-clock Water Supply",
      "Modular Kitchen with Chimney",
      "Gated Sector with Guard Post"
    ],
    highlights: [
      "Near Amrita Super-Speciality Hospital",
      "Freehold registry with immediate bank loan approval",
      "Wide 12-meter road in front of the house"
    ],
    possession: "Ready to Move",
    reraApproved: true,
    reraId: "HRERA2023H0341"
  }
];

// Helper functions for property queries
function getPropertyById(id) {
  if (!id) return null;
  return PROPERTIES_DATA.find(p => p.id.toLowerCase() === id.toLowerCase() || p.slug === id.toLowerCase()) || null;
}

function getFeaturedProperties() {
  return PROPERTIES_DATA.filter(p => p.featured);
}

function getRelatedProperties(currentId, category, limit = 3) {
  return PROPERTIES_DATA
    .filter(p => p.id !== currentId && (p.category === category || p.city === p.city))
    .slice(0, limit);
}
