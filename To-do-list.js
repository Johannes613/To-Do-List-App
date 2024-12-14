let mainInput = document.getElementById('input-bar');
let addTaskBtn = document.querySelector('.add-task');
let taskList = document.querySelector('.task-list');
addTaskBtn.onclick = addTask;

function addTask(){
    if(!mainInput.value){
        alert("Please fill out the task");
        return;
    }


    let newTask = document.createElement('div');
    newTask.setAttribute('class','one-task');
    taskList.appendChild(newTask);

    let newInput = document.createElement('input');
    newInput.setAttribute('class','task');
    newInput.setAttribute('readonly','true');

    newTask.appendChild(newInput);
    newInput.value = mainInput.value;
    mainInput.value = '';

    let newEdit = document.createElement('button');

    let editable = false;
    newEdit.onclick = function(){
        if(!editable){
            newInput.removeAttribute('readonly');
            newEdit.innerHTML = 'Save';
            newInput.style.color = '#EC4899';
            editable = true;
        }
        else{
            newInput.setAttribute('readonly','true');
            newEdit.innerHTML = 'Edit';
            newInput.style.color = '#e2e1e1';
            editable = false;
        }
        
    }
    newEdit.innerHTML = 'Edit';
    newEdit.setAttribute('class','edit');
    newTask.appendChild(newEdit);


    // delete button fanctionality
    let newDelete = document.createElement('button');

    newDelete.onclick = function(){
        taskList.removeChild(newTask);
    }

    newDelete.innerHTML = 'Delete'
    newDelete.setAttribute('class','delete');
    newTask.appendChild(newDelete);
}
