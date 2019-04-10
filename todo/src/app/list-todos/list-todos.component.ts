import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }
  todos = [
   new Todo(1, 'Learn Java', false, new Date()),
   new Todo(2, 'Learn Python', false, new Date()),
   new Todo(3, 'Learn Angular', false, new Date())
  ];

  ngOnInit() {
  }

}
