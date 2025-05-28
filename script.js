document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    header.addEventListener("click", () => {
        header.style.backgroundColor = "#005bb5";
    });

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.backgroundColor = "#e6f0ff";
        });
        section.addEventListener("mouseleave", () => {
            section.style.backgroundColor = "transparent";
        });
    });
});
