function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display ='flex';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display ='none';
}
//FETCHING HEADER
fetch('mainsections/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

    //FETCHING UI UX DESIGN WORK
fetch('components/uiuxdesign.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('uiux').innerHTML = data;
    });

    //FETCHING CODING WORK
fetch('components/coding.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('coding').innerHTML = data;
    });
    //FETCHING DIGITAL ART WORK
fetch('components/digital-art.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('digitalArt').innerHTML = data;
    });

    

//FETCHING CONTACT ME
fetch('mainsections/contactme.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('contactme').innerHTML = data;
    });

//FETCHING FOOTER
fetch('mainsections/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });






//PREVIOUS CODE---------------------------------------

/*

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

*/