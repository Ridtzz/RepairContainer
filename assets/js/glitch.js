document.addEventListener("DOMContentLoaded", function () {
    // Скрипт для появления text-container при скролле
    const textContainer = document.querySelector(".text-container");

    function onScrollText() {
        const rect = textContainer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            textContainer.classList.add("visible");
            window.removeEventListener("scroll", onScrollText); // Чтобы эффект сработал только один раз
        }
    }

    window.addEventListener("scroll", onScrollText);

    // Скрипт для появления элементов li при скролле
    const serviceItems = document.querySelectorAll(".services-list li");

    function onScrollServices() {
        serviceItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                item.classList.add("visible"); // Добавляем класс для анимации
            } else {
                item.classList.remove("visible"); // Убираем класс, если элемент выходит за пределы
            }

            // Задержка анимации для каждого элемента, чтобы они появлялись по очереди
            item.style.transitionDelay = `${index * 0.1}s`; 
        });
    }

    window.addEventListener("scroll", onScrollServices);

    // Применяем анимацию сразу, если элементы уже на экране
    onScrollText();
    onScrollServices();
});
