import {Todo} from '../model/Todo';
import {setTimeout} from 'timers';

export class TodoServices {
  listToDo: Array<Todo> = [];

  constructor() {}

  createTodo(name) {
    return new Todo(name, false);
  }

  handleCreationOfTodo(todo) {
    this.listToDo.push(todo);
  }

  cleanList() {
    this.listToDo = [];
  }

  getRidOfDoneItems() {
    this.listToDo = this.listToDo.filter((item) => {
      return !item.isDone;
    });
  }

  changeTodo(event) {
    this.listToDo[event] = event;
  }

  getTodoList() {
    console.log('XXXXXXXX')
    return this.listToDo;
  }
}
