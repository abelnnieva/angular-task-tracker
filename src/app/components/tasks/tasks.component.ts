import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/common/services/tasks.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((value) => {
      this.tasks = value;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((item) => item.id !== task.id);
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }
}
