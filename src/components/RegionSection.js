import { escapeHtml } from '../utils/helpers.js';

export function renderRegionCards(regionCards) {
  return regionCards
    .map(
      (region) => `
        <button
          class="region-card reveal region-card-${escapeHtml(region.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}"
          type="button"
          style="--accent: ${region.accent}"
          data-region="${escapeHtml(region.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}"
          data-region-target="${escapeHtml(region.target)}"
          data-region-query="${escapeHtml(region.query || "")}"
        >
          <span class="region-image">
            <img src="${escapeHtml(region.image)}" alt="" loading="lazy" />
          </span>
          <span class="region-content">
            <span class="region-symbol" aria-hidden="true">
              <img src="${escapeHtml(region.emblem)}" alt="" />
            </span>
            <strong>${escapeHtml(region.name)}</strong>
            <span>${escapeHtml(region.subtitle)}</span>
            <span class="region-highlights">
              ${region.highlights.map((highlight) => `<small>${escapeHtml(highlight)}</small>`).join("")}
            </span>
            <em>View Services</em>
          </span>
        </button>
      `
    )
    .join("");
}
