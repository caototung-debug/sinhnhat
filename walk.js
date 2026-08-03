document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
    1. HIỆU ỨNG GÕ CHỮ (ĐÃ FIX DÍNH CHỮ)
========================================== */
const text = "Đang bước vào khu rừng...";
const typing = document.getElementById("typing");

if (typing) {
    typing.textContent = ""; // Dùng textContent thay vì innerText để giữ nguyên khoảng trắng
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typing.innerHTML = text.slice(0, index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
}


   /* ==========================================
        CLICK HỘP QUÀ: RÚT DÂY ➔ SÁNG NHÈ NHẸ ➔ CHUYỂN TRANG
    ========================================== */
    const giftContainer = document.getElementById("gift");
    const flashScreen = document.querySelector(".flash-screen");

    if (giftContainer) {
        giftContainer.addEventListener("click", () => {
            // Tránh click nhiều lần
            if (giftContainer.classList.contains("open")) return;

            // BƯỚC 1: Kích hoạt hiệu ứng rút dây + bật nắp hộp quà ngay lập tức
            giftContainer.classList.add("open");

            // BƯỚC 2: Đợi 0.6s cho dây rút và nắp mở xong, bắt đầu tỏa ánh sáng nhè nhẹ
            setTimeout(() => {
                if (flashScreen) {
                    flashScreen.classList.add("active");
                }
            }, 600);

            // BƯỚC 3: Đợi ánh sáng lan tỏa nhẹ nhàng phủ kín màn hình (sau 1.8s) mới chuyển trang
            setTimeout(() => {
                window.location.href = "nhungloidan.html";
            }, 1800);
        });
    }


    /* ==========================================
        3. TẠO ĐOM ĐÓM LUNG LINH
    ========================================== */
    const firefliesContainer = document.getElementById("fireflies");

    if (firefliesContainer) {
        for (let i = 0; i < 25; i++) {
            let fly = document.createElement("span");
            fly.className = "firefly";
            fly.style.left = Math.random() * 100 + "%";
            fly.style.top = Math.random() * 80 + "%";
            fly.style.animationDelay = Math.random() * 5 + "s";
            fly.style.animationDuration = (Math.random() * 3 + 2) + "s";
            firefliesContainer.appendChild(fly);
        }
    }


    /* ==========================================
        4. VẼ VƯỜN HOA CẨM TÚ CẦU NAVY (CANVAS)
    ========================================== */
    const canvas = document.getElementById("flowerCanvas");

    if (canvas) {
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawHydrangeaField();
        }

        // Vẽ 1 bông hoa 4 cánh nhỏ
        function drawSinglePetal4(x, y, radius, color) {
            ctx.save();
            ctx.translate(x, y);
            ctx.fillStyle = color;
            ctx.shadowColor = "#60a5fa";
            ctx.shadowBlur = 6;

            for (let i = 0; i < 4; i++) {
                ctx.rotate(Math.PI / 2);
                ctx.beginPath();
                ctx.arc(radius, 0, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            // Nhụy hoa sáng
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.35, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // Vẽ 1 chùm hoa Cẩm Tú Cầu (gồm nhiều bông 4 cánh)
        function drawHydrangeaCluster(centerX, centerY, clusterRadius) {
            const colors = ["#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#1d4ed8"];
            const flowerCount = 50;

            for (let i = 0; i < flowerCount; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * clusterRadius;
                const x = centerX + Math.cos(angle) * dist;
                const y = centerY + Math.sin(angle) * dist;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 3 + 4;

                drawSinglePetal4(x, y, size, color);
            }
        }

        // Vẽ các bụi hoa hai bên góc màn hình
        function drawHydrangeaField() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const w = canvas.width;
            const h = canvas.height;

            // Bụi hoa góc trái
            drawHydrangeaCluster(w * 0.06, h - 70, 110);
            drawHydrangeaCluster(w * 0.14, h - 130, 95);
            drawHydrangeaCluster(w * 0.20, h - 50, 100);

            // Bụi hoa góc phải
            drawHydrangeaCluster(w * 0.94, h - 70, 110);
            drawHydrangeaCluster(w * 0.86, h - 130, 95);
            drawHydrangeaCluster(w * 0.80, h - 50, 100);
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
    }
});
