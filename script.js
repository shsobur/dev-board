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

const handleTask = () => {
  const taskCount = document.getElementById("task_number").innerText;
  const convertedTadkCount = Number(taskCount);

  if(convertedTadkCount < 1) {
    return;
  }

  const remainingTaskCount = convertedTadkCount - 1;
  const newTaskCount = document.getElementById("task_number");
  newTaskCount.innerText = remainingTaskCount;
}