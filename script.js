// Chenge theme__
const themeColor = ["#fcadad", "#f2abf8", "#ffd799", "#c091ec"];
let colorIndex = 0;

const handleThemeColor = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = themeColor[colorIndex];
  colorIndex = (colorIndex + 1) % themeColor.length;
};

// Set current data__
const date = {
  weekday: "short",
  month: "short",
  day: "2-digit",
  year: "numeric"
}
const currentDate = new Date().toLocaleDateString("en-BD", date);
const dateElement = document.getElementById("currentDate");
dateElement.innerText = currentDate;

// Task__

const handleTask = (clickedButton) => {
  const taskCount = document.getElementById("task_number").innerText;
  const convertedTaskCount = Number(taskCount);
  const completedTaskCount = document.getElementById("complete_task_number").innerText;
  const convertedCompletedTaskCount = Number(completedTaskCount);

  window.alert("Board updated successfully");

  if(convertedTaskCount < 1) {
    return;
  }

  const remainingTaskCount = convertedTaskCount - 1;
  const newTaskCount = document.getElementById("task_number");
  newTaskCount.innerText = remainingTaskCount;

  if(convertedCompletedTaskCount < 1) {
    return;
  }

  const remainingCompletedTask = convertedCompletedTaskCount + 1
  const newCompletedTask = document.getElementById("complete_task_number");
  newCompletedTask.innerText = remainingCompletedTask;

  clickedButton.disabled = true;
  clickedButton.classList.add("task_btn");
}