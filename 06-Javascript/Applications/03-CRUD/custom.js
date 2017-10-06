window.addEventListener("load", init);

var taskName;
var taskDesc;

function init(){
    taskName = document.getElementById("box_1");
    taskDesc = document.getElementById("box_2");
    
    document.getElementById("add").addEventListener("click", addTask);
    
}

function addTask(){
    ul = document.getElementById("itemList");
    li = document.createElement('li');
    img = document.createElement('img');
    img.setAttribute('src', 'dustbin.png');
    li.innerHTML = taskName.value + " " + taskDesc.value;
    li.appendChild(img);
    ul.appendChild(li);
    li.addEventListener("click", markTask);
}

function markTask(){
    event.srcElement.classList.toggle("selected");
}