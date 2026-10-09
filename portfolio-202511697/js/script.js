document.addEventListener("DOMContentLoaded", function () {

    // =============================================================
    // 1. COMPULSORY FEATURE: Contact Form Validation & Local Preview
    // =============================================================
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const previewBox = document.getElementById("form-preview");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // Prevent default form submit to handle processing strictly local
            event.preventDefault();

            // Reset previous error messages and preview box
            if (nameError) nameError.textContent = "";
            if (emailError) emailError.textContent = "";
            if (messageError) messageError.textContent = "";
            if (previewBox) previewBox.style.display = "none";

            let isValid = true;

            // Reject empty or whitespace-only names
            if (nameInput && !nameInput.value.trim()) {
                if (nameError) nameError.textContent = "Please enter your full name.";
                isValid = false;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && !emailRegex.test(emailInput.value.trim())) {
                if (emailError) emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            // Reject empty or whitespace-only messages
            if (messageInput && !messageInput.value.trim()) {
                if (messageError) messageError.textContent = "Please enter a message.";
                isValid = false;
            }

            // Display submission summary on page if valid
            if (isValid && previewBox) {
                previewBox.replaceChildren();

                const heading = document.createElement("h4");
                heading.textContent = "Form Validation Summary";

                const status = document.createElement("p");
                status.textContent = "Browser demonstration only — data was validated locally on your page and no message was delivered.";

                const nameP = document.createElement("p");
                const nameBold = document.createElement("strong");
                nameBold.textContent = "Name: ";
                nameP.appendChild(nameBold);
                nameP.appendChild(document.createTextNode(nameInput.value.trim()));

                const emailP = document.createElement("p");
                const emailBold = document.createElement("strong");
                emailBold.textContent = "Email: ";
                emailP.appendChild(emailBold);
                emailP.appendChild(document.createTextNode(emailInput.value.trim()));

                const msgP = document.createElement("p");
                const msgBold = document.createElement("strong");
                msgBold.textContent = "Message: ";
                msgP.appendChild(msgBold);
                msgP.appendChild(document.createTextNode(messageInput.value.trim()));

                previewBox.appendChild(heading);
                previewBox.appendChild(status);
                previewBox.appendChild(nameP);
                previewBox.appendChild(emailP);
                previewBox.appendChild(msgP);

                previewBox.style.display = "block";
                contactForm.reset();
            }
        });
    }

    // =============================================================
    // 2. FEATURE 1: Mobile Navigation Toggle
    // =============================================================
    const navToggleBtn = document.getElementById("nav-toggle");
    const navList = document.querySelector("nav ul");

    if (navToggleBtn && navList) {
        navToggleBtn.addEventListener("click", function () {
            navList.classList.toggle("active");
        });
    }

    // =============================================================
    // 3. FEATURE 2: Theme Switch (Light / Dark)
    // =============================================================
    const themeBtn = document.getElementById("theme-btn");

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                themeBtn.textContent = "Switch to Light Theme";
            } else {
                themeBtn.textContent = "Switch to Dark Theme";
            }
        });
    }

    // =============================================================
    // 4. FEATURE 3: Expandable Accordion Content
    // =============================================================
    const accBtn = document.getElementById("acc-btn");
    const accContent = document.getElementById("acc-content");

    if (accBtn && accContent) {
        accBtn.addEventListener("click", function () {
            accContent.classList.toggle("active");
            if (accContent.classList.contains("active")) {
                accBtn.textContent = "Hide Technical Skills Breakdown";
            } else {
                accBtn.textContent = "View My Technical Skills Breakdown";
            }
        });
    }

    // =============================================================
    // 5. FEATURE 4: Gallery Viewer
    // =============================================================
    const galleryPhotos = [
        { src: "images/photo1.jpg", caption: "My daily coding setup" },
        { src: "images/photo2.jpg", caption: "A view across campus" },
        { src: "images/photo3.jpg", caption: "Open engine project workspace" }
    ];

    let photoIndex = 0;

    const galleryImg = document.getElementById("gallery-img");
    const galleryCaption = document.getElementById("gallery-caption");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (galleryImg && prevBtn && nextBtn) {
        function updateGallery() {
            galleryImg.src = galleryPhotos[photoIndex].src;
            if (galleryCaption) {
                galleryCaption.textContent = galleryPhotos[photoIndex].caption;
            }
        }

        nextBtn.addEventListener("click", function () {
            photoIndex = (photoIndex + 1) % galleryPhotos.length;
            updateGallery();
        });

        prevBtn.addEventListener("click", function () {
            photoIndex = (photoIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
            updateGallery();
        });
    }

    // =============================================================
    // 6. EXTRA FEATURE: Study Hours Calculator
    // =============================================================
    const calcBtn = document.getElementById("calc-btn");
    const hoursInput = document.getElementById("hours-per-day");
    const daysInput = document.getElementById("days-per-week");
    const calcResult = document.getElementById("calc-result");

    if (calcBtn && hoursInput && daysInput && calcResult) {
        calcBtn.addEventListener("click", function () {
            const hours = parseFloat(hoursInput.value);
            const days = parseInt(daysInput.value, 10);

            if (isNaN(hours) || isNaN(days) || hours <= 0 || hours > 24 || days < 1 || days > 7) {
                calcResult.textContent = "Error: Please enter valid numbers (Hours: 1–24, Days: 1–7).";
                calcResult.style.color = "#ef4444";
            } else {
                const total = hours * days;
                calcResult.textContent = "Error: Please enter valid numbers (Hours: 1-24, Days:..."
                calcResult.style.color = "#10b981";
            }
        });
    }
});