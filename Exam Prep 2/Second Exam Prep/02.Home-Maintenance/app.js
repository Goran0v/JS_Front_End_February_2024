window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');
    const tasksListElement = document.getElementById('task-list');
    const doneListElement = document.getElementById('done-list');

    addButtonElement.addEventListener('click', () => {
        const place = placeInputElement.value;
        const action = actionInputElement.value;
        const person = personInputElement.value;

        const placePElement = document.createElement('p');
        placePElement.textContent = `Place:${place}`;
        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action:${action}`;
        const personPElement = document.createElement('p');
        personPElement.textContent = `Person:${person}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';

        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(doneButtonElement);

        const liElement = document.createElement('li');
        liElement.classList.add('clean-task');
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);

        tasksListElement.appendChild(liElement);

        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';

        editButtonElement.addEventListener('click', () => {
            placeInputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            liElement.remove();
        });

        doneButtonElement.addEventListener('click', () => {
            liElement.remove();

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';

            const doneLiElement = document.createElement('li');
            doneLiElement.appendChild(articleElement);
            doneLiElement.appendChild(deleteButtonElement);

            doneListElement.appendChild(doneLiElement);

            deleteButtonElement.addEventListener('click', () => {
                doneLiElement.remove();
            });
        });
    });
}