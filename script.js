document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn");
    const navSection = document.getElementById("navSection");
    const main = document.querySelector("main");
    const body = document.querySelector("body")
    const valueDisplay = document.querySelectorAll(".achievements-num")
    const interval = 500;

    let showNavbar = false;
  
    toggleBtn.addEventListener("click", function() {
      showNavbar = !showNavbar;
      toggleNav();
    });
  
    function toggleNav() {
      if (showNavbar) {
        body.classList.add("nav-is-on")
        navSection.classList.add("nav-section-open");
        toggleBtn.classList.add("btn-bars-on");
      } else {
        body.classList.remove("nav-is-on")
        navSection.classList.remove("nav-section-open");
        toggleBtn.classList.remove("btn-bars-on");
      }
    }
  
    function handleResize() {
      if (window.innerWidth > 770) {
        showNavbar = false;
        navSection.classList.remove("nav-section-open")
      } else {
        showNavbar = true;
      }
    }
  
    handleResize();
  
    window.addEventListener("resize", handleResize);


    const observerOptions = {
      root: null,
      rootMargin: '-20px',
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const vals = entry.target;
          let startVal = 0;
          const endVal = parseInt(vals.getAttribute("data-val"));
          const duration = Math.floor(interval / endVal);
          let counter;
    
          counter = setInterval(function() {
            startVal += 1;
            vals.textContent = startVal;
            if (startVal === endVal) {
              clearInterval(counter);
            }
          }, duration);
    
          observer.unobserve(vals);
        }
      });
    }, observerOptions);
    
    valueDisplay.forEach(function(vals) {
      observer.observe(vals);
    });
});

const quoteList = ["The bee is a symbol of community, cooperation, and the collective power of individuals working together for a greater good.", "A bee is a marvel of beauty and productivity, a symbol of nature's perfect harmony and intricate design.", "The bee is more fascinating than the lion, more amazing than the dolphin, and more essential than any other creature on Earth."]
let quoteIndex = 0

function quoteChange() {
  const quote = document.getElementById("quote")
  quote.textContent = quoteList[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quoteList.length
  setTimeout(quoteChange, 10000)
}

quoteChange()

const slides = document.getElementsByClassName("donate-carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;
  


    function hideAllSlides() {
      for (const slide of slides) {
          slide.classList.remove("donate-carousel-item-visible");
          slide.classList.add("donate-carousel-item-hidden");
      }
  }
  
  
  const handleMoveToNextSlide = function(e) {
      hideAllSlides();
      if (position === numberOfSlides - 1) {
          position = 0;
      } else {
          position++;
      }
      slides[position].classList.add("donate-carousel-item-visible");
    
      dots[position].classList.add("selected-dot");
      dots[position].checked = true;
  }
  
  const handleMoveToPrevSlide = function(e) {
      hideAllSlides();
      
      if (position === 0) {
          position = numberOfSlides - 1;
      } else {
          position--;
      }
  
      slides[position].classList.add("donate-carousel-item-visible");
    
      dots[position].classList.add("selected-dot");
      dots[position].checked = true;
  }
  
nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);







  