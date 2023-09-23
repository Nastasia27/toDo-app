const form = document.querySelector('.input-form');
const title = document.querySelector('#task-title');
const text = document.querySelector('#task-text');
const contentBlock = document.querySelector('#todotask-block');
const emptyBlock = document.querySelector('.empty');
let todoList = [];

function taskItem(taskTitle, taskText, id) {
  const taskItem = document.createElement('div');
  taskItem.id = id;
  taskItem.innerHTML = `
      <div class="inprocesslist-block">
        <ul class="task-list">
          <li > <h3>${taskTitle} </h3> </li>
          <ul>
            <li>${taskText}</li>
          </ul>
         </ul>
         <div>
      
         </div>
      </div>`
   contentBlock.append(taskItem)
   title.value ='';
   text.value ='';
   title.focus();

   const deleteButton = document.createElement("button"); 
    deleteButton.classList.add('delete-button');
    const buttonBlock = document.querySelector('#button-block');

    const imgOfBusket = document.createElement('img');
    imgOfBusket.src = 'image/imagetrash.png';
    imgOfBusket.height = 30;

    taskItem.appendChild(deleteButton);
    taskItem.classList.add('task-item');
    deleteButton.appendChild(imgOfBusket);

    deleteButton.addEventListener('click', function(){ 
      taskItem.remove();
      removeItem();
      })

    const radioButton = document.createElement('input');
    radioButton.type = 'checkbox';
    radioButton.classList.add('checkbox')
    taskItem.prepend(radioButton);
    radioButton.addEventListener('click', function(){
      taskItem.classList.toggle('done');
      if (taskItem.classList.value.includes('done')) {
        statusDone(taskItem.id, "done");
      } else { statusDone(taskItem.id, "none")}
    })
}


function removeItem(id) {
  console.log(id);
  const index = todoList.findIndex(task => task.id == id);
  console.log(index)
  todoList.splice(index,1);
  console.log(todoList);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  }


function statusDone(id, status) {
  console.log(id)
 
  const index = todoList.findIndex(task => task.id == id);
  console.log(index)
  todoList[index].status = status;

  console.log(todoList);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  }



const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
console.log(storedTodoList);

if (storedTodoList.length > 0) {
  todoList = storedTodoList;
  console.log(todoList);
  todoList.map((element, index) => {
    taskItem(element.title,element.text, element.id, element.status);
    console.log(todoList[index])
    if (todoList[index].status === 'done') {
      const taskItem = document.getElementById(todoList[index].id);
        if (taskItem) {
            taskItem.classList.toggle('done');
        }
      const checkbox = taskItem.querySelector('.checkbox');
        if (checkbox) {
            checkbox.checked = true;
        }
    }
  });
}


if (contentBlock.children.length > 1) {
  emptyBlock.classList.add('hide');
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    const taskTitle = title.value;
    const taskText = text.value;
    const idByDate = Date.now();
    console.log(idByDate);
    taskItem(taskTitle, taskText, idByDate);
    todoList.push({title:taskTitle, text:taskText, id:idByDate, status:'none'})
    console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));

    if (contentBlock.children.length > 1) {
      emptyBlock.classList.add('hide');
    }
})  


