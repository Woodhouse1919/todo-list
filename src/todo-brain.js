const todoBrain = (() => {
  const input = document.querySelector('input');

  const createDiv = () => {
    const listItem = document.createElement('div');
    const content = document.querySelector('.content');
    content.appendChild(listItem);
    listItem.classList.add('item');
    listItem.textContent = input.value;
    const button = document.createElement('button');
    listItem.appendChild(button);
    button.textContent = 'X';
    button.classList.add('delBtn');
  };

  const clearInput = () => {
    input.addEventListener('click', () => {
      input.value = '';
    });
    input.addEventListener('focusout', () => {
      input.value = 'Add todo...';
    });
  };

  const deleteButton = () => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('delBtn')) {
        e.target.parentElement.remove();
      }
    });
  };

  const addTodo = () => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        createDiv();
        input.value = '';
      }
    });
  };

  deleteButton();
  addTodo();
  clearInput();
})();

export { todoBrain };
