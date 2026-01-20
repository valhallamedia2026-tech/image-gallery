// Select modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");

// Select all gallery images
const images = document.querySelectorAll(".gallery img");

// Track which image is currently open
let currentIndex = 0;

// Open modal when an image is clicked
images.forEach(img => {
    img.addEventListener("click", () => {
        currentIndex = parseInt(img.dataset.index);
        openModal(img);
    });
});

// Function to open modal
function openModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.textContent = img.alt;
}

// Close modal
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close modal when clicking outside the image
modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (modal.style.display !== "block") return;

    if (e.key === "ArrowRight") {
        // Next image
        currentIndex = (currentIndex + 1) % images.length;
        openModal(images[currentIndex]);
    }

    if (e.key === "ArrowLeft") {
        // Previous image
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openModal(images[currentIndex]);
    }

    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});
