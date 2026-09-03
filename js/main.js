/**
 * KV PropMart — Main Global JavaScript
 * Handles navigation, mobile menu, scroll effects, back-to-top, toast notifications,
 * global inquiry modals, and WhatsApp lead interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileMenu();
  initScrollAnimations();
  initBackToTop();
  initGlobalModals();
  highlightActiveNavLink();
  initPropertyCardHelpers();
  initHeroSlideshow();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER & SCROLL BEHAVIOR
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const drawer = document.querySelector(".mobile-nav-drawer");
  const backdrop = document.querySelector(".mobile-nav-backdrop");
  if (!menuBtn || !drawer) return;

  const toggleMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !drawer.classList.contains("open");
    menuBtn.classList.toggle("open", shouldOpen);
    drawer.classList.toggle("open", shouldOpen);
    if (backdrop) backdrop.classList.toggle("open", shouldOpen);
    document.body.style.overflow = shouldOpen ? "hidden" : "";
  };

  menuBtn.addEventListener("click", () => toggleMenu());
  if (backdrop) backdrop.addEventListener("click", () => toggleMenu(false));

  // Close when clicking drawer remover / close button
  const closeBtn = drawer.querySelector(".mobile-drawer-close-btn");
  if (closeBtn) closeBtn.addEventListener("click", () => toggleMenu(false));

  // Close when clicking any drawer link
  drawer.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });
}

/* --------------------------------------------------------------------------
   3. ACTIVE NAVIGATION HIGHLIGHT
   -------------------------------------------------------------------------- */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  allNavLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Normalize links
    if (href === currentPath || (currentPath === "" && href === "index.html") || (currentPath === "index.html" && href === "./")) {
      link.classList.add("active");
    } else if (href.includes("properties.html") && currentPath.includes("property-details.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* --------------------------------------------------------------------------
   4. SCROLL REVEAL (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length || !("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   6. GLOBAL TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

/* --------------------------------------------------------------------------
   7. GLOBAL INQUIRY MODAL (Schedule Site Visit / Quick Inquiry)
   -------------------------------------------------------------------------- */
function initGlobalModals() {
  const modal = document.querySelector("#inquiryModal");
  if (!modal) return;

  const closeBtns = modal.querySelectorAll(".modal-close-btn, .modal-backdrop-close");
  const modalTitle = modal.querySelector(".modal-title");
  const modalSubtitle = modal.querySelector(".modal-subtitle");
  const form = modal.querySelector("#modalInquiryForm");
  const propIdInput = modal.querySelector("#modalPropertyId");
  const propTitleInput = modal.querySelector("#modalPropertyTitle");

  // Open modal triggers
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-modal-target='inquiryModal']");
    if (!trigger) return;

    e.preventDefault();
    const propId = trigger.getAttribute("data-property-id") || "";
    const propTitle = trigger.getAttribute("data-property-title") || "";
    const inquiryType = trigger.getAttribute("data-inquiry-type") || "General Inquiry";

    if (propIdInput) propIdInput.value = propId;
    if (propTitleInput) propTitleInput.value = propTitle;

    if (modalTitle) {
      modalTitle.textContent = inquiryType === "Site Visit" ? "Schedule a Property Site Visit" : "Inquire About Property";
    }
    if (modalSubtitle) {
      modalSubtitle.textContent = propTitle ? `Regarding: ${propTitle} (${propId})` : "Speak directly with our expert real estate advisors.";
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  // Close triggers
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // Form submission handler
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#modalName")?.value || "";
      const phone = form.querySelector("#modalPhone")?.value || "";
      const date = form.querySelector("#modalDate")?.value || "Earliest convenience";
      const message = form.querySelector("#modalMessage")?.value || "";
      const propTitle = propTitleInput?.value || "Property Inquiry";
      const propId = propIdInput?.value || "";

      if (!name.trim() || !phone.trim()) {
        alert("Please enter your name and phone number.");
        return;
      }

      // Construct customized WhatsApp message
      const waMsg = `Hello KV PropMart, I would like to schedule a site visit / inquiry for:\n• Property: ${propTitle} ${propId ? `(ID: ${propId})` : ''}\n• Name: ${name}\n• Phone: ${phone}\n• Preferred Date: ${date}${message ? `\n• Notes: ${message}` : ''}`;

      const waUrl = SITE_CONFIG.buildWhatsAppUrl(waMsg);

      // Close modal
      modal.classList.remove("open");
      document.body.style.overflow = "";
      form.reset();

      showToast("Opening WhatsApp with your site visit request details!");
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 700);
    });
  }
}

/* --------------------------------------------------------------------------
   8. PROPERTY CARD WHATSAPP LAUNCHER HELPER
   -------------------------------------------------------------------------- */
function initPropertyCardHelpers() {
  document.addEventListener("click", (e) => {
    const waBtn = e.target.closest("[data-action='wa-inquire']");
    if (!waBtn) return;

    e.preventDefault();
    const id = waBtn.getAttribute("data-property-id");
    const title = waBtn.getAttribute("data-property-title") || "Property";
    const price = waBtn.getAttribute("data-property-price") || "";
    const loc = waBtn.getAttribute("data-property-loc") || "";

    const msg = `Hello KV PropMart, I am interested in "${title}" (ID: ${id}) in ${loc} priced at ${price}. Please share full brochure and availability details.`;
    const url = SITE_CONFIG.buildWhatsAppUrl(msg);
    window.open(url, "_blank");
  });
}

/* --------------------------------------------------------------------------
   9. RENDER PROPERTY CARD HTML GENERATOR
   -------------------------------------------------------------------------- */
function renderPropertyCardHTML(prop) {
  return `
    <article class="property-card" data-category="${prop.category}" data-type="${prop.type}" data-city="${prop.city}">
      <div class="property-card-thumb">
        <a href="property-details.html?id=${prop.id}">
          <img src="${prop.heroImage}" alt="${prop.title}" loading="lazy">
        </a>
        <div class="property-badges-top">
          <span class="badge-pill badge-type">${prop.type}</span>
          ${prop.featured ? '<span class="badge-pill badge-featured">Featured</span>' : `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.9); color: #fff;">${prop.status}</span>`}
        </div>
        <div class="property-card-price-overlay">
          <div class="property-price-text">${prop.price}</div>
        </div>
      </div>
      
      <div class="property-card-body">
        <div class="property-location">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${prop.location}</span>
        </div>

        <h3 class="property-card-title">
          <a href="property-details.html?id=${prop.id}">${prop.title}</a>
        </h3>

        <p class="property-card-desc">${prop.description}</p>

        <div class="property-specs-list">
          <div class="spec-item" title="Carpet Area">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <path d="M3 9h18M9 21V9"></path>
            </svg>
            <span>${prop.area}</span>
          </div>
          ${prop.bedrooms > 0 ? `
          <div class="spec-item" title="Bedrooms">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"></path>
            </svg>
            <span>${prop.bedrooms} BHK</span>
          </div>
          ` : `
          <div class="spec-item" title="Category">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21h18M3 7v14M21 7v14M6 3h12l3 4H3l3-4z"></path>
            </svg>
            <span>${prop.category}</span>
          </div>
          `}
          <div class="spec-item" title="Parking">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="5" width="20" height="14" rx="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
            <span>${prop.parking} Park</span>
          </div>
        </div>

        <div class="property-card-footer">
          <a href="property-details.html?id=${prop.id}" class="btn btn-outline-dark btn-sm">
            View Details
          </a>
          <button class="btn btn-whatsapp btn-sm" data-action="wa-inquire" data-property-id="${prop.id}" data-property-title="${prop.title}" data-property-price="${prop.price}" data-property-loc="${prop.location}" title="Inquire on WhatsApp">
            <img src="assets/icons/whatsapp.svg" alt="WhatsApp" class="wa-icon-img">
            WhatsApp
          </button>
        </div>
      </div>
    </article>
  `;
}

/* --------------------------------------------------------------------------
   8. HERO BACKGROUND SLIDESHOW WITH SMOOTH FADE ANIMATION
   -------------------------------------------------------------------------- */
function initHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (!slides.length) return;

  let currentIndex = 0;
  let timer = null;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentIndex = index;
  }

  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    showSlide(next);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      if (!isNaN(idx)) {
        showSlide(idx);
        startAutoplay();
      }
    });
  });

  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoplay);
    heroSection.addEventListener("mouseleave", startAutoplay);
  }

  startAutoplay();
}
