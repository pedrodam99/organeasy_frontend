import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public passwordFormControl = new FormControl('', [Validators.required]);
  public alert: string = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  protected getEmailErrorMessage(): string {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';

  }

  private emailIsValid(email: string | null, password: string | null): boolean {
    if (email === 'pedrodam99@gmail.com' && password === 'admin') {
      return true;
    }
    if (email === 'gustavogomes@gmail.com' && password === 'admin') {
      return true;
    }
    return false;
  }

  protected login(): void {
    if (this.emailIsValid(this.emailFormControl.value, this.passwordFormControl.value)) {
      this.router.navigate(['/todolist']);
    } else {
      this.alert = 'Email ou senha inválidos';
      this.emailFormControl.reset();
      this.passwordFormControl.reset();
    }
  }
}
