var taskObj = {
    "id" : 0,
    "taskList" : [],
    
    "addTask" : function(taskName,taskDesc){
        this.id++;
        var obj = new Task(this.id,taskName,taskDesc);
        this.taskList.push(obj);
        console.log(this.taskList);
    },
    
    "toggleTask" : function(id){
        var toggleList = this.taskList.filter(function(obj){
            return obj.id == id;
        })
        toggleList[0].selected = !toggleList[0].selected;
        console.log(toggleList);
    },
    
    "deleteTask" : function(){
        this.taskList = this.taskList.filter(function(obj){
            return obj.selected == false;
        })
    }
    
}