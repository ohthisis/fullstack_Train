export const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Data fetch failed');
            }
        }, 1000);
    });
};

export const processData = data => {
    return `Processed: ${data}`;
};
