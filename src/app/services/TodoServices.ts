import {Todo} from '../model/Todo';

export class TodoServices {
  listToDo: Array<Todo> = [];

  constructor() {}
/*
  createTodo(name) {
    if(name !== '') {
      const item: Todo = new Todo(name, false);
      this.listToDo.push(item);
    }
  }
*/
  handleCreationOfTodo(todo) {
    console.log(todo);
    this.listToDo.push(todo);
  }

  cleanList() {
    this.listToDo = [];
  }

  ridOfTheDone() {
    this.listToDo = this.listToDo.filter((item) => {
      return !item.isDone;
    });
  }

  changeTheTodo(event) {
    console.log(event);
    this.listToDo[event] = event;
    console.log('**', this.listToDo);
  }

  getTodoList() {
    return this.listToDo;
  }
}
