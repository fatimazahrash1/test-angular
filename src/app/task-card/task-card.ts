import { Component, input, output } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { TitleColorPipe } from '../pipe/title-color-pipe';

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  done?: boolean;
}

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, TitleColorPipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  task = input.required<Task>();
  completed = output<number>();

  markDone() {
    this.completed.emit(this.task().id);
  }
}