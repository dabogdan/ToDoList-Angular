import { Injectable } from '@angular/core';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks: Task[];

  constructor() {
    this.tasks = [];
   }

   getTask(): Task[] {
    this.tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    return this.tasks;
   }

   addTask(task: Task):void {
    this.tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
   }

   removeTask(task: Task): void{
    this.tasks = this.tasks.filter(item => item.title !== task.title);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    window.location.reload();
   }
}
