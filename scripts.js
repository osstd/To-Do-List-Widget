const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const sneakerbar = document.getElementById("sneakerbar");

function sneakerBar(text, background) {
  let changed = false;
  if (text) {
    sneakerbar.innerHTML = text;
  }
  if (background) {
    sneakerbar.style.backgroundColor = "#E53935";
    changed = true;
  }
  sneakerbar.style.display = "block";
  setTimeout(function () {
    sneakerbar.style.display = "none";
    if (changed) {
      sneakerbar.style.backgroundColor = "#4CAF50";
    }
  }, 2000);
}

function saveTasks() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function addTask() {
  let bar = true;
  if (inputBox.value === "") {
    alert("You must write something!");
    bar = false;
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTasks();
  if (bar) {
    sneakerBar("Task Added ✔️");
  }
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTasks();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTasks();
      sneakerBar("Task Deleted", true);
    }
  },
  false
);

function showData() {
  let data = localStorage.getItem("data");
  if (data) {
    listContainer.innerHTML = data;
    sneakerBar("Hello again! 😊");
  } else {
    sneakerBar("Hello! 🤩");
  }
}

showData();
