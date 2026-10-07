import { escapeHtml, rupiah, slug } from '../utils/helpers.js';

export function renderEndgame(endgameData, categories) {
  return endgameData
    .map((group) => {
      const category = categories.find((item) => item.id === "endgame-services");
      const serviceRows = group.services
        .map((service) => {
          const serviceId = `endgame-${slug(group.category)}-${slug(service.name)}`;
          return `
            <li>
              <span>${escapeHtml(service.name)}</span>
              <strong>${escapeHtml(rupiah(service.price))}</strong>
              <button
                class="order-button"
                type="button"
                data-order="${escapeHtml(`${category.id}::${serviceId}`)}"
                aria-label="Order ${escapeHtml(group.category)} ${escapeHtml(service.name)}"
              >
                Order
              </button>
            </li>
          `;
        })
        .join("");

      return `
        <article class="endgame-card reveal" style="--accent: ${category.accent}">
          <span>Endgame</span>
          <h3>${escapeHtml(group.category)}</h3>
          <p>VIP sesuai jadwal, VIP di luar jadwal, dan VVIP / Express.</p>
          <ul class="tier-list">${serviceRows}</ul>
        </article>
      `;
    })
    .join("");
}
