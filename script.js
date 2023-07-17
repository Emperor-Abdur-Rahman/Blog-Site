document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const pages = document.querySelectorAll('.page');

    function showPage(page) {
        pages.forEach(page => {
            page.style.display = 'none';
        });
        document.getElementById(page).style.display = 'block';
        window.scrollTo(0, 0);
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });

    showPage('page0');
});

