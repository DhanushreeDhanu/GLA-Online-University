console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SWIPER
  ========================= */
  if (typeof Swiper !== "undefined") {
    new Swiper(".home_slider", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  /* =========================
     SEARCH OVERLAY
  ========================= */
  window.openSearch = function () {
    const overlay = document.getElementById("myOverlay");
    if (overlay) overlay.style.display = "block";
  };

  window.closeSearch = function () {
    const overlay = document.getElementById("myOverlay");
    if (overlay) overlay.style.display = "none";
  };

  /* =========================
     HAMBURGER MENU
  ========================= */
  const openBtn = document.querySelector(".hamb_open");
  const closeBtn = document.querySelector(".close_hamb");
  const menu = document.querySelector(".hamburger_menu");

  if (openBtn && menu) {
    openBtn.addEventListener("click", () => {
      menu.classList.add("active");
    });
  }

  if (closeBtn && menu) {
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  }

  document.addEventListener("click", (e) => {
    if (menu && openBtn && !menu.contains(e.target) && !openBtn.contains(e.target)) {
      menu.classList.remove("active");
    }
  });

  /* =========================
     COUNTER (FIXED)
  ========================= */
  const counters = document.querySelectorAll(".counter");

  const formatNumber = (value) => {
    if (value >= 1000000) return (value / 1000000).toFixed(1) + "M";
    if (value >= 1000) return Math.floor(value / 1000) + "K";
    return value;
  };

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"));

    if (isNaN(target)) return;

    const duration = 1500;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(eased * target);
      counter.innerText = formatNumber(currentValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.innerText = formatNumber(target);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      animateCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));

});
/* =========================
   PART 3
========================= */document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper !== "undefined") {
    new Swiper(".recruiter_slider_new", {
      slidesPerView: 3,     // 👈 only 3 visible
      spaceBetween: 10,
      loop: true,

      speed: 4000,          // smooth continuous

      autoplay: {
        delay: 0,           // 🔥 continuous moving
        disableOnInteraction: false,
      },

      pagination: {
        el: ".req_logo .swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".recruiter-button-next",
        prevEl: ".recruiter-button-prev",
      },

      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }
});

//Part 4//
document.addEventListener("DOMContentLoaded", function () {

  var swiper = new Swiper(".people_slider", {
    loop: true,

    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 20,

    speed: 800, // smooth transition

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // ⭐ progress line
    },

    // RESPONSIVE
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 2
      }
    }

  });

});