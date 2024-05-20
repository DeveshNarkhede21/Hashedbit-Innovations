function submitfn(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
  
    if (todoText === '') {
      alert('Please enter a task!');
      return;
    }
  
    const todoList = document.getElementById('todoList');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText;
  
    newTodo.addEventListener('click', () => {
      newTodo.classList.toggle('strike');
    });
  
    todoList.appendChild(newTodo);
    todoInput.value = '';
  }
  