import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
 
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  //v2
  // todos= [
  //   {id: 1, description: 'learn to dance'},
  //   {id: 2, description: 'learn to fight'},
  //   {id: 3, description: 'learn to Angular'}
  // ];

  //v1
  // todo= {
  //   id: 1,
  //   description: 'learn to dance'
  // }
  
  //v3
  todos= [new Todo(1,'learn to dance', false, new Date()),
          new Todo(2,'learn to fight', false, new Date()),
          new Todo(3,'learn to angular', false, new Date())

]

  constructor() { }

  ngOnInit(): void {
  }

}
