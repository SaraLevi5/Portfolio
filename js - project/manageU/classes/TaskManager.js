export default class TaskManager {
  constructor() {
    this.tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  completeTask(taskId) {
    let indexToChangeToTrue = this.tasks.findIndex((task) => task.id == taskId);
    this.tasks[indexToChangeToTrue].status = true;
  }
  editDescription(taskId, newDescription) {
    let indexToUpdate = this.tasks.findIndex((task) => task.id == taskId);
    this.tasks[indexToUpdate].description = newDescription;
  }
  deleteTask(taskId) {
    let indexToDelete = this.tasks.findIndex((task) => task.id == taskId);
    this.tasks.splice(indexToDelete, 1);
  }
}
