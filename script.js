// Chenge theme__
const themeColor = ["#fcadad", "#f2abf8", "#ffd799", "#c091ec"];
let colorIndex = 0;

const handleThemeColor = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = themeColor[colorIndex];
  colorIndex = (colorIndex + 1) % themeColor.length; 
};
