const checkUrl = (url, element) => 
    fetch(url, { mode: 'no-cors' })
        .then(() => (element.textContent = 'En ligne', element.classList.add('is-success')))
        .catch(() => (element.textContent = 'Hors ligne', element.classList.add('is-danger')));

const createCard = subdomain => {
    const container = document.getElementById('subdomains'),
        column = document.createElement('div'),
        card = document.createElement('div'),
        clickableElement = document.createElement('span'),
        title = document.createElement('h2'),
        status = document.createElement('span');

    column.className = 'column is-one-third';
    card.className = 'card box';
    title.className = 'subtitle mb-3';
    status.className = 'tag is-flex';
    status.id = `status-${subdomain}`;
    status.textContent = 'Test en cours...';

    const url = subdomain === 'sylvain' ? 'https://sylvain.pro' : `https://${subdomain}.sylvain.pro`;
    title.textContent = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    clickableElement.append(title, status);
    clickableElement.className = 'clickable';
    clickableElement.onclick = () => window.open(url, '_blank');
    
    card.append(clickableElement);
    column.append(card);
    container.append(column);

    adjustLastRow(container);
    checkUrl(url, status);
};

const adjustLastRow = container => {
    const columns = [...container.children].map(column => (column.classList.remove('is-offset-4', 'is-offset-2'), column));
    columns.length % 3 === 1 ? columns.at(-1).classList.add('is-offset-4') :
    columns.length % 3 === 2 ? columns.at(-2).classList.add('is-offset-2') : null;
};

document.addEventListener('DOMContentLoaded', () => 
    fetch('https://api.sylvain.pro/latest/website')
        .then(response => response.json())
        .then(({ sub_domains }) => ['sylvain', ...sub_domains.filter(subdomain => subdomain !== 'ping')].forEach(createCard))
        .catch(console.error)
);