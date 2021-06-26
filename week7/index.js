var task = document.getElementById("task");
var deadline = document.getElementById("due");
var submit = document.getElementById("button");
var todoDiv = document.getElementById("todoTask");
var allTasks = [];

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (task.value && deadline.value) {
    var taskToAdd = {
      newTask: task.value,
      newDue: deadline.value,
    };

    task.value = "";
    deadline.value = "";
    allTasks.push(taskToAdd);
    addCommentsToList();
  } else {
    alert("Please enter task and deadline!");
  }
});

function addCommentsToList() {
    todoDiv.innerHTML = "";

  for (let i = 0; i < allTasks.length; i++) {
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "columns ");
    var div = document.createElement("div");
    div.setAttribute("class", "centered ");
    var h51 = document.createElement("h5");
    h51.textContent = "Task: " + allTasks[i].newTask;
    var h52 = document.createElement("h5");
    h52.textContent = "Deadline: " + allTasks[i].newDue;
    var but = document.createElement("button");
    but.textContent = "Delete";
    but.setAttribute("class", "button delete");
    but.setAttribute("data-value", [i]);
    var hr = document.createElement("hr");
    mainDiv.appendChild(div);
    div.appendChild(h51);
    div.appendChild(h52);
    div.appendChild(but);
    div.appendChild(hr);

    todoDiv.appendChild(div);
  }
}

document.body.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.matches("button") && e.target.getAttribute("id") !== "button") {
    var index = e.target.getAttribute("data-value");

    allTasks.splice(index, 1);
    addCommentsToList();
  }
});