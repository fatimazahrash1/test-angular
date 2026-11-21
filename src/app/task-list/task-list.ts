import { Component, signal, computed } from '@angular/core';
import { TaskCard, Task } from '../task-card/task-card'; // adapte le chemin selon ton dossier

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = signal<Task[]>([]);
  count = computed(() => this.tasks().length);
  remainingCount = computed(() => this.tasks().filter(t => !t.done).length);

  private nextId = 1;

  addTask() {
    const id = this.nextId++;
    const newTask: Task = {
      id,
      title: `Tâche ${id}`,
      dueDate: new Date().toISOString(),
      done: false,
    };
    this.tasks.update((items) => [...items, newTask]);
  }

  onCompleted(taskId: number) {
    this.tasks.update((items) =>
      items.map((item) =>
        item.id === taskId ? { ...item, done: !item.done } : item
      )
    );
  }

  clearTasks() {
    this.tasks.set([]);
  }
}