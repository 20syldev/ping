function checkUrl(url, element) {
    fetch(url, { mode: 'no-cors' })
        .then(() => {
            element.textContent = 'OK';
            element.classList.add('is-success');
        })
        .catch(() => {
            element.textContent = 'Erreur';
            element.classList.add('is-danger');
        });
}

document.addEventListener('DOMContentLoaded', function() {
    checkUrl('https://sylvain.pro', document.getElementById('status-sylvain'));
    checkUrl('https://api.sylvain.pro', document.getElementById('status-api'));
    checkUrl('https://docs.sylvain.pro', document.getElementById('status-docs'));
    checkUrl('https://logs.sylvain.pro', document.getElementById('status-logs'));
    checkUrl('https://chat.sylvain.pro', document.getElementById('status-chat'));
    checkUrl('https://flowers.sylvain.pro', document.getElementById('status-flowers'));
    checkUrl('https://php.sylvain.pro', document.getElementById('status-php'));
    checkUrl('https://terminal.sylvain.pro', document.getElementById('status-terminal'));
    checkUrl('https://digit.sylvain.pro', document.getElementById('status-digit'));
    checkUrl('https://donut.sylvain.pro', document.getElementById('status-donut'));
    checkUrl('https://readme.sylvain.pro', document.getElementById('status-readme'));
    checkUrl('https://morpion.sylvain.pro', document.getElementById('status-morpion'));
});