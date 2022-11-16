import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../../models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('task') task: Task;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
  }

  removeTask(task: Task){
    const response = confirm(`Are you sure you wish to delete task: ${task.title}?`);
    if (response) this.dataservice.removeTask(task);
  }

}
