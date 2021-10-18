var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");

btn.onclick = create;
function create(e) {
  if (todoInput.value != "") {
    e.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var compbtn = document.createElement("button");
    compbtn.classList.add("complete");
    compbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(compbtn);

    var delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(delbtn);

    todoList.appendChild(newDiv);
    todoInput.value = "";
  } else {
    alert("Input Field can't be blank");
  }
}

todoList.onclick = deletecheck;

function deletecheck(e) {
  var item = e.target;
  console.log(item);
  if (item.classList[0] == "delete") {
    var parent = item.parentElement;
    console.log(parent);
    parent.remove();
  }
  if (item.classList[0] == "complete") {
    var parent = item.parentElement;
    parent.classList.toggle("completed");
  }
}
