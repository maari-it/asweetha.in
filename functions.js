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
  function updateBtnUI() {
    if (currentLang === "en") {
      btn.classList.remove("bg-gradient-to-r", "from-yellow-400", "via-red-500", "to-pink-500", "text-white");
      btn.classList.add("bg-white", "hover:bg-gray-100", "border");
    } else {
      btn.classList.add("bg-gradient-to-r", "from-yellow-400", "via-red-500", "to-pink-500", "text-white");
      btn.classList.remove("bg-white", "hover:bg-gray-100", "border");
    }
  }

  updateBtnUI();

  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ta" : "en";
    localStorage.setItem("userLang", currentLang);
    applyTranslations(currentLang);
    updateBtnUI();
  });
}

});


