document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav a');

    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                history.pushState(null, '', page);
            })
            .catch(error => console.error('Error loading page:', error));
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Load the initial page based on the URL
    const initialPage = window.location.pathname.replace('/', '') || 'home';
    loadPage(initialPage);
});
