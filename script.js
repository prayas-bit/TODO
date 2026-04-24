const input = document.getElementById("todo-input");

const btn = document.getElementById("add-btn");

const list = document.getElementById("todo-list");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});

const completeSound = new Audio("shit/completed.wav");

completeSound.volume = 0.3;

const deleteSound = new Audio("shit/delete.wav");

deleteSound.volume = 0.2;

btn.addEventListener("click", function () {
  const value = input.value;
  if (value.trim() === "") {
    return;
  }
  const items = list.querySelectorAll("li");

  for (let item of items) {
    const text = item.querySelector("span").textContent;

    if (text === value) {
      return;
    }
  }

  let addlist = document.createElement("li");

  let textSpan = document.createElement("span");

  textSpan.textContent = value;

  addlist.appendChild(textSpan);

  list.appendChild(addlist);

  input.value = "";

  let deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete-btn");

  deleteBtn.textContent = "X";

  addlist.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    deleteSound.currentTime = 0;

    deleteSound.play();

    addlist.remove();
  });

  addlist.addEventListener("click", function () {
    addlist.classList.toggle("completed");

    if (addlist.classList.contains("completed")) {
      completeSound.currentTime = 0;

      completeSound.play();
    }
  });
});
