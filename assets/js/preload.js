document.getElementById("start-button").addEventListener("click", function () {
    let startContainer = document.getElementById("start-container");
    let startButton = document.getElementById("start-button");
    let splineContainer = document.getElementById("spline-container");


    // Плавно скрываем контейнер
    startContainer.style.opacity = "0";

    setTimeout(() => {
        // Полностью скрываем контейнер
        startContainer.style.display = "none";

        // Показываем Spline-контейнер
        splineContainer.style.display = "block";

        // Добавляем класс для плавного появления Spline
        setTimeout(() => {
            splineContainer.classList.add("show");
        }, 100); // Небольшая задержка, чтобы не было резкого появления
    }, 2000); // 2 секунды, пока увеличивается кнопка
});
