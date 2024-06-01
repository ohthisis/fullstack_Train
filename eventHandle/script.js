document.getElementById('myButton').addEventListener('click', function(event) {
    // event object contains information about the event
    const output = document.getElementById('output');
    output.innerText = `Button clicked at coordinates (${event.clientX}, ${event.clientY})`;
});
