let elForm = document.querySelector(".todo-form"); 
let elList = document.querySelector(".todo-list");
let elInput = document.querySelector(".todo-input");
let elTemplate = document.querySelector("#todo-item--template").content;
// ! local storage 
let todosStorage = JSON.parse(window.localStorage.getItem('todos'))

// ! functionni umumiy functiaga solib qoydik
function umumiyfunction (){
      window.localStorage.setItem('todos', JSON.stringify(todosArr))
      renderTodo(todosArr,elList)
}

// ! =======================

const todosArr = todosStorage || []
function daleteBtn(e){
      const todoId = e.target.dataset.id
      let findindex = todosArr.findIndex((elem)=> elem.id == todoId)

      
      todosArr.splice(findindex,1)
      umumiyfunction ()
}

function complateTodo(e){
      const cheketTodo  = e.target.dataset.id
      let findCompleted = todosArr.find((elem)=> elem.id == cheketTodo)
      findCompleted.isCompeted = ! findCompleted.isCompeted 

      umumiyfunction ()
      
}


function renderTodo(todoArr,element){
      element.innerHTML = null
      todoArr.forEach((todo)=>{
            const cloneTemplate = elTemplate.cloneNode(true)
            const elTitle = cloneTemplate.querySelector('.todo-item-complete-text');
            const elDaleteBtn = cloneTemplate.querySelector('.todo-item-delete-btn');
            const elCheckBox = cloneTemplate.querySelector('.todo-input-complete');



            elTitle.textContent = todo.text,
            elCheckBox.checked = todo.isCompeted,
            elDaleteBtn.dataset.id = todo.id
            elCheckBox.dataset.id = todo.id

            if(todo.isCompeted){
                  elTitle.classList.add('abduaziz')
            }

            elDaleteBtn.addEventListener('click',daleteBtn)
            elCheckBox.addEventListener('click',complateTodo)

            element.appendChild(cloneTemplate)
      })
}

elForm.addEventListener('submit',(event)=>{
      event.preventDefault();
      const inputValue = elInput.value.trim();
      todosArr.push({
            id:todosArr.length + 1,
            text:inputValue,
            isCompeted:false

      })

      umumiyfunction ()
      elInput.value=null
})

umumiyfunction ()