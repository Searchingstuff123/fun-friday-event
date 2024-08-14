document.addEventListener('DOMContentLoaded', function() {
    const tasks = ["Task 1: Describe your perfect day", "Task 2: Share a recipe you love cooking", "Task 3: Act out a scene from your favorite movie", "Task 4: Guess the song from its lyrics"];
    const taskElement = document.getElementById('task');

    function assignTask() {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        taskElement.innerText = tasks[randomIndex];
    }

    assignTask();
});
