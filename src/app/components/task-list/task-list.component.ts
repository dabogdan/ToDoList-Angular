import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../models/task'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tasks = this.dataService.getTask();
  }

  addTask(task: Task): void {
    this.dataService.addTask(task);
  }

}
