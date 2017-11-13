import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Todo} from "../model/Todo";
import {TodoServices} from '../services/TodoServices';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    TodoServices
  ]
})
export class TodoFormComponent implements OnInit {

  @Output()
  todoCreated: EventEmitter<Todo> = new EventEmitter<Todo>();
  nameTodo = '';

  createTodo() {
    if (this.nameTodo !== '') {
      const newTodo = this.todoServices.createTodo(this.nameTodo);
      this.nameTodo = '';
      this.todoCreated.emit(newTodo);
    }
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.createTodo();
    }
  }

  constructor(public todoServices: TodoServices) { }

  ngOnInit() {}
}
