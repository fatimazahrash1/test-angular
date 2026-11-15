import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { About } from './about/about';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,About,Header,Home,TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}