const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadVacationsButton = document.getElementById('load-vacations');
const addVacationButton = document.getElementById('add-vacation');
const editVacationButton = document.getElementById('edit-vacation');
const vacationListElement = document.getElementById('list');
const formElement = document.getElementById('form');

const nameElement = document.getElementById('name');
const daysElement = document.getElementById('num-days');
const dateElement = document.getElementById('from-date');

loadVacationsButton.addEventListener('click', load)

addVacationButton.addEventListener('click', () => {
    const name = nameElement.value;
    const days = daysElement.value;
    const date = dateElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            days,
            date,
        })
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            load();

            nameElement.value = '';
            daysElement.value = '';
            dateElement.value = '';
        })
});

editVacationButton.addEventListener('click', () => {
    const name = nameElement.value;
    const days = daysElement.value;
    const date = dateElement.value;
    const _id = formElement.getAttribute('data-id');

    fetch(`${baseUrl}${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            days,
            date,
            _id,
        })
    })
        .then(res => {
            if (!res.ok) {
                return;
            }
            
            load();

            nameElement.value = '';
            daysElement.value = '';
            dateElement.value = '';

            editVacationButton.setAttribute('disabled', 'disabled');

            addVacationButton.removeAttribute('disabled');
        })
});

async function load() {
    const response = await fetch(baseUrl);
    const vacationResult = await response.json();

    vacationListElement.innerHTML = '';

    const containerListFragment = document.createDocumentFragment();
    Object.values(vacationResult)
        .forEach(vacation => {
            const name = vacation.name;
            const date = vacation.date;
            const days = vacation.days;

            const containerDivElement = document.createElement('div');
            containerDivElement.classList.add('container');

            const nameHTwoElement = document.createElement('h2');
            nameHTwoElement.textContent = name;
            const dateHThreeElement = document.createElement('h3');
            dateHThreeElement.textContent = date;
            const daysHThreeElement = document.createElement('h3');
            daysHThreeElement.textContent = days;

            const changeButtonElement = document.createElement('button');
            changeButtonElement.classList.add('change-btn');
            changeButtonElement.textContent = 'Change';

            changeButtonElement.addEventListener('click', () => {
                containerDivElement.remove();

                nameElement.value = name;
                daysElement.value = days;
                dateElement.value = date;

                editVacationButton.removeAttribute('disabled');
                
                addVacationButton.setAttribute('disabled', 'disabled');
                
                formElement.setAttribute('data-id', vacation._id);
            });

            const doneButtonElement = document.createElement('button');
            doneButtonElement.classList.add('done-btn');
            doneButtonElement.textContent = 'Done';

            doneButtonElement.addEventListener('click', () => {
                const _id = containerDivElement.getAttribute('data-id');

                fetch(`${baseUrl}${_id}`, {
                    method: 'DELETE',
                })
                    .then(() => {
                        containerDivElement.remove();
                    })
            });

            containerDivElement.appendChild(nameHTwoElement);
            containerDivElement.appendChild(dateHThreeElement);
            containerDivElement.appendChild(daysHThreeElement);
            containerDivElement.appendChild(changeButtonElement);
            containerDivElement.appendChild(doneButtonElement);

            containerDivElement.setAttribute('data-id', vacation._id);

            containerListFragment.appendChild(containerDivElement);
        });

    vacationListElement.appendChild(containerListFragment);
}