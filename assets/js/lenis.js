// Инициализация Lenis (глобальная переменная)
let lenis; 

document.addEventListener("DOMContentLoaded", () => {
  lenis = new Lenis({
    smooth: true,         // Включить плавный скролл
    smoothTouch: true,    // Плавный скролл для тач-устройств
    duration: 1.2         // Настройка скорости скролла
  });

  function raf(time) {
    lenis.raf(time); // Обновление в каждом кадре
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
