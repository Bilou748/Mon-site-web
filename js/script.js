// Dans js/script.js


// Sélectionner le bouton et le body
const btnTheme = document.querySelector('#btn-theme');
const body = document.querySelector('body');

// Au clic, basculer entre mode clair et sombre
btnTheme.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Changer le texte du bouton selon le mode
    if (body.classList.contains('dark-mode')) {
        btnTheme.textContent = '☀️ Mode clair';
    } else {
        btnTheme.textContent = '🌙 Mode sombre';
    }
});