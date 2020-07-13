//Define UI variables

const form = document.querySelector('#task-form');
//Add task event

form.addEventListener('submit', function(e){
    const taskInput = document.querySelector('#task');
            if (taskInput.value === ''){
                alert('Add a task');
            }

            else{
                //create li element
            
                const li = document.createElement('li');
            
                // Add class
            
                li.className ='collection-item';
            
                //create text Node and append to li
            
                li.appendChild(document.createTextNode(taskInput.value));
                //create Link
                
                const link = document.createElement('a');
                
                //Add class
                
                link.className = 'delete-item secondary-content';
                
                //Add icon html
                
                link.innerHTML = '<i class="fa fa-remove"><li>';
                
                //Append the link to li
                
                li.appendChild(link);
                
                //Append li to ul
                
                const taskList = document.querySelector('.collection');
                taskList.appendChild(li);
                
                
                //clear input
                taskInput.value = '';
            }
            
            e.preventDefault();

})       
//Remove Task
            
const taskList = document.querySelector('.collection');

taskList.addEventListener('click', removeTask);

function removeTask(e) {

    if(e.target.parentElement.classList.contains('delete-item')) {

        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }

    }



}

            
//Filter Task
            
const filter =document.querySelector('#filter');
            
filter.addEventListener('keyup', filterTask);
            
    function filterTask(e){
        const text = e.target.value.toLowerCase();
            
        document.querySelectorAll('.collection-item').forEach(function(task){
                const item = task.firstChild.textContent;
            
                    if(item.toLowerCase().indexOf(text)!= -1){
                            task.style.display = 'block';
                     }    

                    else{
            
                        task.style.display = 'none';
                     }
                    
        });
            
    }
            
//Clear Task
            
const clearBtn = document.querySelector('.clear-tasks');
            
clearBtn.addEventListener('click', clearTasks);
            
function clearTasks(){
    const taskList = document.querySelector('.collection');
    taskList.innerHTML = ''; 

}

