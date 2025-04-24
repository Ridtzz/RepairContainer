<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Услуги | Repair Container</title>

    <link rel="stylesheet" href="assets/css/services_style.css">

    <link href="https://fonts.cdnfonts.com/css/furore" rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet">

</head>
<body>

    <button id="scrollToTopBtn" class="scroll-to-top-btn">
        <i class="fa-solid fa-angles-up"></i>
    </button>


    <header>
        <div class="container">
            <div class="brand"><a href="index.php">REPAIR CONTAINER</a></div>

            <nav>
                <ul class="nav-links">

                    <li><a href="#about" >О нас</a></li>
                    <li><a href="javascript:void(0);" id="openModal">Контакты</a></li>
                </ul>
            </nav>
            <div class="burger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>

<!-- Модальное окно -->
<div id="contactModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span> <!-- Кнопка закрытия -->
        <h3> Контакты </h3>
        <!-- Социальные сети -->
        <div class="social-media">
            <ul>
                <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-vk"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
            </ul>
        </div>
        
        <!-- Карта -->
        <div class="contact-map">
            <div style="position:relative;overflow:hidden;">
                <iframe src="https://yandex.by/map-widget/v1/?ll=29.339265%2C52.127753&mode=search&ol=geo&auri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE3NDQ2ORJP0JHQtdC70LDRgNGD0YHRjCwg0JPQvtC80LXQu9GM0YHQutCw0Y8g0LLQvtCx0LvQsNGB0YbRjCwg0JrQsNC70ZbQvdC60LDQstGW0YfRiyIKDQOp6kEV6INQQg%2C%2C&z=15" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
            </div>
        </div>
        
        <!-- Контактная информация -->
        <div class="contact-info">
            <p><i class="fa-solid fa-phone"></i> +1 234 567 890</p>
            <p><i class="fa-solid fa-at"></i> example@example.com</p>
            <p><i class="fa-solid fa-map-location-dot"></i> Примерная, 123</p>
        </div>
    </div>
</div>

<section id="services-container">
    <div class="services-header">
        <h2>Наши услуги</h2>
        <p>Мы предоставляем широкий спектр услуг для вашей техники. Ознакомьтесь с нашим списком.</p>
    </div>

    <!-- Кнопка для открытия/закрытия списка услуг для смартфонов -->
    <div id="smartphone-services-toggle" class="services-toggle-container" onclick="toggleTable('smartphone')">
        <h3>Услуги для смартфонов</h3>
    </div>

    <!-- Таблица услуг для смартфонов -->
    <div id="smartphone-services-table" class="services-table">
        <table>
            <thead>
                <tr>
                    <th>Услуга</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Диагностика при ремонте</td>
                    <td>0 руб</td>
                </tr>
                <tr>
                    <td>Замена дисплея (установка нового экрана или замена разбитого стекла/тачскрина)</td>
                    <td>от 70 руб</td>
                </tr>
                <tr>
                    <td>Замена аккумуляторной батареи в смартфоне</td>
                    <td>от 50 руб</td>
                </tr>
                <tr>
                    <td>Замена и восстановление разъемов (зарядка, наушники)</td>
                    <td>от 35 руб</td>
                </tr>
                <tr>
                    <td>Замена и восстановления кнопок (включения, громкости)</td>
                    <td>от 35 руб</td>
                </tr>
                <tr>
                    <td>Замена корпуса (задняя крышка или элементы корпуса)</td>
                    <td>от 35 руб</td>
                </tr>
                <tr>
                    <td>Замена динамика (разговорного (слухового) или основного)</td>
                    <td>от 35 руб</td>
                </tr>
                <tr>
                    <td>Замена микрофона</td>
                    <td>от 35 руб</td>
                </tr>
                <tr>
                    <td>Замена камеры (основной или фронтальной)</td>
                    <td>от 45 руб</td>
                </tr>
                <tr>
                    <td>Замена стекла камеры</td>
                    <td>от 35 руб</td>
                </tr>
                <tr>
                    <td>Восстановление после попадания жидкости (чистка и сушка)</td>
                    <td>от 30 руб</td>
                </tr>
                <tr>
                    <td>Программный ремонт (перепрошивка, снятие паролей)</td>
                    <td>от 40 руб</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Кнопка для открытия/закрытия списка услуг для ноутбуков -->
    <div id="laptop-services-toggle" class="services-toggle-container" onclick="toggleTable('laptop')">
        <h3>Услуги для ноутбуков</h3>
    </div>

    <!-- Таблица услуг для ноутбуков -->
    <div id="laptop-services-table" class="services-table">
        <table>
            <thead>
                <tr>
                    <th>Услуга</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Диагностика при ремонте</td>
                    <td>0 руб</td>
                </tr>
                <tr>
                    <td>Замена дисплея (установка нового экрана или замена разбитого стекла/тачскрина)</td>
                    <td>от 90 руб</td>
                </tr>
                <tr>
                    <td>Замена аккумулятора в ноутбуке</td>
                    <td>от 70 руб</td>
                </tr>
                <tr>
                    <td>Ремонт материнской платы</td>
                    <td>от 100 руб</td>
                </tr>
                <tr>
                    <td>Замена клавиатуры</td>
                    <td>от 60 руб</td>
                </tr>
                <tr>
                    <td>Замена корпуса (верхняя или нижняя крышка)</td>
                    <td>от 80 руб</td>
                </tr>
                <tr>
                    <td>Замена жесткого диска или SSD</td>
                    <td>от 50 руб</td>
                </tr>
                <tr>
                    <td>Чистка системы охлаждения</td>
                    <td>от 40 руб</td>
                </tr>
                <tr>
                    <td>Программный ремонт (перепрошивка, установка ОС)</td>
                    <td>от 60 руб</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>


<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>

<script src="assets/js/header_anim.js"></script>

<script src="assets/js/burger_menu.js"></script>

<script src="assets/js/tothetop.js"></script>

<script src="assets/js/srv_desc.js"></script>

<script src="assets/js/modal.js"></script>

<script src="assets/js/lenis.js"></script>

</body>
</html>