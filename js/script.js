console.log("Hello world!");

const myName = "Sam Kamali";
const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
        headerEl.classList.remove("nav-open"); // Close mobile navigation
      }
    }
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

if (sectionHeroEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  obs.observe(sectionHeroEl);
}

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
// DOWNLOADING RESUME PDF

// Get a reference to the "Download Resume" button.
const downloadResumeButton = document.getElementById("downloadResume");

// Add a click event listener to trigger the download.
downloadResumeButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from navigating to the PDF file.

  const pdfUrl = downloadResumeButton.getAttribute("href");
  const pdfFileName = "Sam_Kamali_Resume.pdf";

  // Create an anchor element to trigger the download.
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = pdfUrl;
  a.download = pdfFileName;

  // Add the anchor element to the document.
  document.body.appendChild(a);

  // Trigger the click event on the anchor element to start the download.
  a.click();

  // Clean up by removing the anchor element.
  document.body.removeChild(a);
});

///////////////////////////////////////////////////////////
// CAROUSEL
// CAROUSEL
// function moveToSelected(element) {
//   if (element === "next") {
//     var selected = $(".selected").next();
//   } else if (element === "prev") {
//     var selected = $(".selected").prev();
//   } else {
//     var selected = element;
//   }

//   var next = $(selected).next();
//   var prev = $(selected).prev();
//   var prevSecond = $(prev).prev();
//   var nextSecond = $(next).next();

//   $(".selected").removeClass().addClass("hideLeft");
//   $(prev).removeClass().addClass("prev");
//   $(next).removeClass().addClass("next");
//   $(nextSecond).removeClass().addClass("nextRightSecond");
//   $(prevSecond).removeClass().addClass("prevLeftSecond");

//   setTimeout(function () {
//     $(".hideLeft").removeClass().addClass("hideRight");
//   }, 300);
//   setTimeout(function () {
//     $(".hideRight").removeClass().addClass("hide");
//     selected.removeClass().addClass("selected");
//   }, 500);
// }

// // Keyboard Events
// $(document).keydown(function (e) {
//   switch (e.which) {
//     case 37: // left
//       moveToSelected("prev");
//       break;
//     case 39: // right
//       moveToSelected("next");
//       break;
//     default:
//       return;
//   }
//   e.preventDefault();
// });

// // Click Events
// $("#carousel div").click(function () {
//   moveToSelected($(this));
// });

// $("#prev").click(function () {
//   moveToSelected("prev");
// });

// $("#next").click(function () {
//   moveToSelected("next");
// });
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 300; // Adjust the width of the images

  carousel.style.transform = `translateX(${offset}px)`;
}

updateCarousel();
