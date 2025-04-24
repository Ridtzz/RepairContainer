document.addEventListener("DOMContentLoaded", () => {
    const servicesLink = document.querySelector(".services-link");
    const serviceIcon = document.querySelector(".service-icon");

    // Проверяем, кликал ли пользователь ранее
    if (localStorage.getItem("servicesVisited")) {
        serviceIcon.style.display = "none"; // Скрываем иконку
    }

    // При клике скрываем иконку и запоминаем посещение
    servicesLink.addEventListener("click", () => {
        serviceIcon.style.display = "none";
        localStorage.setItem("servicesVisited", "true");
    });
});
