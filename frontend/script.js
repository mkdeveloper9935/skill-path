/* =========================================
   SKILL PATH - MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. NAVIGATION ACTIVE LINK
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });


    /* =========================================
       2. LEARNING PATH BUTTONS
    ========================================== */

    const pathLinks = document.querySelectorAll(".path-link");

    pathLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const pathCard = link.closest(".path-card");
            const pathName = pathCard.querySelector("h3").textContent;

            alert(
                `You selected ${pathName}.\n\nYour learning roadmap will be available here soon!`
            );
        });

    });


    /* =========================================
       3. START LEARNING BUTTONS
    ========================================== */

    const startButtons = document.querySelectorAll(
        'a[href="#paths"]'
    );

    startButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const pathsSection = document.querySelector("#paths");

            if (pathsSection) {
                pathsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    /* =========================================
       4. LOGIN BUTTON
    ========================================== */

    const loginButtons = document.querySelectorAll(
        'a[href="#login"]'
    );

    loginButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            alert(
                "Login page will be added in the next stage."
            );

        });

    });


    /* =========================================
       5. SIGN UP BUTTON
    ========================================== */

    const signupButtons = document.querySelectorAll(
        'a[href="#signup"]'
    );

    signupButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            alert(
                "Sign Up page will be added in the next stage."
            );

        });

    });


    /* =========================================
       6. PROJECT CARDS
    ========================================== */

    const projectCards = document.querySelectorAll(
        ".project-card"
    );

    projectCards.forEach((card) => {

        card.addEventListener("click", () => {

            const projectName =
                card.querySelector("h3").textContent;

            alert(
                `${projectName}\n\nProject details will be added soon.`
            );

        });

    });


    /* =========================================
       7. SCROLL ANIMATION
    ========================================== */

    const animatedElements = document.querySelectorAll(
        ".feature-card, .path-card, .project-card, .roadmap-step"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });


    /* =========================================
       8. CURRENT YEAR
    ========================================== */

    const footerYear =
        document.querySelector(".footer-bottom p");

    if (footerYear) {

        const currentYear =
            new Date().getFullYear();

        footerYear.textContent =
            `© ${currentYear} Skill Path. All rights reserved.`;

    }


    /* =========================================
       9. CONSOLE MESSAGE
    ========================================== */

    console.log(
        "Skill Path loaded successfully 🚀"
    );

});