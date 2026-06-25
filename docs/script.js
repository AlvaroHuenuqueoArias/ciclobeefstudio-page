// Smooth scroll
const scrollBtn = document.getElementById("scrollBtn");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function closeMobileNav() {
    if (!navToggle || !navLinks) {
        return;
    }

    navLinks.classList.remove("show");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
}

function scrollToSection(target) {
    if (!target) {
        return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        scrollToSection(document.getElementById("products"));
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        navToggle.classList.toggle("is-open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
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
        closeMobileNav();
    });
});

/* =========================
    Instagram request confirmation
========================= */

const INSTAGRAM_DM_URL = "https://ig.me/m/ciclobeefstudio";
const requestModal = document.getElementById("requestModal");
const requestModalContinue = document.getElementById("requestModalContinue");
const requestModalCancel = document.getElementById("requestModalCancel");
const requestTriggers = document.querySelectorAll("[data-request-trigger]");

let lastRequestTrigger = null;

function openRequestModal(trigger) {
    if (!requestModal) {
        return;
    }

    lastRequestTrigger = trigger;
    requestModal.hidden = false;

    if (requestModalContinue) {
        requestModalContinue.focus();
    }
}

function closeRequestModal() {
    if (!requestModal) {
        return;
    }

    requestModal.hidden = true;

    if (lastRequestTrigger) {
        lastRequestTrigger.focus();
    }
}

requestTriggers.forEach(trigger => {
    trigger.addEventListener("click", event => {
        event.preventDefault();
        closeMobileNav();
        openRequestModal(trigger);
    });
});

if (requestModalContinue) {
    requestModalContinue.addEventListener("click", () => {
        window.open(INSTAGRAM_DM_URL, "_blank", "noopener,noreferrer");
        closeRequestModal();
    });
}

if (requestModalCancel) {
    requestModalCancel.addEventListener("click", closeRequestModal);
}

if (requestModal) {
    requestModal.addEventListener("click", event => {
        if (event.target === requestModal) {
            closeRequestModal();
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && requestModal && !requestModal.hidden) {
        closeRequestModal();
    }
});
