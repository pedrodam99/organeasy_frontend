import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  protected todos = [
    {id: 0, title: 'React', descricao: 'Estudar hooks', completed: true},
    {id: 1, title: 'React', descricao: 'Estudar gerencimaneto de estado', completed: false},
  ]


  protected inprogresses = [
    {id: 0, title: 'Angular', descricao: 'Estudar roteamento do angular', completed: true},
    {id: 1, title: 'Angular', descricao: 'Estudar serviços do angular', completed: false},
    {id: 2, title: 'Angular', descricao: 'Estudar pipes do angular', completed: false},
  ]

  protected completeds = [
    {id: 0, title: 'Angular', descricao: 'Estudar conceito de componentes', completed: true},
    {id: 0, title: 'Angular', descricao: 'Estudar conceito de diretivas', completed: true},
  ]

  protected tituloToDo = '';
  protected descricaoToDo = '';

  protected tituloInProgress = '';
  protected descricaoInProgress = '';

  protected tituloCompleted = '';
  protected descricaoCompleted = '';
  constructor() { }

  ngOnInit(): void {
  }

  protected toggle(todo: any) {
    todo.completed = !todo.completed
  }

  protected delete(todo: any) {
    this.todos = this.todos.filter(t => t.id !== todo.id)
  }

  protected add(title: string, descricao: string) {
    this.todos.push({
      id: this.todos.length,
      title,
      descricao,
      completed: false
    })

    this.tituloToDo = '';
    this.descricaoToDo = '';

    this.tituloInProgress = '';
    this.descricaoInProgress = '';

    this.tituloCompleted = '';
    this.descricaoCompleted = '';
  }
}
