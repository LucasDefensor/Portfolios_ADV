const $html = document.querySelector('html');
const $button = document.querySelector('#dark-mode');

if (localStorage.getItem('dark-mode') === 'true') {
    $html.classList.add('dark-mode');
}

$button.addEventListener('click', function() {
    $html.classList.toggle('dark-mode');

    // Salva o estado no localStorage
    if ($html.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});
