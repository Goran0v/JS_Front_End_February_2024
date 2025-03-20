function solve() {
    const textareaInputElement = document.querySelector('#exercise textarea:first-of-type');
    const textareaOutputElement = document.querySelector('#exercise textarea:last-of-type');
    const generateButtonElement = document.querySelector('#exercise button:first-of-type');
    const buyButtonElement = document.querySelector('#exercise button:last-of-type');
    const tbElement = document.querySelector('.table tbody');

    generateButtonElement.addEventListener('click', () => {
        const inputData = JSON.parse(textareaInputElement.value);

        for (const furniture of inputData) {
            const imgElement = document.createElement('img');
            imgElement.src = furniture.img;
            const imgTdElement = document.createElement('td');
            imgTdElement.appendChild(imgElement);

            const NamePElement = document.createElement('p');
            NamePElement.textContent = furniture.name;
            const nameTdElement = document.createElement('td');
            nameTdElement.appendChild(NamePElement);

            const pricePElement = document.createElement('p');
            pricePElement.textContent = furniture.price;
            const priceTdElement = document.createElement('td');
            priceTdElement.appendChild(pricePElement);

            const decorPElement = document.createElement('p');
            decorPElement.textContent = furniture.decFactor;
            const decorTdElement = document.createElement('td');
            decorTdElement.appendChild(decorPElement);

            const checkboxElement = document.createElement('input');
            checkboxElement.setAttribute('type', 'checkbox');
            const checkboxTdElement = document.createElement('td');
            checkboxTdElement.appendChild(checkboxElement);

            const furnitureTrElement = document.createElement('tr');
            furnitureTrElement.appendChild(imgTdElement);
            furnitureTrElement.appendChild(nameTdElement);
            furnitureTrElement.appendChild(priceTdElement);
            furnitureTrElement.appendChild(decorTdElement);
            furnitureTrElement.appendChild(checkboxTdElement);

            tbElement.appendChild(furnitureTrElement);
        }
    });

    buyButtonElement.addEventListener('click', (e) => {
        let totalPrice = 0;
        let totalDecFactor = 0;
        let markedChildren = 0;
        let names = [];

        Array.from(tbElement.children).forEach(fEl => {
            const markInputElement = fEl.querySelector('input[type=checkbox]');
            if (!markInputElement.checked) {
                return;
            }

            const name = fEl.children.item(1).textContent;
            const price = Number(fEl.children.item(2).textContent);
            const decFactor = Number(fEl.children.item(3).textContent);

            names.push(name);
            totalPrice += price;
            totalDecFactor += decFactor;
            markedChildren++;
        });

        const avgDecFactor = totalDecFactor / markedChildren;
        textareaOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
        textareaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textareaOutputElement.textContent += `Average decoration factor: ${avgDecFactor}`;
    });
}