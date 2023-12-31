
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
}