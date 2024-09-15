// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const menu = dropdown.querySelector('.dropdown-content');

        button.addEventListener('click', function (event) {
            event.stopPropagation(); // イベントのバブリングを停止
            menu.classList.toggle('show');
        });
    });

    document.addEventListener('click', function (event) {
        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector('.dropdown-content');
            if (menu.classList.contains('show') && !dropdown.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    });
});
