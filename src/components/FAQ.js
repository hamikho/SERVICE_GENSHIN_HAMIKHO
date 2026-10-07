import { escapeHtml } from '../utils/helpers.js';

export function renderFaq(faqs) {
  return faqs
    .map(
      (faq, index) => `
        <article class="faq-item${index === 0 ? " is-open" : ""}">
          <button
            class="faq-question"
            id="faq-question-${index}"
            type="button"
            aria-expanded="${index === 0 ? "true" : "false"}"
            aria-controls="faq-answer-${index}"
          >
            <span>Q: ${escapeHtml(faq.question)}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 15.4-6.3-6.3 1.4-1.4 4.9 4.9 4.9-4.9 1.4 1.4-6.3 6.3Z" />
            </svg>
          </button>
          <div class="faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}">
            <div>
              <p>A: ${escapeHtml(faq.answer)}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}
