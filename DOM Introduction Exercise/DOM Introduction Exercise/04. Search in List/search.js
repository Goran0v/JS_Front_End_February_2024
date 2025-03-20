function search() {
   const townElements = document.getElementById('towns');
   const searchText = document.getElementById('searchText').value;
   const resultElement = document.getElementById('result');

   let matchCount = 0;
   const elements = Array.from(townElements.children);
   for (const townElement of elements) {
      if (townElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townElement.style.textDecoration = 'underline';
         townElement.style.fontWeight = 'bold';
         matchCount++;
      }
   }

   resultElement.textContent = `${matchCount} matches found`;
}