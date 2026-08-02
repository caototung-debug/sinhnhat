/* ==========================================================
    LOADING
========================================================== */

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.pointerEvents = "none";

    }, 1800);

});


/* ==========================================================
    MUSIC
========================================================== */

const bgMusic = document.getElementById("bgMusic");

const openSound = document.getElementById("openSound");

document.body.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.volume = 0.35;

        bgMusic.play();

    }

}, { once: true });


/* ==========================================================
    FIREFLIES
========================================================== */

const fireflies = document.getElementById("fireflies");

for (let i = 0; i < 80; i++) {

    const dot = document.createElement("span");

    dot.className = "firefly";

    dot.style.left = Math.random() * 100 + "%";

    dot.style.top = Math.random() * 100 + "%";

    dot.style.animationDuration = (5 + Math.random() * 10) + "s";

    dot.style.animationDelay = Math.random() * 5 + "s";

    fireflies.appendChild(dot);

}


/* ==========================================================
    PETALS
========================================================== */

const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("span");

    petal.className = "petal";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.animationDuration = (8 + Math.random() * 6) + "s";

    petal.style.opacity = Math.random();

    petal.style.transform =
        `scale(${0.4 + Math.random()})`;

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 15000);

}

setInterval(createPetal, 250);


/* ==========================================================
    SPARKLES
========================================================== */

const sparkles = document.getElementById("sparkles");

function createSparkle() {

    const s = document.createElement("span");

    s.className = "spark";

    s.style.left = Math.random() * window.innerWidth + "px";

    s.style.top = Math.random() * window.innerHeight + "px";

    sparkles.appendChild(s);

    setTimeout(() => {

        s.remove();

    }, 2500);

}

setInterval(createSparkle, 120);


/* ==========================================================
    OPEN GIFT
========================================================== */

const gift = document.getElementById("gift");

gift.addEventListener("click", () => {

    gift.classList.add("open");

    openSound.volume = 0.8;

    openSound.play();

    document.getElementById("flash").style.opacity = "1";

    setTimeout(() => {

        document.getElementById("white-screen").style.opacity = "1";

    }, 1200);

    setTimeout(() => {

        window.location.href = "nhungloidan.html";

    }, 2800);

});


/* ==========================================================
    PARALLAX
========================================================== */

document.addEventListener("mousemove", e => {

    const x = (e.clientX / window.innerWidth - 0.5) * 15;

    const y = (e.clientY / window.innerHeight - 0.5) * 15;

    document.querySelector(".moon").style.transform =
        `translate(${x}px,${y}px)`;

    document.querySelector(".forest-front").style.transform =
        `translate(${x / 3}px,0)`;

    document.querySelector(".forest-back").style.transform =
        `translate(${x / 6}px,0)`;

});


/* ==========================================================
    CAMERA ZOOM
========================================================== */

let scale = 1;

setInterval(() => {

    scale += 0.00012;

    document.querySelector(".background").style.transform =
        `scale(${scale})`;

}, 30);
const gift = document.getElementById("gift");

gift.addEventListener("click",()=>{

    gift.querySelector(".gift")
        .classList.add("open");

    setTimeout(()=>{

        window.location.href="nhungloidan.html";

    },2500);

});
