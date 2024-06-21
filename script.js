const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoBox = document.querySelector(".todos");

const addTodo = () => {
  if (todoInput.value == "") {
    alert("please enter valid todo");
    return;
  }
  //add new todo
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.innerHTML = `<input type="checkbox" class="todo-check" >
                <p class="todo">${todoInput.value}</p>
                <span class="edit"><i class="fa-solid fa-pen-to-square fa-xs"></i></span>
                <span class="delete"><i class="fa-solid fa-trash fa-xs"></i></span>`;
  todoBox.prepend(todoItem);
  todoInput.value = "";

  // //delete button
  // deleteButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     button.parentElement.remove();
  //   });
  // });

  // //edit button

  // editButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     todoInput.value = button.previousElementSibling.innerText;
  //     button.parentElement.remove();
  //   });
  // });

  // checkboxes.forEach((checkbox) => {
  //   checkbox.addEventListener("click",()=>{
  //       checkbox.nextElementSibling.classList.toggle("mark");
  //   });

  // });
};

todoButton.addEventListener("click", addTodo);

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
});

todoBox.addEventListener("click", (e) => {
  //checkbox functionality
  if (e.target.classList.contains("todo-check")) {
    e.target.nextElementSibling.classList.toggle("mark");
  }
  
  // edit button functionality
  if (e.target.classList.contains("edit")) {
    todoInput.value = e.target.previousElementSibling.innerText;
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-pen-to-square")) {
     todoInput.value = e.target.parentElement.previousElementSibling.innerText;
     e.target.parentElement.parentElement.remove();
  }

  //delete button fuctionality
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-trash")) {
     e.target.parentElement.parentElement.remove();
  }
});
