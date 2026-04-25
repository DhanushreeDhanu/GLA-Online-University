console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", function () {

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
    if (menu && openBtn && !menu.contains(e.target) && !openBtn.contains(e.target)) {
      menu.classList.remove("active");
    }
  });

  /* SIMPLE COUNTERS */
  const simpleCounters = document.querySelectorAll(".counter");

  const formatNumber = function (value) {
    if (value >= 1000000) return (value / 1000000).toFixed(1) + "M";
    if (value >= 1000) return Math.floor(value / 1000) + "K";
    return value;
  };

  const animateSimpleCounter = function (counter) {
    const target = parseInt(counter.getAttribute("data-target"));
    if (isNaN(target)) return;

    const duration = 1500;
    const startTime = performance.now();

    const update = function (currentTime) {
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

  const simpleObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      animateSimpleCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  simpleCounters.forEach(function (counter) {
    simpleObserver.observe(counter);
  });

  /* COUNTER NUMBER */
  const numberCounters = document.querySelectorAll(".counter-number");

  const animateNumberCounter = function (counter) {
    const target = parseFloat(counter.dataset.target);
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffixLast || "";

    if (isNaN(target)) return;

    let current = 0;
    const step = target / 80;

    const update = function () {
      if (current < target) {
        current += step;

        let value = target % 1 === 0
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

  const numberObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      animateNumberCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  numberCounters.forEach(function (counter) {
    numberObserver.observe(counter);
  });

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
  const button = document.getElementById("soundToggle");

  if (typeof Vimeo !== "undefined" && iframe && button) {
    const player = new Vimeo.Player(iframe);
    let isMuted = true;

    player.setVolume(0);

    button.addEventListener("click", function () {
      if (isMuted) {
        player.setVolume(1);
        button.innerHTML = "🔊";
      } else {
        player.setVolume(0);
        button.innerHTML = "🔇";
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

});