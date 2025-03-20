const baseUrl = 'http://localhost:3030/jsonstore/gifts/';

const loadButtonElement = document.getElementById('load-presents');
const addButtonElement = document.getElementById('add-present');
const editButtonElement = document.getElementById('edit-present');
const giftListElement = document.getElementById('gift-list');
const giftInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');
const formContainerElement = document.getElementById('form');

loadButtonElement.addEventListener('click', load);

addButtonElement.addEventListener('click', add);

editButtonElement.addEventListener('click', () => {
    const gift = giftInputElement.value;
    const giftFor = forInputElement.value;
    const price = priceInputElement.value;

    const giftId = formContainerElement.getAttribute('data-id');

    fetch(`${baseUrl}${giftId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gift,
            for: giftFor,
            price,
            _id: giftId
        })
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            load();

            editButtonElement.setAttribute('disabled', 'disabled');

            addButtonElement.removeAttribute('disabled');

            giftInputElement.value = '';
            forInputElement.value = '';
            priceInputElement.value = '';
        })
});

function add() {
    const gift = giftInputElement.value;
    const giftFor = forInputElement.value;
    const price = priceInputElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gift,
            for: giftFor,
            price
        })
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            giftInputElement.value = '';
            forInputElement.value = '';
            priceInputElement.value = '';

            return load();
        });
}

async function load() {
    const response = await fetch(baseUrl);
    const presentsResult = await response.json();

    giftListElement.innerHTML = '';

    const giftListFragment = document.createDocumentFragment();
    Object.values(presentsResult)
        .forEach(present => {
            const changeButtonElement = document.createElement('button');
            changeButtonElement.classList.add('change-btn');
            changeButtonElement.textContent = 'Change';

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete-btn');
            deleteButtonElement.textContent = 'Delete';

            changeButtonElement.addEventListener('click', () => {
                giftSockElement.remove();

                giftInputElement.value = present.gift;
                forInputElement.value = present.for;
                priceInputElement.value = present.price;

                formContainerElement.setAttribute('data-id', present._id);

                editButtonElement.removeAttribute('disabled');

                addButtonElement.setAttribute('disabled', 'disabled');
            });

            deleteButtonElement.addEventListener('click', (e) => {
                if (e.target.tagName !== 'BUTTON' && !e.target.classList.contains('delete-btn')) {
                    return;
                }

                const giftElement = e.target.parentElement.parentElement;

                const giftId = giftElement.getAttribute('data-id');
                fetch(`${baseUrl}${giftId}`, {
                    method: 'DELETE',
                })
                    .then(res => {
                        if (!res.ok) {
                            return;
                        }

                        giftElement.remove();
                    });
            })

            const buttonsDivElement = document.createElement('div');
            buttonsDivElement.classList.add('buttons-container');
            buttonsDivElement.appendChild(changeButtonElement);
            buttonsDivElement.appendChild(deleteButtonElement);

            const giftPElement = document.createElement('p');
            giftPElement.textContent = present.gift;
            const forPElement = document.createElement('p');
            forPElement.textContent = present.for;
            const pricePElement = document.createElement('p');
            pricePElement.textContent = present.price;

            const contentDivElement = document.createElement('div');
            contentDivElement.classList.add('content');
            contentDivElement.appendChild(giftPElement);
            contentDivElement.appendChild(forPElement);
            contentDivElement.appendChild(pricePElement);

            const giftSockElement = document.createElement('div');
            giftSockElement.classList.add('gift-sock');
            giftSockElement.appendChild(contentDivElement);
            giftSockElement.appendChild(buttonsDivElement);

            giftSockElement.setAttribute('data-id', present._id);

            giftListFragment.appendChild(giftSockElement);
        });

    giftListElement.appendChild(giftListFragment);
}