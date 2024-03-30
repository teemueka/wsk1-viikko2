// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const myList = document.getElementById('myList');

for (let i = 0; i < todoList.length; i++) {
  const newList = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('click', () => {
    console.log('checkbox ' + todoList[i].id + ' ' + checkbox.checked);
  });
  checkbox.type = 'checkbox';
  checkbox.id = todoList[i].id;
  checkbox.checked = todoList[i].completed;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Del';
  deleteBtn.addEventListener('click', () => {
    todoList.splice(todoList.id, 1);
    myList.removeChild(newList);
    console.log(todoList);
  });

  newList.appendChild(deleteBtn);
  newList.appendChild(checkbox);

  const label = document.createElement('label');
  label.htmlFor = todoList[i].id;
  label.textContent = todoList[i].task;

  newList.appendChild(label);
  myList.appendChild(newList);
}

const modal = document.getElementById('modal');
const add = document.getElementById('addItem');
const modalAdd = document.getElementById('modalAdd');
const modalInput = document.getElementById('modalInput');
const invalid = document.getElementById('invalid');

add.addEventListener('click', () => {
  modal.showModal();
});

modalAdd.addEventListener('click', () => {
  const task = modalInput.value.trim();

  if (task !== '') {
    const newTask = {
      id: todoList.length + 1,
      task: task,
      completed: false,
    };

    todoList.push(newTask);

    const newList = document.createElement('li');
    const label = document.createElement('label');
    label.textContent = task;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Del';
    deleteBtn.addEventListener('click', () => {
      const index = todoList.indexOf(newTask);
      todoList.splice(index, 1);
      myList.removeChild(newList);
    });
    newList.appendChild(deleteBtn);
    newList.appendChild(checkbox);
    newList.appendChild(label);
    myList.appendChild(newList);
    modal.close();
    console.log(todoList);
  } else {
    invalid.textContent = 'Plese enter text';
  }
});
