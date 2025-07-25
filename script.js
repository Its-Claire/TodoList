const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center bg-gray-50 border border-gray-300 px-4 py-2 rounded-lg';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'flex-1 cursor-pointer';
    span.addEventListener('click', () => {
    span.classList.toggle('line-through');
    span.classList.toggle('text-gray-400');
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑️';
    delBtn.className = 'ml-4 text-red-500 hover:text-red-700';
    delBtn.addEventListener('click', () => {
    todoList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    return li;
}

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text !== '') {
    const todoItem = createTodoItem(text);
    todoList.appendChild(todoItem);
    todoInput.value = '';
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
    addBtn.click();
    }
});