import { fetchData, processData } from './modulse.js';

const displayData = async () => {
    try {
        const data = await fetchData();
        console.log(data); // Data fetched successfully
        const processedData = processData(data);
        console.log(processedData); // Processed: Data fetched successfully
    } catch (error) {
        console.log(error);
    }
};

displayData();
