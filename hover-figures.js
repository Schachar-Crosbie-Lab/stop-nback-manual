document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fig-hover").forEach(el => {
    const figId = el.dataset.fig;
    if (!figId) return;

    const fig = document.getElementById(figId);
    if (!fig) return;

    const img = fig.querySelector("img");
    if (!img) return;

    // Create tooltip container
    const tooltip = document.createElement("span");
    tooltip.className = "fig-tooltip";

    // Clone the figure image
    const clone = img.cloneNode(true);
    tooltip.appendChild(clone);

    // Attach tooltip to hovered element
    el.appendChild(tooltip);
  });
});