/* ==========================================================
   TYPE WRITER
========================================================== */

const title = "Đang bước vào khu rừng...";
const typing = document.getElementById("typing");

typing.innerHTML = "";

let i = 0;

function typeWriter(){

    if(i < title.length){

        typing.innerHTML += title.charAt(i);

        i++;

        setTimeout(typeWriter,90);

    }

}

typeWriter();


/* ==========================================================
   CAMERA ZOOM
========================================================== */

let scale = 1;

setInterval(()=>{

    scale += 0.00018;

    document.querySelector(".background").style.transform =
    `scale(${scale})`;

},20);


/* ==========================================================
   PROGRESS BAR
========================================================== */

const bar = document.querySelector(".progress-bar");

let progress = 0;

const loading = setInterval(()=>{

    progress++;

    bar.style.width = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

    }

},80);


/* ==========================================================
   FIREFLIES
========================================================== */

const fireflies = document.getElementById("fireflies");

for(let i=0;i<45;i++){

    const dot = document.createElement("div");

    dot.className = "firefly";

    dot.style.left = Math.random()*100+"vw";

    dot.style.top = Math.random()*100+"vh";

    dot.style.animationDuration =
    4+Math.random()*5+"s";

    dot.style.animationDelay =
    Math.random()*5+"s";

    fireflies.appendChild(dot);

}


/* ==========================================================
   TWINKLE STARS
========================================================== */

const stars = document.querySelector(".stars");

for(let i=0;i<120;i++){

    const star = document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*70+"vh";

    star.style.animationDelay=Math.random()*4+"s";

    stars.appendChild(star);

}


/* ==========================================================
   CHANGE PAGE
========================================================== */

setTimeout(()=>{

    document.body.style.opacity="0";

    document.body.style.transition="2s";

},7600);

setTimeout(()=>{

    window.location.href="index.html";

},9300);
