import { escapeHtml } from '../utils/helpers.js';

export function renderTestimonials(testimonials) {
  return testimonials
    .map(
      (testimonial) => `
        <article class="testimonial-card reveal">
          <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <blockquote>${escapeHtml(testimonial.review)}</blockquote>
          <div class="reviewer">
            <span class="reviewer-mark" aria-hidden="true">${escapeHtml(testimonial.name.slice(0, 1))}</span>
            <div>
              <strong>${escapeHtml(testimonial.name)}</strong>
              <span>${escapeHtml(testimonial.role)}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}
