import { DISCORD } from './src/config/site.js';
import { priceList } from './src/data/pricing.js';
import { regionCards } from './src/data/regions.js';
import { faqs } from './src/data/faq.js';
import { testimonials } from './src/data/reviews.js';
import { buildCategories } from './src/data/services.js';
import { getDefaultOrderMessage, getOrderMessage } from './src/utils/discord.js';
import { escapeHtml } from './src/utils/helpers.js';

import { renderRegionCards } from './src/components/RegionSection.js';
import { renderCategorySection } from './src/components/ServiceCard.js';
import { renderEndgame } from './src/components/EndgameSection.js';
import { renderFaq } from './src/components/FAQ.js';
import { renderTestimonials } from './src/components/Reviews.js';

const categories = buildCategories();

const state = {
  activeCategory: "all",
  query: "",
  selectedService: null,
};

const elements = {
  filterRow: document.querySelector("#filterRow"),
  catalogList: document.querySelector("#catalogList"),
  serviceSearch: document.querySelector("#serviceSearch"),
  searchResults: document.querySelector("#searchResults"),
  resultCount: document.querySelector("#resultCount"),
  regionGrid: document.querySelector("#regionGrid"),
  endgameGrid: document.querySelector("#endgameGrid"),
  faqList: document.querySelector("#faqList"),
  testimonialGrid: document.querySelector("#testimonialGrid"),
  menuToggle: document.querySelector("#menuToggle"),
  navMenu: document.querySelector("#navMenu"),
  backToTop: document.querySelector("#backToTop"),
  selectedService: document.querySelector("#selectedService"),
  orderMessage: document.querySelector("#orderMessage"),
  copyOrderButton: document.querySelector("#copyOrderButton"),
  copyStatus: document.querySelector("#copyStatus"),
  discordUsername: document.querySelector("#discordUsername"),
  discordInvite: document.querySelector("#discordInvite"),
  discordLink: document.querySelector("#discordLink"),
};

let revealObserver;

function getTotalServices() {
  return categories.reduce((total, category) => total + category.services.length, 0);
}

function findService(categoryId, serviceId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return null;
  const service = category.services.find((item) => item.id === serviceId);
  if (!service) return null;
  return { category, service };
}

function serviceMatches(category, service) {
  const text = [
    category.short,
    service.name,
    service.description,
    service.price,
    ...(service.tags || []),
  ]
    .join(" ")
    .toLowerCase();

  const matchesQuery = !state.query || text.includes(state.query);
  const matchesCategory = state.activeCategory === "all" || state.activeCategory === category.id;
  return matchesQuery && matchesCategory;
}

function getMatchedServices() {
  const matches = [];
  categories.forEach((category) => {
    category.services.forEach((service) => {
      if (!serviceMatches(category, service)) return;
      matches.push({ category, service });
    });
  });
  return matches;
}

function getSearchResultMatches(limit) {
  const broadCategoryIds = new Set(["archon-world-quest", "exploration-services"]);
  const uniqueMatches = new Map();

  getMatchedServices().forEach((match) => {
    const key = match.service.id;
    const existing = uniqueMatches.get(key);

    if (!existing) {
      uniqueMatches.set(key, match);
      return;
    }

    if (broadCategoryIds.has(existing.category.id) && !broadCategoryIds.has(match.category.id)) {
      uniqueMatches.set(key, match);
    }
  });

  const matches = [...uniqueMatches.values()];
  return typeof limit === "number" ? matches.slice(0, limit) : matches;
}

function renderSearchResults(visibleServices) {
  if (!elements.searchResults) return;

  if (!state.query) {
    document.body.classList.remove("is-searching");
    elements.searchResults.hidden = true;
    elements.searchResults.innerHTML = "";
    return;
  }

  const matches = getSearchResultMatches(6);
  const resultTotal = matches.length;
  document.body.classList.add("is-searching");
  elements.searchResults.hidden = false;

  if (!matches.length) {
    elements.searchResults.innerHTML = `
      <div class="search-results-head">
        <strong>No results for "${escapeHtml(state.query)}"</strong>
        <span>Try another service, region, or price keyword.</span>
      </div>
      <button class="search-clear" type="button" data-clear-search>Clear search</button>
    `;
    return;
  }

  elements.searchResults.innerHTML = `
    <div class="search-results-head">
      <strong>${resultTotal} result${resultTotal === 1 ? "" : "s"} for "${escapeHtml(state.query)}"</strong>
      <span>Tap a result to prepare the Discord order message.</span>
    </div>
    <div class="search-result-list">
      ${matches
        .map(
          ({ category, service }) => `
            <button
              class="search-result-item"
              type="button"
              data-order="${escapeHtml(`${category.id}::${service.id}`)}"
              aria-label="Order ${escapeHtml(service.name)} from ${escapeHtml(category.name)}"
            >
              <span>
                <strong>${escapeHtml(service.name)}</strong>
                <small>${escapeHtml(category.name)}</small>
              </span>
              <em>${escapeHtml(service.price)}</em>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderFilters() {
  const filters = [
    { id: "all", label: "All Services" },
    ...categories.map((category) => ({ id: category.id, label: category.short })),
  ];

  elements.filterRow.innerHTML = filters
    .map(
      (filter) => `
        <button
          class="filter-button${filter.id === state.activeCategory ? " is-active" : ""}"
          type="button"
          data-filter="${escapeHtml(filter.id)}"
        >
          ${escapeHtml(filter.label)}
        </button>
      `,
    )
    .join("");
  elements.filterRow.scrollLeft = 0;
}

function renderCatalog() {
  let visibleServices = 0;

  const renderedSections = categories
    .map((category) => {
      const services = category.services.filter((service) => serviceMatches(category, service));
      visibleServices += services.length;
      return renderCategorySection(category, services);
    })
    .join("");

  elements.catalogList.innerHTML =
    renderedSections ||
    `<div class="empty-state reveal">
      <strong>No services found.</strong>
      <span>Try another search or category.</span>
      <button class="filter-button" type="button" data-clear-search>Clear search</button>
    </div>`;

  const total = getTotalServices();
  elements.resultCount.textContent = `Showing ${visibleServices} of ${total} services`;
  renderSearchResults(visibleServices);
  observeReveals(elements.catalogList);
}

function selectService(category, service) {
  state.selectedService = { category, service };
  document.body.classList.remove("is-searching");
  if (elements.searchResults) {
    elements.searchResults.hidden = true;
  }
  elements.selectedService.innerHTML = `
    <span>${escapeHtml(category.name)}</span>
    <strong>${escapeHtml(service.name)} - ${escapeHtml(service.price)}</strong>
  `;
  elements.orderMessage.value = getOrderMessage(category, service);
  elements.copyStatus.textContent = "";
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToServices() {
  document.querySelector("#services").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  const helper = document.createElement("textarea");
  helper.value = value;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(helper);
  return copied;
}

async function copyOrderMessage() {
  const value = elements.orderMessage.value.trim();
  if (!value) return;

  try {
    await copyText(value);
    elements.copyStatus.textContent = "Order message copied.";
  } catch {
    elements.copyStatus.textContent = "Copy failed. Select the message manually.";
  }
}

async function copyContactValue(targetId) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  try {
    await copyText(target.textContent.trim());
    elements.copyStatus.textContent = "Discord contact copied.";
  } catch {
    elements.copyStatus.textContent = "Copy failed. Select the contact manually.";
  }
}

function setDiscordContact() {
  elements.discordUsername.textContent = DISCORD.username;
  elements.discordInvite.textContent = DISCORD.invite;
  elements.discordLink.href = DISCORD.invite;
  elements.discordLink.target = "_blank";
  elements.discordLink.rel = "noopener noreferrer";
}

function observeReveals(root = document) {
  if (!revealObserver) return;
  root.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => revealObserver.observe(item));
}

function setupRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
  );

  observeReveals(document);
}

function closeMobileMenu() {
  elements.navMenu.classList.remove("is-open");
  elements.menuToggle.classList.remove("is-open");
  elements.menuToggle.setAttribute("aria-expanded", "false");
}

function setupNavigation() {
  elements.menuToggle.addEventListener("click", () => {
    const isOpen = elements.navMenu.classList.toggle("is-open");
    elements.menuToggle.classList.toggle("is-open", isOpen);
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  elements.navMenu.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (href === "#home" || href === "#regions") {
      event.preventDefault();
      history.replaceState(null, "", href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMobileMenu();
  });

  const brand = document.querySelector(".brand");
  if (brand) {
    brand.addEventListener("click", (event) => {
      event.preventDefault();
      history.replaceState(null, "", "#home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
}

function setupCatalogEvents() {
  elements.filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.activeCategory = button.dataset.filter;
    renderFilters();
    renderCatalog();
    scrollToServices();
  });

  elements.serviceSearch.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderCatalog();
  });

  document.addEventListener("click", (event) => {
    const regionCard = event.target.closest("[data-region-target]");
    if (regionCard) {
      state.activeCategory = regionCard.dataset.regionTarget || "all";
      state.query = (regionCard.dataset.regionQuery || "").trim().toLowerCase();
      elements.serviceSearch.value = regionCard.dataset.regionQuery || "";
      renderFilters();
      renderCatalog();
      scrollToServices();
      return;
    }

    const clearSearchButton = event.target.closest("[data-clear-search]");
    if (clearSearchButton) {
      state.query = "";
      elements.serviceSearch.value = "";
      renderCatalog();
      return;
    }

    const orderButton = event.target.closest("[data-order]");
    if (!orderButton) return;
    const [categoryId, serviceId] = orderButton.dataset.order.split("::");
    const match = findService(categoryId, serviceId);
    if (!match) return;
    selectService(match.category, match.service);
  });
}

function setupFaqEvents() {
  elements.faqList.addEventListener("click", (event) => {
    const question = event.target.closest(".faq-question");
    if (!question) return;
    const item = question.closest(".faq-item");
    const isOpen = item.classList.toggle("is-open");
    question.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupFloatingButtons() {
  window.addEventListener(
    "scroll",
    () => {
      elements.backToTop.classList.toggle("is-visible", window.scrollY > 620);
    },
    { passive: true }
  );

  elements.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupCopyEvents() {
  elements.copyOrderButton.addEventListener("click", copyOrderMessage);

  document.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy-target]");
    if (!copyButton) return;
    copyContactValue(copyButton.dataset.copyTarget);
  });
}

function init() {
  setDiscordContact();
  elements.orderMessage.value = getDefaultOrderMessage();
  setupRevealObserver();
  setupNavigation();
  setupCatalogEvents();
  setupFaqEvents();
  setupFloatingButtons();
  setupCopyEvents();
  renderFilters();
  elements.regionGrid.innerHTML = renderRegionCards(regionCards);
  renderCatalog();
  elements.endgameGrid.innerHTML = renderEndgame(priceList.endgame, categories);
  elements.faqList.innerHTML = renderFaq(faqs);
  elements.testimonialGrid.innerHTML = renderTestimonials(testimonials);
  observeReveals(document);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
