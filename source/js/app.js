async function fetchTasks() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const tasks = await response.json();
        console.log("Tasks Loaded:", tasks);
        // هنا يمكنك إضافة كود لعرض المهام في الصفحة
    } catch (error) {
        console.error("Failed to load tasks", error);
    }
}
fetchTasks();
