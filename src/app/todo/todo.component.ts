import { Component } from '@angular/core';
import {Todo} from '../../Todo.class/todo';
import {TodoDataService} from '../../Services/todo-data.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoDataService]
})
export class TodoComponent  {
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
