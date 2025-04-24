document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".services-list li");

    serviceItems.forEach(item => {
        item.addEventListener("click", function (event) {
            if (!event.target.classList.contains("toggle-icon")) {
                const description = this.querySelector(".service-description");
                const icon = this.querySelector(".toggle-icon");
                const title = this.querySelector("h3");

                description.classList.toggle("show");
                icon.classList.toggle("rotate");
                title.classList.toggle("expanded"); // Добавляем/убираем класс для letter-spacing
            }
        });

        // Обработчик для плюсика
        const icon = item.querySelector(".toggle-icon");
        icon.addEventListener("click", function (event) {
            event.stopPropagation(); // Останавливаем всплытие
            const description = this.parentElement.nextElementSibling;
            const title = this.parentElement;
            
            description.classList.toggle("show");
            this.classList.toggle("rotate");
            title.classList.toggle("expanded"); // Добавляем/убираем класс
        });
    });
});
