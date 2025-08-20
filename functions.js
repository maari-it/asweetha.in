// Function to apply translations on page based on chosen language
function applyTranslations(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`) || el.textContent;
    if (el.placeholder !== undefined) {
      const placeholder = el.getAttribute(`data-placeholder-${lang}`);
      if (placeholder) el.placeholder = placeholder;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = localStorage.getItem("userLang") || "en";
  applyTranslations(currentLang);

  const btn = document.getElementById("translateBtn");
  if (btn) {
    btn.textContent = currentLang === "en" ? "தமிழ்" : "English";
    btn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ta" : "en";
      localStorage.setItem("userLang", currentLang);
      applyTranslations(currentLang);
      btn.textContent = currentLang === "en" ? "தமிழ்" : "English";
    });
  }
});
