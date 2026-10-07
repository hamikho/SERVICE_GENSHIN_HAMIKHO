import { escapeHtml } from '../utils/helpers.js';

export function renderServiceCard(category, service) {
  return `
    <article class="service-card">
      <h4>${escapeHtml(service.name)}</h4>
      ${service.description ? `<p>${escapeHtml(service.description)}</p>` : ""}
      ${
        service.tags && service.tags.length
          ? `<div class="service-tags">${service.tags
              .slice(0, 3)
              .map((tag) => `<span>${escapeHtml(tag)}</span>`)
              .join("")}</div>`
          : ""
      }
      <div class="service-bottom">
        <span class="price">${escapeHtml(service.price)}</span>
        <button
          class="order-button"
          type="button"
          data-order="${escapeHtml(`${category.id}::${service.id}`)}"
          aria-label="Order ${escapeHtml(service.name)} from ${escapeHtml(category.name)}"
        >
          Order
        </button>
      </div>
    </article>
  `;
}

export function renderCategorySection(category, services) {
  if (!services.length) return "";
  
  return `
    <article class="category-section reveal" style="--accent: ${category.accent}" id="${category.id}">
      <div class="category-header">
        <div>
          <h3>${escapeHtml(category.name)}</h3>
          <p>${escapeHtml(category.summary)}</p>
        </div>
        <span class="category-badge">${services.length} services</span>
      </div>
      <div class="service-grid">
        ${services.map(service => renderServiceCard(category, service)).join("")}
      </div>
    </article>
  `;
}
