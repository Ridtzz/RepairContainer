// Получаем элементы списка
const listItems = document.querySelectorAll('.social-links li');

// Добавляем обработчик события на первый элемент
listItems[0].addEventListener('mouseenter', () => {
    // Смещаем первый элемент на 100px влево
    listItems[0].style.transform = 'translateX(-90px)';

    // Возвращаем второй элемент на его место
    listItems[1].style.transform = 'translateX(0)';
});

// Добавляем обработчик события на завершение наведения (mouseleave) для первого элемента
listItems[0].addEventListener('mouseleave', () => {
    // Возвращаем первый элемент на его исходную позицию
    listItems[0].style.transform = 'translateX(0)';
});


// Добавляем обработчик события на второй элемент
listItems[1].addEventListener('mouseenter', () => {

    listItems[1].style.transform = 'translateX(-90px)';
    

    listItems[0].style.transform = 'translateX(-90px)';
});

// Добавляем обработчик события на завершение наведения (mouseleave) для второго элемента
listItems[1].addEventListener('mouseleave', () => {
    // Возвращаем элементы в исходное состояние
    listItems[1].style.transform = 'translateX(0)';
    listItems[0].style.transform = 'translateX(0)';
});

// Добавляем обработчик события на третий элемент
listItems[2].addEventListener('mouseenter', () => {

    listItems[0].style.transform = 'translateX(-25px)';
    

    listItems[1].style.transform = 'translateX(-25px)';
    

    listItems[2].style.transform = 'translateX(-25px)';
});

// Добавляем обработчик события на завершение наведения (mouseleave) для третьего элемента
listItems[2].addEventListener('mouseleave', () => {
    // Возвращаем элементы в исходное состояние
    listItems[0].style.transform = 'translateX(0)';
    listItems[1].style.transform = 'translateX(0)';
    listItems[2].style.transform = 'translateX(0)';
});
