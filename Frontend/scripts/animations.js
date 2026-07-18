const REVEAL_SELECTOR = ".reveal";
const COUNTER_WRAPPER_SELECTOR = ".stats-grid";
const COUNTER_SELECTOR = "[data-count]";
const COUNTER_DURATION = 1500;

function initReveal() {
  const targets = document.querySelectorAll(REVEAL_SELECTOR);
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((target) => observer.observe(target));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const decimals = (el.dataset.count.split(".")[1] || "").length;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / COUNTER_DURATION, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = value.toFixed(decimals) + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function initCounters() {
  const wrapper = document.querySelector(COUNTER_WRAPPER_SELECTOR);
  if (!wrapper) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(COUNTER_SELECTOR).forEach(animateCounter);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(wrapper);
}

export { initReveal, initCounters };
