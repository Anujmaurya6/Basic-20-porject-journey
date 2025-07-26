const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task!");
  } else {
    const li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";

    li.addEventListener("click", function () {
      li.classList.toggle("checked");
    });
  }
}

// 👉 Ye part enter ke liye hai:
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
