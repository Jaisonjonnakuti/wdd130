document.addEventListener("DOMContentLoaded", function () {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
        task.addEventListener("change", updateProgress);
    });

    function updateProgress() {
        const categories = ["love", "good", "need", "paid"];

        categories.forEach(category => {
            const tasks = document.querySelectorAll(`.task[data-category="${category}"]`);
            const completedTasks = document.querySelectorAll(`.task[data-category="${category}"]:checked`);

            let progress = (completedTasks.length / tasks.length) * 100;
            progress = isNaN(progress) ? 0 : progress;

            document.getElementById(`${category}-progress`).style.width = progress + "%";
            document.getElementById(`${category}-percent`).innerText = Math.round(progress) + "%";

            if (progress === 100) {
                launchConfetti();
            }
        });
    }

    function launchConfetti() {
        alert("🎉 Congrats! You completed a section of your Ikigai tasks! 🎉");
    }
});
