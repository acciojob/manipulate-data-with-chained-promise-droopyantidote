// script.js

function manipulateData(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  })
  .then((array) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        document.getElementById('output').innerText = evenNumbers.join(', ');
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledEvenNumbers = evenNumbers.map(num => num * 2);
        document.getElementById('output').innerText = doubledEvenNumbers.join(', ');
        resolve(doubledEvenNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// Usage example
const inputArray = [1, 2, 3, 4];
manipulateData(inputArray);
