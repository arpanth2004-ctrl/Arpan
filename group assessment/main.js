document.addEventListener("DOMContentLoaded", () => {
  // ===== Back to Top button =====
  const backToTop = document.createElement("button");
  backToTop.id = "backToTop";
  backToTop.textContent = "↑";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Welcome alert only on homepage =====
  if (document.title.includes("Home")) {
    setTimeout(() => {
      alert("Welcome to Wanderlust Trails! Ready to plan your next trip?");
    }, 1500);
  }

  // ===== Popup window (homepage button only) =====
  const dealBtn = document.getElementById("open-deal");
  if (dealBtn) {
    dealBtn.addEventListener("click", () => {
      window.open(
        "https://example.com/deals",
        "dealPopup",
        "width=500,height=400"
      );
    });
  }
});
