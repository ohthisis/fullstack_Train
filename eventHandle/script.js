const button = document.getElementById('myButton');
const elements=document.getElementById('elements');

function handleClick(event) {
    console.log('Button was clicked!');
    console.log('Event type:', event.type);
    console.log('Element:', event.target);

    elements.innerHTML=`Event type:${event.type}`
}

button.addEventListener('click', handleClick);

