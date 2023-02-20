const form = document.querySelector('form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskInput = document.getElementById('new-task');
  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <input type="checkbox" id="task-${Date.now()}" />
    <label for="task-${Date.now()}">${newTaskInput.value}</label>
  `;
  taskList.appendChild(newTask);
  newTaskInput.value = '';
});
