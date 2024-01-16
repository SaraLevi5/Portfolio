import Action from "./classes/Action.js";
import ActionManager from "./classes/ActionManager.js";

window.addActionToManager = function () {
  let type = document.getElementById("type").value;
  let description = document.getElementById("description").value;
  let amount = +document.getElementById("amount").value;

  let action = new Action(type, description, amount);

  manager.addAction(action);
  showActionsInTable();

  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
};

window.addEventListener("keyup", (e) => {
  e.key == "Enter" && window.addActionToManager();
});

window.deleteActionFromManager = function (actionId) {
  if (confirm("Are you sure?")) {
    manager.deleteAction(actionId);
    showActionsInTable();
  }
};

window.updateActionInManager = function (actionId) {
  let newAmount = prompt("Please Enter new amount: ");
  if (newAmount == null || newAmount == "") alert("Somthing went wrong");
  else {
    manager.updateAction(actionId, +newAmount);
    showActionsInTable();
  }
};

function showActionsInTable() {
  document.getElementById("actions").innerHTML = "";
  localStorage.setItem("actions", JSON.stringify(manager.actions));
  for (let action of manager.actions) {
    document.getElementById("actions").innerHTML += `
    <tr style=${action.type == "income" ? "color:green" : "color:red"}>
      <td>${action.description}</td>
      <td>${action.amount}</td>
      <td onclick="updateActionInManager(${
        action.id
      })"><i class="fa-regular fa-pen-to-square "></i></td>
      <td onclick="deleteActionFromManager(${action.id})">
      <i style="cursor: pointer" class="fa-regular fa-trash-can"></i></td>
    </tr>
    `;
  }
}

let manager = new ActionManager();
showActionsInTable();
