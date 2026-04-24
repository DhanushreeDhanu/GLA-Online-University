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

//Part-5

//no js

/*==========Part 6==========*/
const counters = document.querySelectorAll(".counter-number");

counters.forEach(counter => {
  const target = +counter.dataset.target;
  const suffix = counter.dataset.suffixLast || "";
  let count = 0;

  const update = () => {
    const increment = target / 80;

    if (count < target) {
      count += increment;
      counter.innerHTML = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerHTML = target + suffix;
    }
  };

  update();
});

//part-6
const gharSwiper = new Swiper(".gharse_globle", {
  slidesPerView: 1,
  loop: true,
  speed: 1200, // smooth transition

  effect: "fade", // ⭐ no left-right movement
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

//part 7 no js
//part 8
const counter = document.querySelectorAll(".counter-number");

const animateCounter = (counter) => {
  const target = parseFloat(counter.dataset.target);
  const prefix = counter.dataset.prefix || "";
  const suffix = counter.dataset.suffixLast || "";

  let current = 0;
  const step = target / 80;

  const update = () => {
    if (current < target) {
      current += step;

      let value =
        target % 1 === 0
          ? Math.floor(current)
          : current.toFixed(1);

      counter.innerHTML = prefix + value + suffix;

      requestAnimationFrame(update);
    } else {
      counter.innerHTML = prefix + target + suffix;
    }
  };

  update();
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    animateCounter(entry.target);
    obs.unobserve(entry.target);
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
//====================Part 9==================
var swiper = new Swiper(".wall_distinction_slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    speed: 800, // 👈 transition speed (slide animation)

    autoplay: {
        delay: 10000, // 👈 10 seconds delay
        disableOnInteraction: false,
    },

    allowTouchMove: true, // optional (can swipe manually)

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 }
    }
});


//===================Part 10===================
document.addEventListener("DOMContentLoaded", function () {

    const iframe = document.getElementById("alumniVideo");
    const button = document.getElementById("soundToggle");

    const player = new Vimeo.Player(iframe);

    let isMuted = true;

    // ensure muted at start
    player.setVolume(0);

    button.addEventListener("click", function () {

        if (isMuted) {
            player.setVolume(1).then(() => {
                button.innerHTML = "🔊";
            });
        } else {
            player.setVolume(0).then(() => {
                button.innerHTML = "🔇";
            });
        }

        isMuted = !isMuted;
    });

});
/*====================================
part 11
====================================*/
var swiper = new Swiper(".alumni_events", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 }
    }
});

/*===================================
Part 12
===================================*/
