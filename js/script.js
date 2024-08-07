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

const downloadResumeButton = document.getElementById("downloadResume");

downloadResumeButton.addEventListener("click", function (event) {
  event.preventDefault();

  const pdfUrl = downloadResumeButton.getAttribute("href");
  const pdfFileName = "Sam_Kamali_Resume.pdf";

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = pdfUrl;
  a.download = pdfFileName;

  document.body.appendChild(a);

  a.click();
  document.body.removeChild(a);
});

///////////////////////////////////////////////////////////
// CAROUSEL
// function moveToSelected(element) {
//   if (element == "next") {
//     var selected = $(".selected").next();
//   } else if (element == "prev") {
//     var selected = $(".selected").prev();
//   } else {
//     var selected = element;
//   }

//   var next = $(selected).next();
//   var prev = $(selected).prev();
//   var prevSecond = $(prev).prev();
//   var nextSecond = $(next).next();

//   $(selected).removeClass().addClass("selected");

//   $(prev).removeClass().addClass("prev");
//   $(next).removeClass().addClass("next");

//   $(nextSecond).removeClass().addClass("nextRightSecond");
//   $(prevSecond).removeClass().addClass("prevLeftSecond");

//   $(nextSecond).nextAll().removeClass().addClass("hideRight");
//   $(prevSecond).prevAll().removeClass().addClass("hideLeft");
// }

// // Eventos teclado
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

// $("#carousel div").click(function () {
//   moveToSelected($(this));
// });

// $("#prev").click(function () {
//   moveToSelected("prev");
// });

// $("#next").click(function () {
//   moveToSelected("next");
// });
