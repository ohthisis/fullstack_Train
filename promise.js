const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Data fetch failed');
            }
        }, 5000);
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
