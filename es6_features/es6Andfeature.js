document.getElementById('myButton').addEventListener('click', (event) => {
    const output = document.getElementById('output');
    const { clientX: x, clientY: y } = event;
    output.innerHTML = `
        <p>Button clicked at:</p>
        <ul>
            <li>X: ${x}</li>
            <li>Y: ${y}</li>
        </ul>
    `;
});
