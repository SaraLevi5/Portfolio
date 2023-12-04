export default class Task {
  constructor(description) {
    this.description = description;
    this.status = false;
    this.id = Math.floor(Math.random() * 1000);
  }
  get(propName) {
    return this[propName];
  }
  set(propName, newValue) {
    this[propName] = newValue;
  }
}
