const element = document.getElementById('uniqueElement');
const elements = document.getElementsByClassName('example');
const paragraphs = document.getElementsByTagName('p');

const queryselectoreg = document.querySelector('.example');

console.log(element.textContent); 

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
}

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
}