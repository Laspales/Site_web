export function initializeThemeHandler() {
    const body = document.body;
    const screenWidth = window.innerWidth;


    if (screenWidth < 768) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('old_Theme', 'dark');
    } else {
        const savedTheme = localStorage.getItem('old_Theme') || 'light';
        body.classList.remove('light', 'dark');
        body.classList.add(savedTheme);
    }

    // Écouteur de clic pour le bouton theme
    const btnTheme = document.querySelector('.theme');
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            if (body.classList.contains('dark')) {
                body.classList.remove('dark');
                body.classList.add('light');
                localStorage.setItem('old_Theme', 'light');
            } else {
                body.classList.remove('light');
                body.classList.add('dark');
                localStorage.setItem('old_Theme', 'dark');
            }
        });
    }
}
