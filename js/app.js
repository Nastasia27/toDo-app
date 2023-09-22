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
        <div class="radio-button">
          <input type="radio">
        </div>
        <ul class="task-list">
          <li> <h3>${taskTitle} </h3> </li>
          <ul>
            <li>${taskText}</li>
          </ul>
         </ul>
          <button class="delete-button" type="button">
          <img src='image/imagetrash.png' height='30px'>
         </button>
         <div>
      
         </div>
      </div>`

    contentBlock.append(taskItem)
    
    title.value ='';
    text.value ='';

    title.focus();

    if (contentBlock.children.length > 1) {
      emptyBlock.classList.add('hide');
    }

    const deleteButton = document.querySelector('.delete-button')

    deleteButton.addEventListener('click', function(){
       console.log('DEL') ;
       const removeItem = document.querySelector('.task-block')
       removeItem.remove();
    })

 

})  


