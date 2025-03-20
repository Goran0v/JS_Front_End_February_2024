function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');

    Array.from(inputElements).forEach(el => el.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
    }));

    Array.from(inputElements).forEach(el => el.addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focused');
    }));
}