// JavaScript source code
// JavaScriptでメニューの開閉を制御
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });
});