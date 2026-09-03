/**
 * KV PropMart — Contact & Lead Capture Logic
 * Validates inputs, formats rich inquiry text, and connects directly via WhatsApp and tel.
 */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#mainContactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("#contactName")?.value.trim() || "";
    const phone = contactForm.querySelector("#contactPhone")?.value.trim() || "";
    const email = contactForm.querySelector("#contactEmail")?.value.trim() || "";
    const interestedIn = contactForm.querySelector("#contactInterest")?.value || "Buying Property";
    const location = contactForm.querySelector("#contactLocation")?.value.trim() || "Any Delhi NCR";
    const budget = contactForm.querySelector("#contactBudget")?.value.trim() || "Flexible";
    const message = contactForm.querySelector("#contactMessage")?.value.trim() || "";

    if (!name || !phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const waMsg = `Hello KV PropMart,\nI have submitted a new property inquiry:\n\n• Name: ${name}\n• Phone: ${phone}${email ? `\n• Email: ${email}` : ''}\n• Purpose: ${interestedIn}\n• Preferred Location: ${location}\n• Budget Range: ${budget}${message ? `\n• Requirement Details: ${message}` : ''}`;

    showToast("Launching WhatsApp with your inquiry details...");

    setTimeout(() => {
      window.open(SITE_CONFIG.buildWhatsAppUrl(waMsg), "_blank");
    }, 600);

    contactForm.reset();
  });
});
