import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AnotacoesComponent } from './components/anotacoes/anotacoes.component';
import { ButtonComponent } from '../shared/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    TodoListComponent,
    PomodoroComponent,
    SidebarComponent,
    HomepageComponent,
    AnotacoesComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ButtonComponent,
    NavbarComponent,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  exports: [HomepageComponent
  ]
})
export class CoreModule { }
