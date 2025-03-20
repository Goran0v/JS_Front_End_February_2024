function create(words) {
   const contentElement = document.getElementById('content');

   const divElements = words.map(word => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = word;
      divElement.appendChild(pElement);
      return divElement;
   });

   divElements.forEach(element => {
      element.addEventListener('click', () => {
         const pElement = element.querySelector('p');
         pElement.style.display = 'block';
      })
   });


   const divElementsFragment = document.createDocumentFragment();
   divElements.forEach(el => divElementsFragment.appendChild(el));
   contentElement.appendChild(divElementsFragment);
}