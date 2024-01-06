
function addTask(){
  let value =  document.getElementById('taskInput').value;

  if (value) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ task: value });
    // console.log(tasks);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    // localStorage.setItem('task1',value);  
    document.getElementById('taskInput').value = '';
  }
  // console.log(element);
  showTasks();
}


function showTasks(){
  let tasklist = document.getElementById('taskList');
  tasklist.innerHTML= '';
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(function (task, index) {
    const li = document.createElement('li');
    li.innerHTML =`
    <span>${task.task}</span>
    <button onclick="removeTask(${index})">Remove</button>
`;
    let tasklist = document.getElementById('taskList');
    tasklist.append(li);
  });

}

showTasks();


function removeTask(index){
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index,1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showTasks()

}