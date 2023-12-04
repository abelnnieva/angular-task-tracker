import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/common/services/ui.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
    }

    const nexTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(nexTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
