var newTaskForm = document.querySelector('.new-task-container');
var tasksContainer = document.querySelector('.container ul');

// on dom load
document.addEventListener('DOMContentLoaded', function(){
    bindAddTaskEvents();
    showTasks();
});