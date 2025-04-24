document.querySelectorAll('.magnetic').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const { offsetWidth, offsetHeight } = target;
        const moveX = (offsetX / offsetWidth) * 30 - 5; // Было 20, уменьшил до 10
        const moveY = (offsetY / offsetHeight) * 30 - 5;
        target.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.1)`; // Было 1.1
    });

    link.addEventListener('mouseleave', (e) => {
        e.target.style.transition = 'transform 0.4s ease-out'; // Увеличил до 0.4s
        e.target.style.transform = 'translate3d(0, 0, 0) scale(1)';
        setTimeout(() => e.target.style.transition = '', 400);
    });
});
