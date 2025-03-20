window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');

    const nameElement = document.getElementById('name');
    const phoneElement = document.getElementById('phone');
    const categoryElement = document.getElementById('category');
    const checkListElement = document.getElementById('check-list');
    const contactListElement = document.getElementById('contact-list');

    addButtonElement.addEventListener('click', () => {
        const name = nameElement.value;
        const phone = phoneElement.value;
        const category = categoryElement.value;

        if (name === '' || phone === '' || category === '') {
            return;
        }

        const liElement = document.createElement('li');

        const namePElement = document.createElement('p');
        namePElement.textContent = `name:${name}`;
        const phonePElement = document.createElement('p');
        phonePElement.textContent = `phone:${phone}`;
        const categoryPElement = document.createElement('p');
        categoryPElement.textContent = `category:${category}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(namePElement);
        articleElement.appendChild(phonePElement);
        articleElement.appendChild(categoryPElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');

        editButtonElement.addEventListener('click', () => {
            nameElement.value = name;
            phoneElement.value = phone;
            categoryElement.value = category;

            liElement.remove();
        });

        const saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');

        saveButtonElement.addEventListener('click', () => {
            liElement.remove();
            
            const contactLiElement = document.createElement('li');
            
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('del-btn');

            deleteButtonElement.addEventListener('click', () => {
                contactLiElement.remove();
            });

            contactLiElement.appendChild(articleElement);
            contactLiElement.appendChild(deleteButtonElement);

            contactListElement.appendChild(contactLiElement);
        });

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(saveButtonElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);

        checkListElement.appendChild(liElement);

        nameElement.value = '';
        phoneElement.value = '';
        categoryElement.value = '';
    });
}