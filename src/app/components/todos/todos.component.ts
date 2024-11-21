import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Импортируем FormsModule

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []; // Инициализация пустым массивом

  InputTodo:string = "";

  constructor() {}

  ngOnInit(): void {
    // Присваиваем массив объектов типа Todo
    this.todos = [
      {
        content: 'First ToDo',
        completed: false,
      },
      {
        content: 'Second ToDo',
        completed: false,
      },
    ];
  }

  toggleDone (id: number) {
    this.todos.forEach((v, i) => {
      if (i === id) v.completed = !v.completed;

      return v;
    });
  }
  
  deleteTodo(id: number) {
  this.todos = this.todos.filter((v, i) => i != id);
}
addTodo() {
  this.todos.push({

    content: this.InputTodo,
    completed: false

  });

  this.InputTodo = "";
}

}


