function toggle() {
    const toggleButtonElement = document.querySelector('.head span.button');
    const extraInfoElement = document.getElementById('extra');
    const currentButtonTextElement = toggleButtonElement.textContent;

    if (currentButtonTextElement === 'More') {
        extraInfoElement.style.display = 'block';
        toggleButtonElement.textContent = 'Less';
    } else {
        extraInfoElement.style.display = 'none';
        toggleButtonElement.textContent = 'More';
    }    
}