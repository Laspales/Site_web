export function initializeThemeHandler() {
    document.addEventListener('DOMContentLoaded', function () {
        const btnTheme = document.querySelector('.theme');
        const body = document.body;
        const old_Theme = localStorage.getItem('old_Theme');

        if (old_Theme) {
            body.classList.add(old_Theme);
        }

        if (btnTheme) {
            btnTheme.addEventListener('click', () => {
                if (body.classList.contains('dark')) {
                    body.classList.add('light');
                    body.classList.remove('dark');
                    localStorage.setItem('old_Theme', 'light');
                } else if (body.classList.contains('light')) {
                    body.classList.add('dark');
                    body.classList.remove('light');
                    localStorage.setItem('old_Theme', 'dark');
                }
            });
        }
    });
}
