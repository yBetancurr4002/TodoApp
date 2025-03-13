document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
      const taskList = document.getElementById('taskList');

      // Crear un nuevo elemento de lista
      const li = document.createElement('li');
      li.textContent = taskText;

      // Botón para eliminar la tarea
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.style.backgroundColor = '#dc3545';
      deleteBtn.style.color = 'white';
      deleteBtn.style.border = 'none';
      deleteBtn.style.borderRadius = '4px';
      deleteBtn.style.cursor = 'pointer';

      deleteBtn.addEventListener('click', function () {
          taskList.removeChild(li);
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      // Limpiar el campo de entrada
      taskInput.value = '';
  } else {
      alert('Por favor, ingresa una tarea válida.');
  }
});