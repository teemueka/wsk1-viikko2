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
  checkbox.type = 'checkbox';
  checkbox.id = todoList[i].id;
  checkbox.checked = todoList[i].completed;

  newList.appendChild(checkbox);

  const label = document.createElement('label');
  label.htmlFor = todoList[i].id;
  label.textContent = todoList[i].task;

  newList.appendChild(label);

  myList.appendChild(newList);
}
