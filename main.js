document.getElementById('taskForm').addEventListener('submit', saveTask);

// save Task
function saveTask(e){
    
    //Getting Form Values
    var taskName = document.getElementById('taskName').value;
    var taskDate = document.getElementById('taskDate').value;
    var taskAssigned = document.getElementById('taskAssigned').value;
    
    //Building an object
    var task = {
        name: taskName,
        date: taskDate,
        assigned: taskAssigned
    }

    //local Storage
    if(localStorage.getItem('tasks') === null){
        
        // Initializing an array
        var tasks = [];

        //Adding task to the array
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }else{
        // getting from local storage
        var tasks = JSON.parse(localStorage.getItem('tasks'));

        //adding tasks to array
        tasks.push(task);

        //Re-set to Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Prevent Form from Submitting
    //e.preventDefault();
}

function fetchResults(){

    var tasks = JSON.parse(localStorage.getItem('tasks'));
    var tasksResults = document.getElementById('tasks');

    //Build Output
    tasksResults.innerHTML = '';

    //iterating through local storage values
    for(var i=0; i < tasks.length; i++){
        var name = tasks[i].name;
        var date = tasks[i].date;
        var assigned = tasks[i].assigned;

        //displaying task content
        tasksResults.innerHTML += '<div id="result">'+
                            '<h6 class="resultItem" id="taskNames">'+name+'</h6>'+' '+
                            '<p class="resultItem" id="tasksDate">'+date+'</p>'+
                            '<p class="resultItem" id="tasksAssigned">'+assigned+'</p>'+
                            '</div>';
       
    }  
}

