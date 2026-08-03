/* === 1. TYPING EFFECT === */
const text = "Đang bước vào khu rừng...";
const typing = document.getElementById("typing");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
if (typing) {
    typing.innerHTML = "";
    typeEffect();
}

/* === 2. OPEN GIFT & LOADING === */
const gift = document.getElementById("gift");
const progress = document.querySelector(".progress");

setTimeout(() => {
    if (progress) progress.style.display = "none";
}, 5000);

if (gift) {
    gift.addEventListener("click", () => {
        gift.classList.add("open");
        setTimeout(() => {
            window.location.href = "nhungloidan.html";
        }, 2000);
    });
}

/* === 3. FIREFLIES === */
const firefliesContainer = document.getElementById("fireflies");
if (firefliesContainer) {
    for (let i = 0; i < 25; i++) {
        let fly = document.createElement("span");
        fly.className = "firefly";
        fly.style.left = Math.random() * 100 + "%";
        fly.style.top = Math.random() * 80 + "%";
        fly.style.animationDelay = Math.random() * 5 + "s";
        firefliesContainer.appendChild(fly);
    }
}

/* === 4. VẼ VƯỜN HOA CẨM TÚ CẦU NAVY BẰNG CANVAS === */
const canvas = document.getElementById('flowerCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawHydrangeaField();
    }

    // Vẽ 1 bông hoa 4 cánh nhỏ
    function drawPetal4(x, y, radius, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = color;
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 8;

        for (let i = 0; i < 4; i++) {
            ctx.rotate(Math.PI / 2);
            ctx.beginPath();
            ctx.arc(radius, 0, radius, 0, Math.PI * 2);
            ctx.fill();
        }
        // Nhụy trắng
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // Vẽ chùm hoa Cẩm Tú Cầu (tạo từ hàng chục bông 4 cánh)
    function drawHydrangeaCluster(centerX, centerY, clusterRadius) {
        const petalColors = ['#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#1d4ed8'];
        const count = 45; // Số lượng bông nhỏ trong 1 chùm

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * clusterRadius;
            const x = centerX + Math.cos(angle) * dist;
            const y = centerY + Math.sin(angle) * dist;
            const color = petalColors[Math.floor(Math.random() * petalColors.length)];
            const size = Math.random() * 4 + 5;

            drawPetal4(x, y, size, color);
        }
    }

    // Vẽ toàn bộ vườn hoa 2 bên góc
    function drawHydrangeaField() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const h = canvas.height;
        const w = canvas.width;

        // Bụi hoa bên trái
        drawHydrangeaCluster(w * 0.08, h - 80, 110);
        drawHydrangeaCluster(w * 0.15, h - 140, 90);
        drawHydrangeaCluster(w * 0.22, h - 60, 100);

        // Bụi hoa bên phải
        drawHydrangeaCluster(w * 0.92, h - 80, 110);
        drawHydrangeaCluster(w * 0.85, h - 140, 90);
        drawHydrangeaCluster(w * 0.78, h - 60, 100);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}
