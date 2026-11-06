// =========================
// Lightbox
// =========================

const cards = document.querySelectorAll(".gallery .card");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img");
        lightboxImage.src = img.src;
        lightbox.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

// =========================
// Back To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});