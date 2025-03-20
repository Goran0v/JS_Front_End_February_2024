function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');
    
    for (const profile of profileElements) {
        const buttonElement = profile.querySelector('button');
        const lockRadioElement = profile.querySelector('input[type=radio][value=lock]');

        buttonElement.addEventListener('click', (e) => {
            if (lockRadioElement.checked) {
                return;
            }

            const additionalInfoElement = buttonElement.previousElementSibling;
            if (buttonElement.textContent === 'Show more') {
                additionalInfoElement.style.display = 'block';
                buttonElement.textContent = 'Hide it';
            }
            else {
                additionalInfoElement.style.display = 'none';
                buttonElement.textContent = 'Show more';
            }
        });
    }
}