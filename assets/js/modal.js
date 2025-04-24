document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы
    const modal = document.getElementById("contactModal"); // Исправлено id
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementsByClassName("close")[0];

    // Открытие модального окна
    openModalButton.addEventListener("click", function() {
        modal.classList.add('active');  // Добавляем класс для открытия окна
    });

    // Закрытие модального окна
    closeModalButton.addEventListener("click", function() {
        modal.classList.remove('active');  // Убираем класс для закрытия окна
    });

    // Закрытие при клике вне модального окна
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');  // Убираем класс при клике вне окна
        }
    });

    // Закрытие при нажатии на клавишу ESC
    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.classList.remove('active');  // Убираем класс при нажатии на ESC
        }
    });
});
