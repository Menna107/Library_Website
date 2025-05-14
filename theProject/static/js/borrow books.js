document.querySelectorAll(".carousel-container").forEach(container => {
    const carousel = container.querySelector(".part3");
    const leftArrow = container.querySelector(".left");
    const rightArrow = container.querySelector(".right");

    leftArrow.addEventListener("click", () => {
        carousel.scrollBy({ left: -250, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
        carousel.scrollBy({ left: 250, behavior: "smooth" });
    });
});

