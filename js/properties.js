/**
 * KV PropMart — Properties Catalog & Filtering Engine
 * Handles live client-side multi-filtering, sorting, keyword search, pagination,
 * mobile filter drawer, and URL query parameter synchronization.
 */

document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.querySelector("#propertiesCatalogGrid");
  if (!gridContainer) return;

  initPropertiesPage();
});

function initPropertiesPage() {
  const gridContainer = document.querySelector("#propertiesCatalogGrid");
  const countDisplay = document.querySelector("#propertiesCountDisplay");
  const sortSelect = document.querySelector("#sortBySelect");
  const searchInput = document.querySelector("#propertySearchInput");
  const resetBtn = document.querySelector("#filterResetBtn");
  const mobileFilterBtn = document.querySelector("#mobileFilterToggle");
  const mobileFilterClose = document.querySelector("#mobileFilterClose");
  const filterSidebar = document.querySelector(".filters-sidebar");
  const loadMoreBtn = document.querySelector("#loadMorePropertiesBtn");

  // State
  let currentPage = 1;
  const itemsPerPage = 6;
  let filteredListings = [...PROPERTIES_DATA];

  // 1. Read URL Parameters on initial page load
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("category");
  const initialType = urlParams.get("type");
  const initialCity = urlParams.get("city");
  const initialListingType = urlParams.get("listingType");
  const initialKeyword = urlParams.get("q");

  // Sync checkboxes & inputs with URL
  if (initialListingType) {
    const radio = document.querySelector(`input[name="filterListingType"][value="${initialListingType}"]`);
    if (radio) radio.checked = true;
  }
  if (initialCategory) {
    const cb = document.querySelector(`input[name="filterCategory"][value="${initialCategory}"]`);
    if (cb) cb.checked = true;
  }
  if (initialType) {
    const cb = document.querySelector(`input[name="filterType"][value="${initialType}"]`);
    if (cb) cb.checked = true;
  }
  if (initialCity) {
    const select = document.querySelector("#filterCity");
    if (select) select.value = initialCity;
  }
  if (initialKeyword && searchInput) {
    searchInput.value = initialKeyword;
  }

  // 2. Main Filtering Function
  function applyFilters() {
    const selectedListingType = document.querySelector('input[name="filterListingType"]:checked')?.value || "all";

    const selectedCategories = Array.from(document.querySelectorAll('input[name="filterCategory"]:checked')).map(cb => cb.value);

    const selectedTypes = Array.from(document.querySelectorAll('input[name="filterType"]:checked')).map(cb => cb.value);

    const selectedBedrooms = document.querySelector('input[name="filterBedrooms"]:checked')?.value || "all";

    const selectedCity = document.querySelector("#filterCity")?.value || "all";
    const selectedMaxPrice = Number(document.querySelector("#filterMaxPrice")?.value) || 0;
    const keyword = (searchInput?.value || "").toLowerCase().trim();
    const sortVal = sortSelect?.value || "newest";

    filteredListings = PROPERTIES_DATA.filter(item => {
      // Listing type (Sale / Rent)
      if (selectedListingType !== "all" && item.listingType !== selectedListingType) {
        return false;
      }

      // Categories
      if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) {
        return false;
      }

      // Property types
      if (selectedTypes.length > 0 && !selectedTypes.includes(item.type)) {
        return false;
      }

      // City
      if (selectedCity !== "all" && item.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }

      // Bedrooms
      if (selectedBedrooms !== "all") {
        if (selectedBedrooms === "4+" && item.bedrooms < 4) return false;
        if (selectedBedrooms !== "4+" && item.bedrooms !== Number(selectedBedrooms)) return false;
      }

      // Max price
      if (selectedMaxPrice > 0 && item.priceNumeric > selectedMaxPrice) {
        return false;
      }

      // Keyword search (title, location, description, id)
      if (keyword) {
        const matchesTitle = item.title.toLowerCase().includes(keyword);
        const matchesLoc = item.location.toLowerCase().includes(keyword);
        const matchesDesc = item.description.toLowerCase().includes(keyword);
        const matchesId = item.id.toLowerCase().includes(keyword);
        if (!matchesTitle && !matchesLoc && !matchesDesc && !matchesId) {
          return false;
        }
      }

      return true;
    });

    // Sort listings
    if (sortVal === "price-low") {
      filteredListings.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortVal === "price-high") {
      filteredListings.sort((a, b) => b.priceNumeric - a.priceNumeric);
    } else if (sortVal === "area-high") {
      filteredListings.sort((a, b) => b.areaNumeric - a.areaNumeric);
    } // default: newest / order in dataset

    // Reset page to 1
    currentPage = 1;
    renderListings();
  }

  // 3. Render Listings to Grid with Pagination
  function renderListings() {
    if (countDisplay) {
      countDisplay.textContent = `Showing ${filteredListings.length} ${filteredListings.length === 1 ? 'property' : 'properties'}`;
    }

    if (filteredListings.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-white); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
          <div style="width: 60px; height: 60px; margin: 0 auto 1.25rem; background: var(--bg-subtle); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h3 style="margin-bottom: 0.5rem;">No properties found</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try adjusting your filters, budget, or location criteria to see more options.</p>
          <button class="btn btn-outline-dark" id="emptyResetBtn">Reset All Filters</button>
        </div>
      `;
      document.querySelector("#emptyResetBtn")?.addEventListener("click", resetAllFilters);
      if (loadMoreBtn) loadMoreBtn.style.display = "none";
      return;
    }

    const visibleItems = filteredListings.slice(0, currentPage * itemsPerPage);
    gridContainer.innerHTML = visibleItems.map(item => renderPropertyCardHTML(item)).join("");

    // Toggle Load More button
    if (loadMoreBtn) {
      if (visibleItems.length < filteredListings.length) {
        loadMoreBtn.style.display = "inline-flex";
        loadMoreBtn.textContent = `Load More (${filteredListings.length - visibleItems.length} Remaining)`;
      } else {
        loadMoreBtn.style.display = "none";
      }
    }
  }

  // 4. Reset Filters
  function resetAllFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    const defaultRadio = document.querySelector('input[name="filterListingType"][value="all"]');
    if (defaultRadio) defaultRadio.checked = true;
    const defaultBhk = document.querySelector('input[name="filterBedrooms"][value="all"]');
    if (defaultBhk) defaultBhk.checked = true;

    const citySelect = document.querySelector("#filterCity");
    if (citySelect) citySelect.value = "all";

    const maxPrice = document.querySelector("#filterMaxPrice");
    if (maxPrice) maxPrice.value = "0";

    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "newest";

    applyFilters();
  }

  // 5. Event Listeners
  document.querySelectorAll('.filters-sidebar input, .filters-sidebar select').forEach(el => {
    el.addEventListener("change", applyFilters);
  });

  if (sortSelect) sortSelect.addEventListener("change", applyFilters);

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(searchInput._timer);
      searchInput._timer = setTimeout(applyFilters, 250);
    });
  }

  if (resetBtn) resetBtn.addEventListener("click", resetAllFilters);

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentPage++;
      renderListings();
    });
  }

  // Mobile Filter Drawer Toggle
  if (mobileFilterBtn && filterSidebar) {
    mobileFilterBtn.addEventListener("click", () => {
      filterSidebar.classList.add("mobile-open");
      document.body.style.overflow = "hidden";
    });
  }

  if (mobileFilterClose && filterSidebar) {
    mobileFilterClose.addEventListener("click", () => {
      filterSidebar.classList.remove("mobile-open");
      document.body.style.overflow = "";
    });
  }

  // Initial Run
  applyFilters();
}
