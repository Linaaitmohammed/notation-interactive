document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    const submitButton = document.getElementById('submit');
    const ratingSection = document.querySelector('.rating-section');
    const thankYouSection = document.querySelector('.thank-you-section');
    const selectedRatingDisplay = document.getElementById('selected-rating');
    let selectedNumber = null;

    // Gestion du clic sur les nombres
    numbers.forEach(number => {
        number.addEventListener('click', function() {
            // Retire la sélection précédente
            numbers.forEach(n => n.classList.remove('selected'));

            // Ajoute la sélection au nombre cliqué
            this.classList.add('selected');
            selectedNumber = this.getAttribute('data-value');
        });
    });

    // Gestion du clic sur le bouton "Envoyer"
    submitButton.addEventListener('click', function() {
        if (selectedNumber) {
            // Affiche la note sélectionnée dans le message de remerciement
            selectedRatingDisplay.textContent = selectedNumber;

            // Masque la section de notation et affiche le message de remerciement
            ratingSection.classList.add('hidden');
            thankYouSection.classList.remove('hidden');
        } else {
            alert('Veuillez sélectionner une note avant de soumettre.');
        }
    });
});
