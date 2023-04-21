function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    const bars = document.querySelectorAll(".bar");
    bars[0].classList.toggle("animate-top-bar");
    bars[1].classList.toggle("animate-middle-bar");
    bars[2].classList.toggle("animate-bottom-bar");
}

// Optional: Close the menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});
