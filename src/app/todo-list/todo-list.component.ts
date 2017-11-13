import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TodoServices} from '../services/TodoServices';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    TodoServices
  ]
})
export class TodoListComponent implements OnInit {

  handleCreationOfTodo(todo) {
    this.todoServices.handleCreationOfTodo(todo);
  }

  cleanList() {
    this.todoServices.cleanList();
  }

  getRidOfDoneItems() {
    this.todoServices.getRidOfDoneItems();
  }

  changeTodo(event) {
    this.todoServices.changeTodo(event);
  }

  getTodoCount() {
    return this.todoServices.getTodoList().length;
  }

  getTodoList() {
    return this.todoServices.getTodoList();
  }

  constructor(public todoServices: TodoServices) {}

  ngOnInit() {}
}
