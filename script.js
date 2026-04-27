document.addEventListener("DOMContentLoaded", function () {
  console.log("SCRIPT LOADED");

  /* HEADER SCROLL */
const header = document.querySelector(".main_header");

function handleHeaderScroll() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 20);
}

handleHeaderScroll();
window.addEventListener("scroll", handleHeaderScroll);


  /* HOME SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".home_slider", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".home_banner .swiper-pagination",
        clickable: true,
      },
    });
  }

  /* SEARCH OVERLAY */
  window.openSearch = function () {
    const overlay = document.getElementById("myOverlay");
    if (overlay) overlay.style.display = "block";
  };

  window.closeSearch = function () {
    const overlay = document.getElementById("myOverlay");
    if (overlay) overlay.style.display = "none";
  };

  /* HAMBURGER MENU */
  const openBtn = document.querySelector(".hamb_open");
  const closeBtn = document.querySelector(".close_hamb");
  const menu = document.querySelector(".hamburger_menu");

  if (openBtn && menu) {
    openBtn.addEventListener("click", function () {
      menu.classList.add("active");
    });
  }

  if (closeBtn && menu) {
    closeBtn.addEventListener("click", function () {
      menu.classList.remove("active");
    });
  }

  document.addEventListener("click", function (e) {
    if (
      menu &&
      openBtn &&
      !menu.contains(e.target) &&
      !openBtn.contains(e.target)
    ) {
      menu.classList.remove("active");
    }
  });

  /* SIMPLE COUNTERS */
  const simpleCounters = document.querySelectorAll(".counter");

  function formatNumber(value) {
    if (value >= 1000000) return (value / 1000000).toFixed(1) + "M";
    if (value >= 1000) return Math.floor(value / 1000) + "K";
    return value;
  }

  function animateSimpleCounter(counter) {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    if (isNaN(target)) return;

    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(eased * target);

      counter.innerText = formatNumber(currentValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.innerText = formatNumber(target);
      }
    }

    requestAnimationFrame(update);
  }

  if ("IntersectionObserver" in window) {
    const simpleObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          animateSimpleCounter(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    simpleCounters.forEach(function (counter) {
      simpleObserver.observe(counter);
    });
  } else {
    simpleCounters.forEach(animateSimpleCounter);
  }

  /* COUNTER NUMBER */
  const numberCounters = document.querySelectorAll(".counter-number");

  function animateNumberCounter(counter) {
    const target = parseFloat(counter.dataset.target);
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffixLast || "";

    if (isNaN(target)) return;

    let current = 0;
    const step = target / 80;

    function update() {
      if (current < target) {
        current += step;

        if (current > target) current = target;

        const value =
          target % 1 === 0 ? Math.floor(current) : current.toFixed(1);

        counter.innerHTML = prefix + value + suffix;
        requestAnimationFrame(update);
      } else {
        counter.innerHTML = prefix + target + suffix;
      }
    }

    update();
  }

  if ("IntersectionObserver" in window) {
    const numberObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          animateNumberCounter(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    numberCounters.forEach(function (counter) {
      numberObserver.observe(counter);
    });
  } else {
    numberCounters.forEach(animateNumberCounter);
  }

  /* RECRUITER SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".recruiter_slider_new", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      speed: 4000,
      autoplay: {
        delay: 0,
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
        1024: { slidesPerView: 3 },
      },
    });
  }

  /* PEOPLE SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".people_slider", {
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".people_slider .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      },
    });
  }

  /* GHAR SE GLOBAL SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".gharse_globle", {
      slidesPerView: 1,
      loop: true,
      speed: 1200,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  /* WALL DISTINCTION SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".wall_distinction_slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      allowTouchMove: true,
      pagination: {
        el: ".wall_distinction_slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      },
    });
  }

  /* VIMEO VIDEO SOUND */
  const iframe = document.getElementById("alumniVideo");
  const soundButton = document.getElementById("soundToggle");

  if (typeof Vimeo !== "undefined" && iframe && soundButton) {
    const player = new Vimeo.Player(iframe);
    let isMuted = true;

    player.setVolume(0);

    soundButton.addEventListener("click", function () {
      if (isMuted) {
        player.setVolume(1);
        soundButton.innerHTML = "🔊";
      } else {
        player.setVolume(0);
        soundButton.innerHTML = "🔇";
      }

      isMuted = !isMuted;
    });
  }

  /* ALUMNI EVENTS SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".alumni_events", {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".alumni_events .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
    });
  }

  /* SPX SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".spx-slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      loopedSlides: 9,
      speed: 5000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
      navigation: {
        nextEl: ".spx-next",
        prevEl: ".spx-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      },
    });
  }

  /* TESTIMONIAL SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".zxqTesti_swiper", {
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
      centeredSlides: false,
      watchOverflow: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".zxqTesti_swiper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  /* MENTOR SLIDER */
  if (typeof Swiper !== "undefined") {
    new Swiper(".mentor-slider", {
      loop: true,
      speed: 600,
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".mtm-arrow-next",
        prevEl: ".mtm-arrow-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    });
  }

  /* GLOBAL MAP VIDEO */
  const video = document.querySelector(".global_map_box video");

  if (video) {
    video.muted = true;
    video.play().catch(function () {});
  }

  /* FAQ TABS + ACCORDION */
  const tabButtons = document.querySelectorAll(".glaFaq_tabBtn");
  const tabContents = document.querySelectorAll(".glaFaq_tabContent");

  function openFirstAccordion(tabContent) {
    if (!tabContent) return;

    const items = tabContent.querySelectorAll(".glaFaq_item");

    items.forEach(function (item, index) {
      const body = item.querySelector(".glaFaq_body");
      if (!body) return;

      if (index === 0) {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        body.style.maxHeight = null;
      }
    });
  }

  function setupAccordions() {
    document.querySelectorAll(".glaFaq_item").forEach(function (item) {
      const faqHeader = item.querySelector(".glaFaq_header");
      const body = item.querySelector(".glaFaq_body");

      if (!faqHeader || !body) return;

      if (item.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px";
      }

      faqHeader.addEventListener("click", function () {
        const accordion = item.closest(".accordion");

        if (accordion) {
          accordion.querySelectorAll(".glaFaq_item").forEach(function (otherItem) {
            if (otherItem !== item) {
              otherItem.classList.remove("active");

              const otherBody = otherItem.querySelector(".glaFaq_body");
              if (otherBody) otherBody.style.maxHeight = null;
            }
          });
        }

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
          body.style.maxHeight = body.scrollHeight + "px";
        } else {
          body.style.maxHeight = null;
        }
      });
    });
  }

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      const activeTab = document.getElementById(tabId);

      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      tabContents.forEach(function (content) {
        content.classList.remove("active");
      });

      this.classList.add("active");

      if (activeTab) {
        activeTab.classList.add("active");
        openFirstAccordion(activeTab);
      }
    });
  });

  setupAccordions();
});

document.querySelectorAll(".home_banner .swiper-slide").forEach(function (slide) {
  const img = slide.querySelector("img");
  if (img) {
    slide.style.backgroundImage = `url("${img.getAttribute("src")}")`;
  }
});
function setBannerBgFromImage(img) {
  const banner = document.querySelector(".home_banner");
  if (!img) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  ctx.drawImage(img, 0, 0);

  // pick pixel from corner (background color)
  const pixel = ctx.getImageData(10, 10, 1, 1).data;

  const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

  banner.style.background = color;
}

// run on load + slide change
const swiper = document.querySelector(".home_slider").swiper;

swiper.on("slideChange", function () {
  const activeSlide = document.querySelector(".swiper-slide-active img");
  setBannerBgFromImage(activeSlide);
});

// initial load
window.addEventListener("load", () => {
  const firstImg = document.querySelector(".swiper-slide-active img");
  setBannerBgFromImage(firstImg);
});