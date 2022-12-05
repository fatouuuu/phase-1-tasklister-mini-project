document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formElement = document.querySelector("form");
  formElement.addEventListener('submit', (e) => {
  let newtask = document.getElementById("new-task-description");
  let duedate = document.getElementById("due-date-time");


    e.preventDefault();

      handleToDo(newtask, duedate);
    formElement.reset()
  });
  function handleToDo (newtask, duedate) { //declare within fn 
    let listItem = document.createElement("li");
    let btn = document.createElement('button')
    
    btn.addEventListener('click',handleDelete)
    btn.textContent='X Remove'
    listItem.innerText = `${newtask.value}`;
    listItem.innerText += ` Due by ${duedate.value} `;
    listItem.appendChild(btn)
    document.querySelector("#tasks").appendChild(listItem);
  }
  
  function handleDelete(e){
  e.target.parentNode.remove()
  }
});

