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

  // ===== Popup window (homepage only) =====
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

  // ===== Homepage Gallery Slider =====
  const car = document.getElementById("home-carousel");
  if (car) {
    const track = car.querySelector(".track");
    const slides = Array.from(track.children);
    let index = 0;

    function update(){ track.style.transform = `translateX(-${index * 100}%)`; }
    function next(){ index = (index + 1) % slides.length; update(); }
    function prev(){ index = (index - 1 + slides.length) % slides.length; update(); }

    const nextBtn = car.querySelector(".next");
    const prevBtn = car.querySelector(".prev");
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    // autoplay with pause on hover
    let timer = setInterval(next, 4000);
    car.addEventListener("mouseenter", () => clearInterval(timer));
    car.addEventListener("mouseleave", () => { timer = setInterval(next, 4000); });

    // keyboard support
    car.tabIndex = 0;
    car.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
  }
});
