window.addEventListener("load", init);

var taskName;
var taskDesc;

function init(){
    taskName = document.getElementById("box_1");
    taskDesc = document.getElementById("box_2");
    document.getElementById("add").addEventListener("click", addTask);
    document.getElementById("delete").addEventListener("click", deleteTask);
    document.getElementById("save").addEventListener("click", saveTask);
    document.getElementById("load").addEventListener("click", loadTask);
}

function saveTask(){
    if(window.localStorage){
        var json = JSON.stringify(taskObj.taskList);
        localStorage.setItem('taskData', json);
    }
}

function loadTask(){
    var data = localStorage.getItem('taskData')
    taskObj.taskList = JSON.parse(data);
    printTask();
}

function addTask(){
    var ul = document.getElementById("itemList");
    var li = document.createElement('li');
    
    taskObj.addTask(taskName.value,taskDesc.value);
    
    var img = document.createElement('img');
    img.setAttribute('src', 'dustbin.png');
    li.innerHTML = taskObj.id + " " + taskName.value + " " + taskDesc.value;
    li.appendChild(img);
    ul.appendChild(li);
    li.addEventListener("click", markTask);
}

function markTask(){
    event.srcElement.classList.toggle("selected");
    var currentElement = event.srcElement.innerHTML.split(" ")[0];
    taskObj.toggleTask(currentElement);
}

function deleteTask(){
    taskObj.deleteTask();
    printTask();
}

function printTask(){
    var ul = document.getElementById("itemList");
    ul.innerHTML = "";
    taskObj.taskList.forEach(function(obj){
        var li = document.createElement('li');
        li.innerHTML = obj.id + " " + obj.taskName + " " + obj.taskDesc;
        var img = document.createElement('img');
        img.setAttribute('src', 'dustbin.png');
        li.appendChild(img);
        ul.appendChild(li);
        li.addEventListener("click", markTask);
    })
}