/* =========================================
   FAQ ACCORDION
========================================= */

const faqButtons = document.querySelectorAll(".faq-button");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {

        const faqItem = button.closest(".faq-item");
        const answer = faqItem.querySelector(".faq-answer");

        // Close all other FAQ answers
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== faqItem) {
                item.querySelector(".faq-answer").classList.add("hidden");
                item.querySelector(".faq-button").textContent = "+";
            }
        });

        // Toggle the clicked FAQ
        answer.classList.toggle("hidden");

        if (answer.classList.contains("hidden")) {
            button.textContent = "+";
        } else {
            button.textContent = "−";
        }
    });
});



/* =========================================
   MOBILE / TABLET DROPDOWN MENU
========================================= */

const headerButton = document.querySelector(".header-button");
const headerInput = document.querySelector(".header-input");

if (headerButton && headerInput) {

    headerButton.addEventListener("click", () => {

        // Open / close menu
        headerInput.classList.toggle("hidden");

    });

}



/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", (event) => {

    const headerItem = document.querySelector(".header-item");

    if (!headerItem || !headerInput) return;

    // If the click happened outside the menu
    if (!headerItem.contains(event.target)) {
        headerInput.classList.add("hidden");
    }

});



/* =========================================
   MOBILE MENU BUTTONS
========================================= */

const headerInputButtons = document.querySelectorAll(
    ".header-input button"
);

headerInputButtons.forEach(button => {

    button.addEventListener("click", () => {

        const buttonText = button.textContent.trim();

        if (buttonText === "Schedule a Virtual Consultation") {

            alert(
                "Thank you for your interest! Virtual consultation booking will be available soon."
            );

        }

    });

});
