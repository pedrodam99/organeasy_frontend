import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from "./core/components/todo-list/todo-list.component";
import { PomodoroComponent } from "./core/components/pomodoro/pomodoro.component";
import { AnotacoesComponent } from "./core/components/anotacoes/anotacoes.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'todolist', component: TodoListComponent },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: 'anotacoes', component: AnotacoesComponent },
  { path: 'metricas', component: PomodoroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
