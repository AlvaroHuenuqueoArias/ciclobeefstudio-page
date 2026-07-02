const CATALOG = {
    products: [
        "Premium Wooden Frame posters",
        "Acrylic print",
    ],
    orientations: [
        "Vertical",
        "Horizontal",
    ],
    sizes: [
        "50×70 cm / 20×28″",
        "60×90 cm / 24×36″",
        "70×100 cm / 28×40″",
    ],
};

const CHANNELS = {
    instagram: "https://ig.me/m/ciclobeefstudio",
    facebook: "https://facebook.com/ciclobeefstudio",
};

const scrollBtn = document.getElementById("scrollBtn");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const focusableSelector = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

let lastNavFocus = null;

function scrollToSection(target) {
    if (!target) {
        return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getFocusableItems(container) {
    return Array.from(container.querySelectorAll(focusableSelector))
        .filter(item => item.offsetParent !== null);
}

function lockPageScroll(shouldLock) {
    document.body.classList.toggle("nav-open", shouldLock);
}

function openMobileNav() {
    if (!navToggle || !navLinks) {
        return;
    }

    lastNavFocus = document.activeElement;
    navLinks.classList.add("show");
    navToggle.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    lockPageScroll(true);

    const firstLink = navLinks.querySelector("a");
    if (firstLink) {
        firstLink.focus();
    }
}

function closeMobileNav({ restoreFocus = true } = {}) {
    if (!navToggle || !navLinks) {
        return;
    }

    navLinks.classList.remove("show");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    lockPageScroll(false);

    if (restoreFocus && lastNavFocus && typeof lastNavFocus.focus === "function") {
        lastNavFocus.focus();
    }
}

function toggleMobileNav() {
    if (!navLinks || !navToggle) {
        return;
    }

    if (navLinks.classList.contains("show")) {
        closeMobileNav();
        return;
    }

    openMobileNav();
}

function trapNavFocus(event) {
    if (event.key !== "Tab" || !navLinks || !navLinks.classList.contains("show")) {
        return;
    }

    const focusableItems = getFocusableItems(navLinks);
    if (!focusableItems.length) {
        return;
    }

    const firstItem = focusableItems[0];
    const lastItem = focusableItems[focusableItems.length - 1];

    if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
    }
}

function renderCatalogList(selector, items) {
    const container = document.querySelector(selector);
    if (!container) {
        return;
    }

    container.innerHTML = items.map((item, index) => `
        <button type="button" class="catalog-option${index === 0 ? " is-selected" : ""}" aria-pressed="${index === 0 ? "true" : "false"}">
            ${item}
        </button>
    `).join("");

    container.querySelectorAll(".catalog-option").forEach(option => {
        option.addEventListener("click", () => {
            container.querySelectorAll(".catalog-option").forEach(item => {
                item.classList.remove("is-selected");
                item.setAttribute("aria-pressed", "false");
            });
            option.classList.add("is-selected");
            option.setAttribute("aria-pressed", "true");
        });
    });
}

function renderFormats() {
    const grid = document.querySelector("[data-format-grid]");
    if (!grid) {
        return;
    }

    const cards = [];
    CATALOG.products.forEach(product => {
        CATALOG.orientations.forEach(orientation => {
            CATALOG.sizes.forEach(size => {
                cards.push(`
                    <article class="format-card" tabindex="0" aria-label="${product}, ${orientation}, ${size}">
                        <h3>${product}</h3>
                        <p>${orientation}</p>
                        <span>${size}</span>
                    </article>
                `);
            });
        });
    });

    grid.innerHTML = cards.join("");
}

function populateSelect(selector, values, label) {
    const select = document.querySelector(selector);
    if (!select) {
        return;
    }

    select.innerHTML = `<option value="">Select ${label}</option>` + values
        .map(value => `<option value="${value}">${value}</option>`)
        .join("");
}

function initGallery() {
    const slider = document.querySelector("[data-gallery-slider]");
    const track = document.querySelector("[data-gallery-track]");
    const prevButton = document.querySelector("[data-gallery-prev]");
    const nextButton = document.querySelector("[data-gallery-next]");
    const dotsContainer = document.querySelector("[data-gallery-dots]");

    if (!slider || !track || !prevButton || !nextButton || !dotsContainer) {
        return;
    }

    const slides = Array.from(track.children);
    let activeIndex = 0;

    dotsContainer.innerHTML = slides.map((_, index) => `
        <button type="button" class="gallery-dot${index === 0 ? " is-active" : ""}" aria-label="Go to gallery item ${index + 1}" aria-pressed="${index === 0 ? "true" : "false"}"></button>
    `).join("");

    const dots = Array.from(dotsContainer.querySelectorAll(".gallery-dot"));

    function updateGallery(index) {
        activeIndex = (index + slides.length) % slides.length;
        slides[activeIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === activeIndex;
            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-pressed", String(isActive));
        });
    }

    prevButton.addEventListener("click", () => updateGallery(activeIndex - 1));
    nextButton.addEventListener("click", () => updateGallery(activeIndex + 1));
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => updateGallery(index));
    });

    track.addEventListener("scroll", () => {
        const slideWidth = slides[0].getBoundingClientRect().width || 1;
        const nextIndex = Math.round(track.scrollLeft / slideWidth);
        if (nextIndex !== activeIndex && nextIndex >= 0 && nextIndex < slides.length) {
            activeIndex = nextIndex;
            dots.forEach((dot, dotIndex) => {
                const isActive = dotIndex === activeIndex;
                dot.classList.toggle("is-active", isActive);
                dot.setAttribute("aria-pressed", String(isActive));
            });
        }
    }, { passive: true });
}

function initQuoteForm() {
    const form = document.getElementById("quoteForm");
    if (!form) {
        return;
    }

    const steps = Array.from(form.querySelectorAll("[data-quote-step]"));
    const tabs = Array.from(form.querySelectorAll("[data-quote-step-tab]"));
    const prevButton = form.querySelector("[data-quote-prev]");
    const nextButton = form.querySelector("[data-quote-next]");
    const submitButton = form.querySelector("[data-quote-submit]");
    const status = document.getElementById("quoteFormStatus");
    const review = form.querySelector("[data-quote-review]");
    let activeStep = 0;

    function fieldErrorId(field) {
        if (field.name === "channel") {
            return "quoteChannelError";
        }
        return `${field.id}Error`;
    }

    function setFieldError(field, message) {
        const error = document.getElementById(fieldErrorId(field));
        field.setAttribute("aria-invalid", message ? "true" : "false");
        if (error) {
            error.textContent = message;
        }
    }

    function validateField(field) {
        let message = "";
        if (field.validity.valueMissing) {
            message = "This field is required.";
        } else if (field.validity.rangeUnderflow) {
            message = "Use a value of 1 or more.";
        }
        setFieldError(field, message);
        return !message;
    }

    function currentFields() {
        return Array.from(steps[activeStep].querySelectorAll("input, select, textarea"));
    }

    function validateStep() {
        const fields = currentFields();
        const valid = fields.every(validateField);
        if (status) {
            status.textContent = valid ? "Step complete. You can continue." : "Complete the required fields to continue.";
        }
        return valid;
    }

    function allRequiredFieldsValid() {
        return Array.from(form.querySelectorAll("input[required], select[required], textarea[required]"))
            .every(field => field.checkValidity());
    }

    function formValues() {
        return new FormData(form);
    }

    function updateReview() {
        if (!review) {
            return;
        }

        const data = formValues();
        const items = [
            ["Artwork or collection", data.get("artwork")],
            ["Product", data.get("product")],
            ["Orientation", data.get("orientation")],
            ["Size", data.get("size")],
            ["Quantity", data.get("quantity")],
            ["Country", data.get("country")],
            ["Region or state", data.get("region")],
            ["City", data.get("city")],
            ["Postal code", data.get("postalCode")],
            ["Delivery address", data.get("address")],
        ];

        review.innerHTML = items.map(([label, value]) => `
            <div>
                <dt>${label}</dt>
                <dd>${value || "Not completed"}</dd>
            </div>
        `).join("");
    }

    function updateButtons() {
        if (prevButton) {
            prevButton.disabled = activeStep === 0;
        }
        if (nextButton) {
            nextButton.hidden = activeStep === steps.length - 1;
            nextButton.disabled = false;
        }
        if (submitButton) {
            submitButton.hidden = activeStep !== steps.length - 1;
            submitButton.disabled = !allRequiredFieldsValid();
        }
    }

    function showStep(index, { focus = true } = {}) {
        activeStep = Math.max(0, Math.min(index, steps.length - 1));
        steps.forEach((step, stepIndex) => {
            const isActive = stepIndex === activeStep;
            step.hidden = !isActive;
            step.classList.toggle("is-active", isActive);
        });
        tabs.forEach((tab, tabIndex) => {
            const isActive = tabIndex === activeStep;
            tab.classList.toggle("is-active", isActive);
            if (isActive) {
                tab.setAttribute("aria-current", "step");
            } else {
                tab.removeAttribute("aria-current");
            }
        });
        updateReview();
        updateButtons();
        if (focus) {
            const firstField = steps[activeStep].querySelector("input, select, textarea, button");
            if (firstField) {
                firstField.focus();
            }
        }
    }

    form.addEventListener("input", event => {
        if (event.target.matches("input, select, textarea")) {
            validateField(event.target);
            updateReview();
            updateButtons();
        }
    });

    form.addEventListener("change", event => {
        if (event.target.matches("input, select, textarea")) {
            validateField(event.target);
            updateReview();
            updateButtons();
        }
    });

    if (prevButton) {
        prevButton.addEventListener("click", () => showStep(activeStep - 1));
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (validateStep()) {
                showStep(activeStep + 1);
            }
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            if (index <= activeStep || validateStep()) {
                showStep(index);
            }
        });
    });

    form.addEventListener("submit", event => {
        event.preventDefault();
        if (!allRequiredFieldsValid()) {
            validateStep();
            updateButtons();
            return;
        }

        const data = formValues();
        const channel = data.get("channel");
        const targetUrl = CHANNELS[channel] || CHANNELS.instagram;
        window.open(targetUrl, "_blank", "noopener,noreferrer");
    });

    showStep(0, { focus: false });
}

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        scrollToSection(document.getElementById("products"));
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", toggleMobileNav);
    navLinks.addEventListener("keydown", trapNavFocus);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetSelector = link.getAttribute("href");
        if (!targetSelector || targetSelector === "#") {
            return;
        }

        const target = document.querySelector(targetSelector);

        if (!target) {
            return;
        }

        event.preventDefault();
        scrollToSection(target);
        closeMobileNav({ restoreFocus: false });
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeMobileNav();
    }
});

renderCatalogList("[data-catalog-products]", CATALOG.products);
renderCatalogList("[data-catalog-orientations]", CATALOG.orientations);
renderCatalogList("[data-catalog-sizes]", CATALOG.sizes);
renderFormats();
populateSelect("[data-product-select]", CATALOG.products, "product");
populateSelect("[data-orientation-select]", CATALOG.orientations, "orientation");
populateSelect("[data-size-select]", CATALOG.sizes, "size");
initGallery();
initQuoteForm();
