/**
 * DV PropMart — Central Site Configuration
 * Update contact details, phone numbers, WhatsApp, and social links in this single file.
 */

const SITE_CONFIG = {
  businessName: "DV PropMart",
  tagline: "Premier Real Estate Consultancy",
  phone: "+91 XXXXX XXXXX",          // Editable display phone number
  phoneRaw: "",                      // Clean format for tel: links (e.g. +91 XXXXX XXXXX)
  whatsapp: "+91 XXXXX XXXXX",       // Display WhatsApp number
  whatsappNumber: "",                // WhatsApp API formatted number (without +) e.g. 
  email: "info@dvpropmart.com",
  inquiryEmail: "sales@dvpropmart.com",
  address: "Suite 408, Tower B, Sector 62, Noida, Delhi NCR - 201309",
  city: "Noida / Delhi NCR",
  state: "Uttar Pradesh & Delhi NCR",
  country: "India",
  businessHours: "Mon - Sat: 9:30 AM - 7:30 PM | Sun: By Appointment",
  
  // Social Media Links (Editable placeholders)
  social: {
    facebook: "https://facebook.com/dvpropmart",
    instagram: "https://instagram.com/dvpropmart",
    linkedin: "https://linkedin.com/company/dvpropmart",
    youtube: "https://youtube.com/@dvpropmart"
  },

  // WhatsApp Lead Message Builder Helper
  buildWhatsAppUrl: function (customMessage) {
    const encoded = encodeURIComponent(customMessage || "Hello DV PropMart, I would like to inquire about real estate properties.");
    const num = this.whatsappNumber ? `${this.whatsappNumber}` : "";
    return `https://wa.me/${num}?text=${encoded}`;
  },

  buildPropertyInquiryMsg: function (prop) {
    return `Hello DV PropMart, I am interested in "${prop.title}" (ID: ${prop.id}) located in ${prop.location} priced at ${prop.price}. Please share more details and arrange a site visit.`;
  }
};

// Global DOM updater for configuration elements
document.addEventListener("DOMContentLoaded", () => {
  // Update elements with data-config attribute
  document.querySelectorAll("[data-config='phone']").forEach(el => {
    el.textContent = SITE_CONFIG.phone;
    if (el.tagName === "A") el.href = `tel:${SITE_CONFIG.phoneRaw}`;
  });

  document.querySelectorAll("[data-config='whatsapp']").forEach(el => {
    el.textContent = SITE_CONFIG.whatsapp;
    if (el.tagName === "A") el.href = SITE_CONFIG.buildWhatsAppUrl();
  });

  document.querySelectorAll("[data-config='email']").forEach(el => {
    el.textContent = SITE_CONFIG.email;
    if (el.tagName === "A") el.href = `mailto:${SITE_CONFIG.email}`;
  });

  document.querySelectorAll("[data-config='address']").forEach(el => {
    el.textContent = SITE_CONFIG.address;
  });

  document.querySelectorAll("[data-config='businessHours']").forEach(el => {
    el.textContent = SITE_CONFIG.businessHours;
  });

  document.querySelectorAll("[data-config='businessName']").forEach(el => {
    el.textContent = SITE_CONFIG.businessName;
  });
});
