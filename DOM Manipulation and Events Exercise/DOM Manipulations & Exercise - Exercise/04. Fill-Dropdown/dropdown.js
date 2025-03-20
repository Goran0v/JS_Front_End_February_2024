function addItem() {
    const inputItemTextElement = document.getElementById('newItemText');
    const inputItemValueElement = document.getElementById('newItemValue');
    const selectMenuElement = document.getElementById('menu');

    const optionElement = document.createElement('option');
    optionElement.textContent = inputItemTextElement.value;
    optionElement.value = inputItemValueElement.value;

    selectMenuElement.appendChild(optionElement);
    inputItemTextElement.value = '';
    inputItemValueElement.value = '';
}