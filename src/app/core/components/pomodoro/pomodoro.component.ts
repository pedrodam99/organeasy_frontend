import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {

  private timerSubscription: Subscription | undefined;

  protected minutes: number = 0;
  protected seconds: number = 5;
  protected qntPomodoros: number = 1;
  protected isPaused: boolean = false;
  protected shortBreak: boolean = false;
  protected buttonLabel: string = 'Start';
  protected headerLabel: string = 'Pomodoro';

  constructor() { }

  ngOnInit(): void {
  }

  private resetTimerValues(): void {
    this.isPaused = true;
    this.buttonLabel = 'Start';

    if (this.shortBreak) {
      // Redefine os minutos e segundos para 5:00 (Short-break)
      this.minutes = 0;
      this.seconds = 3;
      this.headerLabel = 'Intervalo Curto';
    } else {
      // Redefine os minutos e segundos para 5:00 (Pomodoro)
      this.minutes = 0;
      this.seconds = 5;
      this.headerLabel = 'Pomodoro';
      this.qntPomodoros++
    }
  }

  protected startAndPause(): void {
    this.isPaused = !this.isPaused;
    this.isPaused ? this.buttonLabel = 'Pause' : this.buttonLabel = 'Start';

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    const timer$ = interval(1000);

    this.timerSubscription = timer$.pipe(
      takeWhile(() => this.minutes >= 0 || this.seconds >= 0)
    ).subscribe(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.shortBreak = !this.shortBreak;
          this.resetTimer();
        }
      }
    });
  }

  protected resetTimer(): void {
    // Cancela o temporizador se estiver em execução
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.resetTimerValues();
  };

}
