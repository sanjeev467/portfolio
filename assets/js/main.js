/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  const navLogo = document.getElementById("navLogo");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
    navLogo.style.marginTop = "8px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
    navLogo.style.marginTop = "10px";
  }
}

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", { duration: 1000 });
sr.reveal(".featured-name", { delay: 350, duration: 1000 });
sr.reveal(".featured-text-info", { delay: 350, duration: 1000 });
sr.reveal(".featured-text-btn", { delay: 350, duration: 1000 });
sr.reveal(".social_icons", { delay: 350, duration: 1000 });
sr.reveal(".featured-image", { delay: 350, duration: 1000 });

// Education Section
sr.reveal(".outer-class", { delay: 350, duration: 1000 });

// emailform
sr.reveal(".formspace", { delay: 350, duration: 1000 });

// skillsbox
sr.reveal(".skills-box", { delay: 350, duration: 1000 });

// about info
sr.reveal(".contact-info", { delay: 350, duration: 1000 });

// contact info
sr.reveal(".about-info", { delay: 350, duration: 1000 });

// project section
sr.reveal(".box-container", { delay: 350, duration: 1000 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { delay: 350, duration: 1000 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// srLeft.reveal(".about-info", { delay: 100 });
// srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// srRight.reveal(".skills-box", { delay: 100 });
// srRight.reveal(".formspace", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//emailjs for contact section

function sendMail() {
  event.preventDefault();
  (function () {
    emailjs.init("Z7FQTWPQhRhYU18qG"); //account public key
  })();

  var serviceID = "service_u6lrovt"; // email service id
  var templateID = "template_ux39osw"; // email template id
  emailjs.sendForm(serviceID, templateID, "#contact-form").then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Form Submitted Successfully");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Form Submission Failed! Try Again");
    }
  );
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Web Developer", "Programmer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
