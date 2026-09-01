/* =========================================
   TYPING ANIMATION
========================================= */

const typingText = document.getElementById("typingText");

const words = [
    "Developer",
    "AI Enthusiast",
    "Web Developer",
    "Problem Solver",
    "Startup Builder"
];

let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;


        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }


    const speed = deleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}


typeEffect();



/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking link */

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const message =
        document.getElementById("message").value.trim();


    const result =
        document.getElementById("result");


    /* Empty field validation */

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        result.textContent =
            "Please fill in all the fields.";

        result.style.color = "#ff6b6b";

        return;

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        result.textContent =
            "Please enter a valid email address.";

        result.style.color = "#ff6b6b";

        return;

    }


    /* Success */

    result.textContent =
        "Thank you, " +
        name +
        "! Your message has been submitted.";

    result.style.color = "#5eead4";


    contactForm.reset();

});



/* =========================================
   BACK TO TOP BUTTON
========================================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.style.color = "";


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color = "#5eead4";

        }

    });

});