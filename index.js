const inputElement = document.querySelector(".new-tesk-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsvalid = validateInput();
  if (!inputIsvalid) {
    return inputElement.classList.add("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());
