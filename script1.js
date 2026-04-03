let currentScale = 1;
//Изминение маштаба вего сайта
function changeSize(multiplier) {
    currentScale *= multiplier;
    document.body.style.fontSize = currentScale + 'em'
}
//Переключение цвета
function toggleTheme() {
document.body.classList.toggle('dark-theme');
document.body.classList.toggle('light-theme')
}