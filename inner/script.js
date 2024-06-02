function changeText() {
    const textElement = document.getElementById('textElement');
    textElement.innerText = 'This is innerText';
}

function changeHTML() {
    const htmlElement = document.getElementById('htmlElement');
    htmlElement.innerHTML = 'This is <em>inner HTML</em>';
}

function changeStyle() {
    const styledElement = document.getElementById('styledElement');
    styledElement.style.color = 'red';
    styledElement.style.fontSize = '20px';
    styledElement.style.backgroundColor = 'yellow';
}
