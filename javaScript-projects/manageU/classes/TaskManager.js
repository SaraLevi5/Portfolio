export default class TaskManager {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  completeTask(taskId) {
    let indexToChangeToTrue = this.tasks.findIndex((task) => task.id == taskId);
    // update the task status to true
    this.tasks[indexToChangeToTrue].status = true;
  }
  editDescription(taskId, newDescription) {
    // find the relevent index
    let indexToUpdate = this.tasks.findIndex((task) => task.id == taskId);
    // update in the array
    this.tasks[indexToUpdate].description = newDescription;
  }
  deleteTask(taskId) {
    //find the relevent index
    let indexToDelete = this.tasks.findIndex((task) => task.id == taskId);
    // delete with splice
    this.tasks.splice(indexToDelete, 1);
  }
}
