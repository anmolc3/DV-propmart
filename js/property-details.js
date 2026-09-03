/**
 * KV PropMart — Property Details Dynamic Renderer
 * Reads property ID from URL parameter (e.g., property-details.html?id=KVPM001),
 * injects all specs, images, amenities, interactive gallery switcher,
 * sticky lead generator, WhatsApp link, and related property listings.
 */

document.addEventListener("DOMContentLoaded", () => {
  initPropertyDetails();
});

function initPropertyDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const propId = urlParams.get("id") || "KVPM001";
  const property = getPropertyById(propId);

  if (!property) {
    renderNotFound();
    return;
  }

  // 1. Update Page Title & OpenGraph Meta
  document.title = `${property.title} | KV PropMart Real Estate`;

  // 2. Populate Header & Breadcrumbs
  const breadcrumbEl = document.querySelector("#detailBreadcrumbTitle");
  if (breadcrumbEl) breadcrumbEl.textContent = property.title;

  const titleEl = document.querySelector("#detailTitle");
  if (titleEl) titleEl.textContent = property.title;

  const locEl = document.querySelector("#detailLocation");
  if (locEl) locEl.textContent = property.location;

  const idBadge = document.querySelector("#detailIdBadge");
  if (idBadge) idBadge.textContent = `Property ID: ${property.id}`;

  const statusBadge = document.querySelector("#detailStatusBadge");
  if (statusBadge) statusBadge.textContent = property.status;

  const typeBadge = document.querySelector("#detailTypeBadge");
  if (typeBadge) typeBadge.textContent = property.type;

  // 3. Populate Price
  const priceEl = document.querySelector("#detailPrice");
  if (priceEl) priceEl.textContent = property.price;

  const pricePerSqFtEl = document.querySelector("#detailPricePerSqFt");
  if (pricePerSqFtEl) pricePerSqFtEl.textContent = property.pricePerSqFt;

  // 4. Populate Gallery
  const mainImage = document.querySelector("#galleryMainImage");
  const thumbsContainer = document.querySelector("#galleryThumbsContainer");

  if (mainImage && property.images && property.images.length > 0) {
    mainImage.src = property.images[0];
    mainImage.alt = property.title;

    if (thumbsContainer) {
      thumbsContainer.innerHTML = property.images.map((imgUrl, idx) => `
        <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
          <img src="${imgUrl}" alt="${property.title} - View ${idx + 1}" loading="lazy">
        </div>
      `).join("");

      thumbsContainer.querySelectorAll(".gallery-thumb").forEach(thumb => {
        thumb.addEventListener("click", () => {
          thumbsContainer.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
          const idx = Number(thumb.getAttribute("data-index"));
          mainImage.src = property.images[idx];
        });
      });
    }
  }

  // 5. Populate Description & Highlights
  const descEl = document.querySelector("#detailDescription");
  if (descEl) descEl.textContent = property.description;

  const highlightsContainer = document.querySelector("#detailHighlightsList");
  if (highlightsContainer && property.highlights) {
    highlightsContainer.innerHTML = property.highlights.map(h => `
      <li style="display: flex; align-items: flex-start; gap: 0.6rem; margin-bottom: 0.6rem; font-size: 0.95rem; color: var(--text-main);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${h}</span>
      </li>
    `).join("");
  }

  // 6. Populate Specifications Grid
  const specsGrid = document.querySelector("#detailSpecsGrid");
  if (specsGrid) {
    const specs = [
      { key: "Property Type", val: property.type },
      { key: "Category", val: property.category },
      { key: "Super Built-up Area", val: property.area },
      { key: "Bedrooms (BHK)", val: property.bedrooms > 0 ? `${property.bedrooms} BHK` : "N/A" },
      { key: "Bathrooms", val: property.bathrooms > 0 ? property.bathrooms : "N/A" },
      { key: "Balconies", val: property.balconies > 0 ? property.balconies : "N/A" },
      { key: "Dedicated Parking", val: `${property.parking} Reserved` },
      { key: "Floor", val: property.floor },
      { key: "Furnishing Status", val: property.furnishing },
      { key: "Facing Direction", val: property.facing },
      { key: "Possession Status", val: property.possession },
      { key: "RERA Registration", val: property.reraId || "Approved" }
    ];

    specsGrid.innerHTML = specs.map(s => `
      <div class="detail-spec-item">
        <span class="spec-key">${s.key}</span>
        <span class="spec-val">${s.val}</span>
      </div>
    `).join("");
  }

  // 7. Populate Amenities Chips
  const amenitiesGrid = document.querySelector("#detailAmenitiesGrid");
  if (amenitiesGrid && property.amenities) {
    amenitiesGrid.innerHTML = property.amenities.map(a => `
      <div class="amenity-chip">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${a}</span>
      </div>
    `).join("");
  }

  // 8. Sticky Sidebar Inquiry Card Actions
  const sidebarPrice = document.querySelector("#sidebarPrice");
  if (sidebarPrice) sidebarPrice.textContent = property.price;

  const sidebarSqFt = document.querySelector("#sidebarSqFt");
  if (sidebarSqFt) sidebarSqFt.textContent = property.pricePerSqFt;

  const waBtn = document.querySelector("#detailWhatsAppBtn");
  if (waBtn) {
    waBtn.href = SITE_CONFIG.buildWhatsAppUrl(SITE_CONFIG.buildPropertyInquiryMsg(property));
  }

  const siteVisitBtn = document.querySelector("#detailSiteVisitBtn");
  if (siteVisitBtn) {
    siteVisitBtn.setAttribute("data-property-id", property.id);
    siteVisitBtn.setAttribute("data-property-title", property.title);
  }

  // Sticky Quick Inquiry Form Submit
  const detailForm = document.querySelector("#detailInquiryForm");
  if (detailForm) {
    detailForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = detailForm.querySelector("#quickName")?.value || "";
      const phone = detailForm.querySelector("#quickPhone")?.value || "";
      const msg = detailForm.querySelector("#quickMsg")?.value || "";

      if (!name || !phone) {
        alert("Please enter your name and phone number.");
        return;
      }

      const waMsg = `Hello KV PropMart, I am inquiring about "${property.title}" (ID: ${property.id}).\n• Name: ${name}\n• Phone: ${phone}${msg ? `\n• Question: ${msg}` : ''}`;

      showToast("Preparing WhatsApp inquiry with property details...");
      setTimeout(() => {
        window.open(SITE_CONFIG.buildWhatsAppUrl(waMsg), "_blank");
      }, 600);
      detailForm.reset();
    });
  }

  // 9. Related Properties
  const relatedGrid = document.querySelector("#relatedPropertiesGrid");
  if (relatedGrid) {
    const related = getRelatedProperties(property.id, property.category, 3);
    if (related.length > 0) {
      relatedGrid.innerHTML = related.map(p => renderPropertyCardHTML(p)).join("");
    } else {
      document.querySelector("#relatedSection")?.remove();
    }
  }
}

function renderNotFound() {
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = `
      <section class="section">
        <div class="container text-center" style="text-align: center; padding: 4rem 1rem;">
          <h1 style="margin-bottom: 1rem;">Property Not Found</h1>
          <p style="color: var(--text-muted); margin-bottom: 2rem;">The requested property listing could not be found or may have been updated.</p>
          <a href="properties.html" class="btn btn-gold btn-lg">Browse All Properties</a>
        </div>
      </section>
    `;
  }
}
