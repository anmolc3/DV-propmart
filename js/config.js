/**
 * KV PropMart — Central Site Configuration
 * Update contact details, phone numbers, WhatsApp, and social links in this single file.
 */

const SITE_CONFIG = {
  businessName: "KV PropMart",
  tagline: "Premier Real Estate Consultancy",
  phone: "+91 88009 94453",          // Editable display phone number
  phoneRaw: "+918800994453",         // Clean format for tel: links
  whatsapp: "+91 88009 94453",       // Display WhatsApp number
  whatsappNumber: "918800994453",    // WhatsApp API formatted number (without +)
  email: "info@KVpropmart.com",
  inquiryEmail: "sales@KVpropmart.com",
  address: "UGF-7, Parsvnath Bibhab Plaza, Alpha-I Commercial Belt, Block E, Alpha I, Greater Noida, Uttar Pradesh - 201310",
  shortAddress: "Parsvnath Bibhab Plaza, Alpha-I, Greater Noida",
  city: "Greater Noida, Delhi NCR",
  state: "Uttar Pradesh & Delhi NCR",
  country: "India",
  mapUrl: "https://maps.app.goo.gl/RGYpHD5rE8jEWtjaA",

  // Social Media Links (Editable placeholders)
  social: {
    facebook: "https://facebook.com/KVpropmart",
    instagram: "https://instagram.com/KVpropmart",
    linkedin: "https://linkedin.com/company/KVpropmart",
    youtube: "https://youtube.com/@KVpropmart"
  },

  // WhatsApp Lead Message Builder Helper
  buildWhatsAppUrl: function (customMessage) {
    const encoded = encodeURIComponent(customMessage || "Hello KV PropMart, I would like to inquire about real estate properties.");
    const num = this.whatsappNumber ? `${this.whatsappNumber}` : "";
    return `https://wa.me/${num}?text=${encoded}`;
  },

  buildPropertyInquiryMsg: function (prop) {
    return `Hello KV PropMart, I am interested in "${prop.title}" (ID: ${prop.id}) located in ${prop.location} priced at ${prop.price}. Please share more details and arrange a site visit.`;
  }
};

// Global DOM updater for configuration elements
document.addEventListener("DOMContentLoaded", () => {
  function updateElementText(el, newText) {
    const span = el.querySelector("span:not(.wa-status-dot)");
    if (span) {
      span.textContent = newText;
    } else if (!el.querySelector("svg, img")) {
      el.textContent = newText;
    }
  }

  // Update elements with data-config attribute
  document.querySelectorAll("[data-config='phone']").forEach(el => {
    updateElementText(el, SITE_CONFIG.phone);
    if (el.tagName === "A") el.href = `tel:${SITE_CONFIG.phoneRaw}`;
  });

  document.querySelectorAll("[data-config='whatsapp'], [data-config='whatsapp-action']").forEach(el => {
    if (el.classList.contains("floating-whatsapp-btn") || el.getAttribute("data-config") === "whatsapp-action") {
      if (el.tagName === "A") el.href = SITE_CONFIG.buildWhatsAppUrl();
    } else {
      updateElementText(el, SITE_CONFIG.whatsapp);
      if (el.tagName === "A") el.href = SITE_CONFIG.buildWhatsAppUrl();
    }
  });

  document.querySelectorAll("[data-config='email']").forEach(el => {
    updateElementText(el, SITE_CONFIG.email);
    if (el.tagName === "A") el.href = `mailto:${SITE_CONFIG.email}`;
  });

  document.querySelectorAll("[data-config='shortAddress']").forEach(el => {
    updateElementText(el, SITE_CONFIG.shortAddress);
    if (el.tagName === "A") {
      el.href = SITE_CONFIG.mapUrl;
      el.target = "_blank";
      el.rel = "noopener";
    }
  });

  document.querySelectorAll("[data-config='address']").forEach(el => {
    updateElementText(el, SITE_CONFIG.address);
    if (el.tagName === "A") {
      el.href = SITE_CONFIG.mapUrl;
      el.target = "_blank";
      el.rel = "noopener";
    }
  });

  document.querySelectorAll("[data-config='businessName']").forEach(el => {
    updateElementText(el, SITE_CONFIG.businessName);
  });
});
