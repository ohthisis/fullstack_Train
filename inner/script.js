function changeText() {
    const textElement = document.getElementById('textElement');
    textElement.innerText = 'New text';
}

function changeHTML() {
    const htmlElement = document.getElementById('htmlElement');
    htmlElement.innerHTML = 'New <em>HTML</em>';
}

function changeStyle() {
    const styledElement = document.getElementById('styledElement');
    styledElement.style.color = 'red';
    styledElement.style.fontSize = '20px';
    styledElement.style.backgroundColor = 'yellow';
}
