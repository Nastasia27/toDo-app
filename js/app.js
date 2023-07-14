const form = document.querySelector('.input-form');

const title = document.querySelector('#task-title');
const text = document.querySelector('#task-text');

const contentBlock = document.querySelector('#todotask-block');

const emptyBlock = document.querySelector('.empty');




form.addEventListener('submit', function(e){
    e.preventDefault();
    const taskTitle = title.value;
    const taskText = text.value;
    const taskItem = document.createElement('div')
    taskItem.innerHTML = `
      <div class="inprocesslist-block">
        <ul class="task-list">
          <li> <h3>${taskTitle} </h3> </li>
          <ul>
            <li>${taskText}</li>
          </ul>
         </ul>
         <div id='button-block'>
      
         </div>
      </div>`

//<button class="delete-button" type="button">
          //<img src='image/imagetrash.png' height='30px'>
        // </button>

    contentBlock.append(taskItem)
    
    title.value ='';
    text.value ='';

    title.focus();

    if (contentBlock.children.length > 1) {
      emptyBlock.classList.add('hide');
    }
//
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
  })

const radioButton = document.createElement('input');
radioButton.type = 'checkbox';
radioButton.classList.add('checkbox')
taskItem.prepend(radioButton);
radioButton.addEventListener('click', function(){
  taskItem.classList.toggle('done');
})

 

})  

if (contentBlock.children.length < 2) {
  emptyBlock.classList.remove('hide');
}

