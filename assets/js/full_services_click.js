document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.full-services-button');

    button.addEventListener('mouseenter', function (e) {
        const width = button.offsetWidth;
        const height = button.offsetHeight;
        const x = e.offsetX;
        const y = e.offsetY;

        const moveX = x / width * 100;
        const moveY = y / height * 100;

        // Изменяем фон с градиентом в зависимости от позиции курсора
        button.style.background = `linear-gradient(${moveX}deg, #007bff, #fff)`;
    });

    button.addEventListener('mouseleave', function () {
        // Восстанавливаем исходный фон
        button.style.background = '#000';
    });
});
