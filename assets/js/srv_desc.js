 function toggleTable(type) {
        var table = document.getElementById(type + "-services-table");
        var toggleButton = document.getElementById(type + "-services-toggle");

        table.classList.toggle("open");

        if (table.classList.contains("open")) {
            toggleButton.innerHTML = "<h3>Закрыть список</h3>";
        } else {
            toggleButton.innerHTML = "<h3>Услуги для " + (type === 'smartphone' ? 'смартфонов' : 'ноутбуков') + "</h3>";
        }
    }