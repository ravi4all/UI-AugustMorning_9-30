/*window.addEventListener("load", function(){
    document.getElementById("btn").addEventListener("click", function(){
    var name = document.getElementById("box_1").value;
    document.getElementById("name").innerHTML = name;
});
})*/

window.addEventListener("load", doWork)

function doWork(){
    console.log("Do work executed...");
 document.getElementById("btn").addEventListener("click",showname);
}

function showname(){
    console.log("Showname executed...")
    var name = document.getElementById("box_1").value;
    document.getElementById("name").innerHTML = name;
}