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

const displayData = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
};

displayData();

// promise ကို အခြေခံပီးသုံးထားတာ