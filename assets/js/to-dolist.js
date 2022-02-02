const form = document.getElementById("task-form");
const tasklist = document.getElementById("tasks");

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById("task-input");
    addTask(inputField.value);
    form.reset();
}

function addTask(description) {
              const taskcontainer = document.createElement ("div");
              const newTask = document.createElement("input");
              const taskLabe1 = document.createElement("labe1");
              const taskDescriptionNode = document.createTextNode(description);

              newTask.setAttribute('type', 'checkbox');
              newTask.setAttribute('name', description);
              newTask.setAttribute('id', description);
              
              taskLabe1.setAttribute('for', description);
              taskLabe1.appendChild(taskDescriptionNode);

              taskcontainer.classList.add('task-item');
              taskcontainer.appendChild(newTask);
              taskcontainer.appendChild(taskLabe1);

              tasklist.appendChild(taskcontainer);
            }