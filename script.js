document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeText = darkModeToggle.querySelector('.dark-mode-text');
    const lightModeText = darkModeToggle.querySelector('.light-mode-text');

 
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeText.style.display = 'none';
        lightModeText.style.display = 'inline';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeText.style.display = 'none';
            lightModeText.style.display = 'inline';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeText.style.display = 'inline';
            lightModeText.style.display = 'none';
        }
    });
});