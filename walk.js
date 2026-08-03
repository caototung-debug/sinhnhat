/* ==========================================
   TYPING EFFECT
========================================== */


const text = "Đang bước vào khu rừng...";

const typing = document.getElementById("typing");


let index = 0;



function typeEffect(){


    if(index < text.length){


        typing.innerHTML += text.charAt(index);


        index++;


        setTimeout(typeEffect,120);


    }


}




typing.innerHTML = "";

typeEffect();






/* ==========================================
   THANH LOADING + HIỆN HỘP QUÀ
========================================== */


const giftContainer = document.getElementById("gift");



setTimeout(()=>{


    giftContainer.classList.add("show");


},5000);







/* ==========================================
   CLICK HỘP QUÀ
========================================== */


const gift = document.getElementById("gift");


gift.addEventListener("click",()=>{

    gift.classList.add("open");


    setTimeout(()=>{

        window.location.href="nhungloidan.html";

    },3000);


});






/* ==========================================
   TẠO ĐOM ĐÓM
========================================== */


const fireflies = document.getElementById("fireflies");



for(let i=0;i<25;i++){


    let fly = document.createElement("span");


    fly.className="fly";



    fly.style.left =
    Math.random()*100+"%";


    fly.style.top =
    Math.random()*80+"%";



    fly.style.animationDelay =
    Math.random()*5+"s";



    fireflies.appendChild(fly);


}
