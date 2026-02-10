// Smooth scroll
document.getElementById("scrollBtn").addEventListener("click", () => {
    document.getElementById("steps").scrollIntoView({ behavior: "smooth" });
});

// Mobile legal menu
const legalToggle = document.getElementById("legalToggle");
const legalMenu = document.getElementById("legalMenu");

if (legalToggle) {
    legalToggle.addEventListener("click", () => {
        legalMenu.classList.toggle("show");
    });
}

/* =========================
    Conversational loop
========================= */

const bubbleImages = [
    { src: "../assets/images/bubble-client-01.png", side: "right" },
    { src: "../assets/images/bubble-cbs-02.png", side: "left" },
    { src: "../assets/images/bubble-client-03.png", side: "right" },
    { src: "../assets/images/bubble-cbs-04.png", side: "left" },
    { src: "../assets/images/bubble-client-05.png", side: "right" },
    { src: "../assets/images/bubble-cbs-06.png", side: "left" },
    { src: "../assets/images/bubble-client-07.png", side: "right" },
    { src: "../assets/images/bubble-cbs-08.png", side: "left" },
    { src: "../assets/images/bubble-client-09.png", side: "right" },
    { src: "../assets/images/bubble-cbs-10.png", side: "left" },
    { src: "../assets/images/bubble-cbs-11.png", side: "left" }
];

const chatBubble = document.getElementById("chatBubble");
const chatFinal = document.getElementById("chatFinal");

let bubbleIndex = 0;

const SHOW = 2400;
const TRANS = 700;
const FINAL = 2200;

let showTimeout = null;
let transTimeout = null;
let finalTimeout = null;

function showBubble() {

    chatFinal.classList.remove("show");

    const item = bubbleImages[bubbleIndex];

    chatBubble.src = item.src;
    chatBubble.dataset.side = item.side;

    chatBubble.style.setProperty("--drop", `0px`);

    chatBubble.classList.add("active");

    showTimeout = setTimeout(() => {

        chatBubble.classList.remove("active");

        transTimeout = setTimeout(() => {

            bubbleIndex++;

            if (bubbleIndex >= bubbleImages.length) {
                showFinal();
            } else {
                showBubble();
            }

        }, TRANS);

    }, SHOW);
}

function showFinal() {

    chatFinal.classList.add("show");

    finalTimeout = setTimeout(() => {

        chatFinal.classList.remove("show");
        bubbleIndex = 0;

        showTimeout = setTimeout(showBubble, TRANS);

    }, FINAL);
}

/* =========================
    Start ONLY when section 2 is visible
========================= */

let chatStarted = false;
const stepsSection = document.getElementById("steps");

const chatObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !chatStarted) {

            chatStarted = true;
            bubbleIndex = 0;
            showBubble();

        } else if (!entry.isIntersecting && chatStarted) {

            chatStarted = false;

            clearTimeout(showTimeout);
            clearTimeout(transTimeout);
            clearTimeout(finalTimeout);

            chatBubble.classList.remove("active");
            chatFinal.classList.remove("show");

            bubbleIndex = 0;
        }

    });

}, {
    threshold: 0.4
});

if (stepsSection) {
    chatObserver.observe(stepsSection);
}



