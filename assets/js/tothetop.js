// Получаем кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Функция для прокрутки страницы наверх с использованием Lenis
function scrollToTop() {
    lenis.scrollTo(0, { // Прокручиваем в верхнюю часть страницы
        duration: 3,   // Время прокрутки
        ease: 'easeInOut' // Тип анимации
    });
}

// Показываем кнопку, когда пользователь прокручивает страницу
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.opacity = "1";  // Плавное появление
        scrollToTopBtn.style.pointerEvents = "auto";  // Включаем взаимодействие
    } else {
        scrollToTopBtn.style.opacity = "0";  // Плавное исчезновение
        scrollToTopBtn.style.pointerEvents = "none";  // Отключаем взаимодействие
    }
};

// Обработчик нажатия на кнопку
scrollToTopBtn.addEventListener("click", scrollToTop);
