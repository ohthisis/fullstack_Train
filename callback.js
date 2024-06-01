function fetchData(callback) {
    setTimeout(() => {
        const data = 'Data fetched successfully';
        callback(null, data);
    }, 1000);
}

function handleData(error, data) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Data:', data);
    }
}

fetchData(handleData);
