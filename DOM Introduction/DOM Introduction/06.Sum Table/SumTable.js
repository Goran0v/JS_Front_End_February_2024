function sumTable() {
    const tdCostElements = document.querySelectorAll('tr td:last-child:not(#sum)');
    const tdSumElement = document.getElementById('sum');

    const sum = Array.from(tdCostElements).reduce((sum, cost) => sum + Number(cost.textContent), 0);
    tdSumElement.textContent = sum;
}