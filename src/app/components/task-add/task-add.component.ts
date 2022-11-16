import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { throwError } from 'rxjs';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  title: string;
  description: string;
  @Output() taskAdded = new EventEmitter<Task>();
  emptyError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    if(this.title && this.description){
      this.taskAdded.emit({
        title: this.title,
        description: this.description,
        hide: true
      })
    } else {
      alert('Title and its description should not be empty');
    }
    this.title = '';
    this.description = '';
  }

}
