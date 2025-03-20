window.addEventListener("load", solve);

function solve() {
    const addBtnElement = document.getElementById('add-btn');
    const deleteBtnElement = document.querySelector('.btn.delete');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const expenseListElement = document.getElementById('expenses-list');

    addBtnElement.addEventListener('click', () => {
        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        if (!expense || !amount || !date) {
            return;
        }

        const liElement = createLiElement(expense, amount, date);

        previewListElement.appendChild(liElement);

        addBtnElement.setAttribute('disabled', 'disabled');

        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';


        const editBtnElement = liElement.querySelector('.btn.edit');
        editBtnElement.addEventListener('click', () => {
            expenseInputElement.value = expense;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            liElement.remove();

            addBtnElement.removeAttribute('disabled');
        });


        const okBtnElement = liElement.querySelector('.btn.ok');
        okBtnElement.addEventListener('click', () => {
            const buttonsDivElement = liElement.querySelector('.buttons');
            buttonsDivElement.remove();
            const newLiElement = liElement;
            liElement.remove();

            expenseListElement.appendChild(newLiElement);

            addBtnElement.removeAttribute('disabled');
        });
    });

    deleteBtnElement.addEventListener('click', () => {
        expenseListElement.innerHTML = '';
    });

    function createLiElement(expense, amount, date) {
        const expensePElement = document.createElement('p');
        expensePElement.textContent = `Type: ${expense}`;

        const amountPElement = document.createElement('p');
        amountPElement.textContent = `Amount: ${amount}$`;

        const datePElement = document.createElement('p');
        datePElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(expensePElement);
        articleElement.appendChild(amountPElement);
        articleElement.appendChild(datePElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('btn', 'edit');
        editBtnElement.textContent = 'edit';

        const okBtnElement = document.createElement('button');
        okBtnElement.classList.add('btn', 'ok');
        okBtnElement.textContent = 'ok';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editBtnElement);
        buttonsDivElement.appendChild(okBtnElement);

        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);

        return liElement;
    }
}