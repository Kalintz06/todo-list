let input = document.querySelector(".input");
let button = document.querySelector(".Button");
let list = document.querySelector(".list");

console.log(button);
button.addEventListener("click", function () {
  // crée un element LI
  let newList = document.createElement("li");
  // donner un valeur a LI(valeur input)
  newList.innerText = input.value;
  // dans le parent UL , faire a apparaitre LI
  list.appendChild(newList);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = input.delete;
  deleteButton.classList.add("deletebtn");
  list.appendChild(deleteButton);
  deleteButton.remove();

  let removeList = document.createElement("removeList");
  removeList.innerText = input.deleteButton;
  list.remove;
});
