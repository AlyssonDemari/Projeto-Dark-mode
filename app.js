const $buttonSun = document.getElementById('switch-sun');
const $buttonMoon = document.getElementById('switch-moon');
const $html = document.documentElement;

function btnDark() {
    $html.classList.toggle('dark-mode');
    
    if ($html.classList.contains('dark-mode')) {
        $buttonSun.style.display = 'none';
        $buttonMoon.style.display = 'block';
    } else {
        $buttonMoon.style.display = 'none';
        $buttonSun.style.display = 'block';
    }
}

$buttonSun.addEventListener('click', btnDark);
$buttonMoon.addEventListener('click', btnDark);