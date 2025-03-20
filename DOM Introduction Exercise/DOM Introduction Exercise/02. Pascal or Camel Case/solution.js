function solve() {
  const firstElement = document.getElementById('text');
  const secondElement = document.getElementById('naming-convention');
  const resultElement = document.getElementById('result');

  let text = firstElement.value.toLowerCase();
  text = text.split(' ');
  const conventionCase = secondElement.value;

  let finalResult = '';

  if (conventionCase === 'Camel Case') {
    finalResult = text[0];
    for (let i = 1; i < text.length; i++) {
      let curr = text[i];
      for (let j = 0; j < curr.length; j++) {
        if (j === 0) {
          finalResult += curr[0].toUpperCase();
        } else {
          finalResult += curr[j];
        }
      }
    }
  } else if (conventionCase === 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      let curr = text[i];
      for (let j = 0; j < curr.length; j++) {
        if (j === 0) {
          finalResult += curr[0].toUpperCase();
        } else {
          finalResult += curr[j];
        }
      }
    }
  } else {
    finalResult = 'Error!';
  }

  resultElement.textContent = finalResult;
}