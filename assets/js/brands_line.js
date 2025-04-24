document.addEventListener("DOMContentLoaded", function () {
    const brands = document.querySelectorAll(".brand-track img");
    const slider = document.querySelector(".brand-slider");

    function updateOpacity() {
        const sliderRect = slider.getBoundingClientRect();

        brands.forEach(brand => {
            const brandRect = brand.getBoundingClientRect();
            const distanceToLeft = brandRect.left - sliderRect.left;
            const distanceToRight = sliderRect.right - brandRect.right;

            if (distanceToLeft < 100) {
                brand.style.opacity = distanceToLeft / 175; // Уменьшение прозрачности слева
            } else if (distanceToRight < 100) {
                brand.style.opacity = distanceToRight / 175; // Уменьшение прозрачности справа
            } else {
                brand.style.opacity = 1; // Полная видимость
            }
        });
    }

    setInterval(updateOpacity, 50);
});
