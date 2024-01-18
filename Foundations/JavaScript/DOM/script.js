const button = document.querySelector('.addButton')
const list = document.querySelector('#list');

button.addEventListener('click', ()=> {
    const input = document.querySelector('input');
    const item = document.createElement('li');
    const content = document.createElement('span');
    const deleteButton = document.createElement('button');
    

    content.textContent = input.value;
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('deleteButton'); // Use class instead of ID for styling and event delegation
    
    item.appendChild(content);
    item.appendChild(deleteButton);
    list.appendChild(item)

    input.value = "";
    
    
});

// Use event delegation for handling delete button clicks
list.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('deleteButton')) {
        const listItem = target.parentNode;
        listItem.parentNode.removeChild(listItem);
    }
});

document.getElementById("focusButton").addEventListener("click", () => {
    document.getElementById("item").focus();
  });