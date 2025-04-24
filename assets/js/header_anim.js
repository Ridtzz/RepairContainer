window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const icon = document.querySelector('header i'); // Иконка
    if (window.scrollY > 50) { // Когда прокрутка больше 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
