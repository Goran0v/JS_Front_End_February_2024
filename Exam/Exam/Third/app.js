const baseUrl = 'http://localhost:3030/jsonstore/games/';

const loadGamesButton = document.getElementById('load-games');
const addGameButton = document.getElementById('add-game');
const editGameButton = document.getElementById('edit-game');
const gameListElement = document.getElementById('games-list');
const formElement = document.getElementById('form');

const nameElement = document.getElementById('g-name');
const typeElement = document.getElementById('type');
const playersElement = document.getElementById('players');

loadGamesButton.addEventListener('click', loadGames);

addGameButton.addEventListener('click', () => {
    const name = nameElement.value;
    const type = typeElement.value;
    const players = playersElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            type,
            players,
        })
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            nameElement.value = '';
            typeElement.value = '';
            playersElement.value = '';

            return loadGames();
        })
});

editGameButton.addEventListener('click', () => {
    const name = nameElement.value;
    const type = typeElement.value;
    const players = playersElement.value;
    const gameId = formElement.getAttribute('data-id');

    fetch(`${baseUrl}${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            type,
            players,
            _id: gameId,
        }),
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            loadGames();

            nameElement.value = '';
            typeElement.value = '';
            playersElement.value = '';

            editGameButton.setAttribute('disabled', 'disabled');

            addGameButton.removeAttribute('disabled');
        });
});

async function loadGames() {
    const response = await fetch(baseUrl);
    const gameResult = await response.json();

    gameListElement.innerHTML = '';

    const gamesDocFragment = document.createDocumentFragment();
    Object.values(gameResult)
        .forEach(game => {
            const gameDivElement = document.createElement('div');
            gameDivElement.classList.add('board-game');
            //gameDivElement.setAttribute('data-id', game._id);

            const namePElement = document.createElement('p');
            namePElement.textContent = game.name;
            const playersPElement = document.createElement('p');
            playersPElement.textContent = game.players;
            const typePElement = document.createElement('p');
            typePElement.textContent = game.type;

            const contentDivELement = document.createElement('div');
            contentDivELement.classList.add('content');
            contentDivELement.appendChild(namePElement);
            contentDivELement.appendChild(playersPElement);
            contentDivELement.appendChild(typePElement);

            const changeButtonElement = document.createElement('button');
            changeButtonElement.classList.add('change-btn');
            changeButtonElement.textContent = 'Change';

            changeButtonElement.addEventListener('click', () => {
                gameDivElement.remove();

                nameElement.value = game.name;
                typeElement.value = game.type;
                playersElement.value = game.players;

                formElement.setAttribute('data-id', game._id);

                editGameButton.removeAttribute('disabled');

                addGameButton.setAttribute('disabled', 'disabled');
            });

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete-btn');
            deleteButtonElement.textContent = 'Delete';

            deleteButtonElement.addEventListener('click', () => {
                const gameId = game._id;

                fetch(`${baseUrl}${gameId}`, {
                    method: 'DELETE',
                })
                    .then(res => {
                        if (!res.ok) {
                            return;
                        }

                        gameDivElement.remove();
                    });
            });

            const buttonsDivElement = document.createElement('div');
            buttonsDivElement.classList.add('buttons-container');
            buttonsDivElement.appendChild(changeButtonElement);
            buttonsDivElement.appendChild(deleteButtonElement);

            gameDivElement.appendChild(contentDivELement);
            gameDivElement.appendChild(buttonsDivElement);

            gamesDocFragment.appendChild(gameDivElement);
        });

        gameListElement.appendChild(gamesDocFragment);
}