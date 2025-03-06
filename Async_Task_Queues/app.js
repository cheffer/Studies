const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve('Task 1, Done'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 2, Done'), 500)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 3, Done'), 2000))
];

async function processTasks() {
    for (let task of tasks) {
        const result = await task();
        console.log(result);
    }
}

processTasks();