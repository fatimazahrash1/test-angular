import { Component } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { TitleColorPipe } from '../pipe/title-color-pipe';
@Component({
  selector: 'app-task-list',
  imports: [UpperCasePipe, DatePipe,TitleColorPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
tasks : { id: number; title: string; dueDate: string } []=[];
} 
