import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from "./core/components/todo-list/todo-list.component";
import { PomodoroComponent } from "./core/components/pomodoro/pomodoro.component";

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'pomodoro', component: PomodoroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
