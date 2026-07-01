
const input = document.getElementById("task");
const taskList = document.getElementById("taskList");
function addTask() {

    let taskText = input.value.trim();

    if(taskText === "") {
        alert("⚠ Please enter a task!");
        input.focus();
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = "📚 " + taskText;
    span.onclick = function(){
        span.classList.toggle("completed");
    };
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete";

    deleteBtn.onclick = function(){
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    input.value = "";
    input.focus();
}
input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});