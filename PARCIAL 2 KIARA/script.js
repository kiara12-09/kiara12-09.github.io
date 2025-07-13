// JavaScript para el botón de Mostrar Alerta
const showAlertButton = document.getElementById('showAlert');
if (showAlertButton) {
    showAlertButton.addEventListener('click', () => {
        alert('¡Alerta de antojo! Promoción por tiempo limitado: 2x1 en pizzas grandes solo hoy.');
    });
}

// Manejo del modo oscuro
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeText = darkModeToggle?.querySelector('.dark-mode-text');
    const lightModeText = darkModeToggle?.querySelector('.light-mode-text');

    // Cargar el estado del modo oscuro desde localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        if (darkModeText && lightModeText) {
            darkModeText.style.display = 'none';
            lightModeText.style.display = 'inline';
        }
    } else {
        body.classList.remove('dark-mode');
        if (darkModeText && lightModeText) {
            darkModeText.style.display = 'inline';
            lightModeText.style.display = 'none';
        }
    }

    // Evento para alternar el modo oscuro
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkModeNow = body.classList.contains('dark-mode');
            
            // Guardar el estado en localStorage como true/false
            localStorage.setItem('darkMode', isDarkModeNow);
            
            // Actualizar el texto del botón
            if (darkModeText && lightModeText) {
                darkModeText.style.display = isDarkModeNow ? 'none' : 'inline';
                lightModeText.style.display = isDarkModeNow ? 'inline' : 'none';
            }
        });
    }
});
