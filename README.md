# KV PropMart — Premium Real Estate Website

A modern, responsive, static real-estate consultancy website for **KV PropMart** built with clean HTML5, CSS3, and Vanilla JavaScript.

---

## 🌟 Highlights & Features

- **Luxury Design System**: Deep navy (`#0A1120`) paired with imperial warm gold accents (`#C89B3C`), crisp typography (`Outfit` & `Inter`), and high-end imagery.
- **Dynamic Property Filtering**: Instant client-side filtering by Listing Type (*Sale/Rent*), Category (*Residential, Commercial, Plots, Luxury*), City (*Delhi, Gurugram, Noida, Ghaziabad, Faridabad*), BHK, and Budget Range.
- **Dynamic Property Detail Page (`property-details.html?id=KVPM...`)**: Single reusable template that resolves any property ID from `js/properties-data.js`, featuring interactive image thumbnail switcher, specifications table, amenities chips, and related listings.
- **Contextual WhatsApp Lead System**: Clicking WhatsApp on any property or contact form dynamically composes a pre-filled WhatsApp message with property title, ID, price, and location.
- **Centralized Configuration (`js/config.js`)**: Change phone number, WhatsApp number, email, address, and business hours in one single file.
- **Mobile-First Experience**: Touch-friendly hamburger menu, slide-out filter drawer, sticky bottom quick-action bar (*Call | WhatsApp | Enquire*), and responsive breakpoints (320px to 1920px).
- **SEO & Accessibility**: Complete Open Graph metadata, semantic HTML5, Schema.org `RealEstateAgent` JSON-LD schema, and WCAG-compliant color contrast.

---

## 📁 File Structure

```
KV PropMart/
│
├── index.html              # Homepage
├── properties.html         # Properties Catalog & Live Filters
├── property-details.html   # Dynamic Property Detail View (?id=...)
├── about.html              # About Us, Mission, Values & 5-Step Process
├── services.html           # 8 Core Real Estate Services & Advisory
├── contact.html            # Contact Desk & Interactive Lead Form
├── faq.html                # Categorized FAQ Accordion with instant search
├── privacy.html            # Privacy Policy
├── terms.html              # Terms & Conditions
├── 404.html                # Custom 404 Page
│
├── css/
│   ├── style.css           # Core design tokens, typography, header & footer
│   ├── components.css      # Cards, search panel, trust strip, badges & modals
│   └── responsive.css     # Mobile drawer, filter drawer & sticky bottom bar
│
├── js/
│   ├── config.js           # Central business info & WhatsApp URL helper
│   ├── properties-data.js  # Centralized properties database (12 listings)
│   ├── main.js             # Global utilities, sticky header & modals
│   ├── properties.js       # Live catalog multi-filter & sorting engine
│   ├── property-details.js # Dynamic property renderer & gallery switcher
│   └── contact.js          # Lead capture form validation & WhatsApp sender
│
├── assets/
│   ├── favicon/            # Site favicons and web manifest
│   ├── images/             # High-res generated and curated assets
│   ├── icons/              # Scalable SVG icons
│   └── logo/
│       └── logo.png        # KV PropMart brand logo
│
└── README.md
```

---

## ⚙️ How to Customize

### 1. Updating Business Information
Open [`js/config.js`](file:///c:/Users/anmol/OneDrive/Desktop/KV%20PropMart/js/config.js) to edit phone number, WhatsApp number, email, and address:
```javascript
const SITE_CONFIG = {
  businessName: "KV PropMart",
  phone: "+91 88009 94453",
  phoneRaw: "+91 88009 94453",
  whatsapp: "+91 88009 94453",
  whatsappNumber: "918800994453", // No plus sign for WhatsApp API
  email: "info@KVpropmart.com",
  address: "UGF-7, Parsvnath Bibhab Plaza, Alpha-I Commercial Belt, Block E, Alpha I, Greater Noida, Uttar Pradesh - 201310",
  city: "Greater Noida, Delhi NCR"
};
```

### 2. Adding / Editing Property Listings
Open [`js/properties-data.js`](file:///c:/Users/anmol/OneDrive/Desktop/KV%20PropMart/js/properties-data.js) and add a new object to `PROPERTIES_DATA`:
```javascript
{
  id: "KVPM013",
  title: "Bespoke 4 BHK Luxury Villa",
  category: "Residential", // Residential | Commercial | Plots & Land | Luxury Properties
  type: "Villa",          // Apartment | Villa | House | Plot/Land | Commercial | Office | Shop | Industrial
  listingType: "Sale",    // Sale | Rent
  status: "Ready to Move",
  featured: true,
  price: "₹2.75 Cr",
  priceNumeric: 27500000,
  pricePerSqFt: "₹7,236 / sq.ft.",
  area: "3,800 sq.ft.",
  areaNumeric: 3800,
  bedrooms: 4,
  bathrooms: 4,
  parking: 3,
  location: "Sector 150, Noida Expressway",
  city: "Noida",
  heroImage: "assets/images/hero-home.webp",
  images: [...],
  description: "...",
  amenities: ["Swimming Pool", "Clubhouse", "24x7 Security"],
  highlights: ["Near Metro", "Vastu Compliant"]
}
```

---

## 🚀 Running Locally

Because this is a pure static site with Vanilla JS:
1. Open [`index.html`](file:///c:/Users/anmol/OneDrive/Desktop/KV%20PropMart/index.html) directly in any modern browser, or
2. Serve using any local web server (e.g., VS Code Live Server, `npx serve .`, or Python `python -m http.server 8000`).

---

## 📄 License & Ownership
Copyright © 2026 KV PropMart. All Rights Reserved.
