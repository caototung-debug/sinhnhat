/* ==========================================
    TYPING EFFECT (HIỆU ỨNG GÕ CHỮ)
========================================== */
const text = "Đang bước vào khu rừng...";
const typing = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}

// Xóa nội dung cũ trước khi chạy gõ chữ
if (typing) {
    typing.innerHTML = "";
    typeEffect();
}


/* ==========================================
    THANH LOADING + HIỆN HỘP QUÀ
========================================== */
const gift = document.getElementById("gift");
const progress = document.querySelector(".progress"); // Thanh loading

setTimeout(() => {
    // Hiện hộp quà
    if (gift) gift.classList.add("show");

    // Ẩn thanh loading đi cho đẹp giao diện
    if (progress) progress.style.display = "none"; 
}, 5000);


/* ==========================================
    CLICK HỘP QUÀ TỚI TRANG MỚI
========================================== */
if (gift) {
    gift.addEventListener("click", () => {
        // Tạo hiệu ứng mở nắp
        gift.classList.add("open");

        // Chuyển trang sau 2.5 giây
        setTimeout(() => {
            window.location.href = "nhungloidan.html";
        }, 2500);
    });
}


/* ==========================================
    TẠO ĐOM ĐÓM LUNG LINH
========================================== */
const firefliesContainer = document.getElementById("fireflies");

if (firefliesContainer) {
    for (let i = 0; i < 30; i++) { // Tăng lên 30 con đom đóm cho thêm huyền ảo
        let fly = document.createElement("span");
        
        // Đặt class 'firefly' cho khớp với file CSS nâng cấp
        fly.className = "firefly"; 

        // Tọa độ ngẫu nhiên
        fly.style.left = Math.random() * 100 + "%";
        fly.style.top = Math.random() * 85 + "%";

        // Tốc độ và độ trễ ngẫu nhiên để đom đóm nhấp nháy tự nhiên
        fly.style.animationDelay = Math.random() * 5 + "s";
        fly.style.animationDuration = (Math.random() * 3 + 2) + "s"; 

        firefliesContainer.appendChild(fly);
    }
}
