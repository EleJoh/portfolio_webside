///////////////////////menu lavet med hjælp af eksempel fra undervisning + ændringer + hlælp af ChatGPT

document.querySelector('#logo_container_menu_mobil, #logo_container_mobil_underside').addEventListener('click', toggleMenuMobile);
document.addEventListener('click', closeMenuIfOpen);

function toggleMenuMobile(event) {
    var menuMobil = document.querySelector('.menu_mobile');
    menuMobil.style.display = (menuMobil.style.display === 'block') ? 'none' : 'block';
    event.stopPropagation(); // Prevent the click event from reaching the document
}

function closeMenuIfOpen(event) {
    var menuMobil = document.querySelector('.menu_mobile');
    var logoContainer = document.querySelector('#logo_container_menu_mobil');

    if (menuMobil && menuMobil.style.display === 'block' && !menuMobil.contains(event.target) &&
        (logoContainer && !logoContainer.contains(event.target))) {
        menuMobil.style.display = 'none';
    }
}

// scale lavet med hjælp af ChatGPT

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    const logoElement = document.querySelector("#logo_sprite_menu_mobil, #logo_sprite_menu");
    if (logoElement != undefined) {
        logoElement.classList.add("scale");
        logoElement.classList.remove("pause");
        logoElement.addEventListener("animationiteration", scaleEnGang);
    }

    // this ensures that the mobile logo gets the scale class
    const logoMobile = document.querySelector("#logo_sprite_menu_mobil");
    if (logoMobile != undefined) {
        logoMobile.classList.add("scale");
        logoMobile.classList.remove("pause");
        logoMobile.addEventListener("animationiteration", scaleEnGang);
    }
}

sidenVises();

function scaleEnGang() {
    console.log("scaleEnGang");
    document.querySelector("#logo_sprite_menu_mobil, #logo_sprite_menu").classList.add("pause");
    setTimeout(sidenVises, 1500);
}


//// carousel lavet med hjælp af eksempel fra undervisning + ændringer + hlælp af ChatGPT

const carouselMobil = document.querySelector(".carousel_mobil");

if( carouselMobil != undefined){
  const slidesMobil = document.querySelectorAll(".carousel-slide_mobil");
  const prevArrowMobil = document.querySelector(".prev-arrow_mobil");
  const nextArrowMobil = document.querySelector(".next-arrow_mobil");
  let currentIndexMobil = 0;

  function showSlidesMobil() {
    slidesMobil.forEach((slide, i) => {
      const isVisible = i >= currentIndexMobil && i < currentIndexMobil + 1; // Show two slides one  at a time and hide the rest
      slide.style.display = isVisible ? "block" : "none";
    });
  }

  function nextSlideMobil() {
    currentIndexMobil += 1; // Increment by 1 to show four slides
    if (currentIndexMobil >= slidesMobil.length) currentIndexMobil = 0;
    console.log("Cur. index: " + currentIndexMobil + " Last index: " + (slidesMobil.length - 1));
    showSlidesMobil();
  }

  function prevSlideMobil() {
    currentIndexMobil -= 2; // Decrement by 2 to show four slides
    if (currentIndexMobil < 0) currentIndexMobil = Math.floor((slidesMobil.length - 1) / 1) * 1; // show last page
    console.log("Cur. index: " + currentIndexMobil + " Last index: " + (slidesMobil.length - 1));
    showSlidesMobil();
  }

  nextArrowMobil.addEventListener("click", nextSlideMobil);
  prevArrowMobil.addEventListener("click", prevSlideMobil);

  // Show the initial slides
  showSlidesMobil();
}

// /****************** */ carousel web

const carousel = document.querySelector(".carousel");

if( carousel != undefined ){
  const slides = document.querySelectorAll(".carousel-slide");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  let currentIndex = 0;

  function showSlides() {
      slides.forEach((slide, i) => {
      const isVisible = i >= currentIndex && i < currentIndex + 2; // Show two slides at a time and hide the rest
        slide.style.display = isVisible ? "block" : "none";
      });
    }

    function nextSlide() {
      currentIndex += 2; // Increment by 2 to show four slides
      if (currentIndex >= slides.length) currentIndex = 0;
      console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length - 1));
      showSlides();
    }

    function prevSlide() {
      currentIndex -= 2; // Decrement by 2 to show four slides
      if (currentIndex < 0) currentIndex = Math.floor((slides.length - 1) / 2) * 2; // show last page
      console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length - 1));
      showSlides();
    }

    nextArrow.addEventListener("click", nextSlide);
    prevArrow.addEventListener("click", prevSlide);

  // Show the initial slides
  showSlides();
}