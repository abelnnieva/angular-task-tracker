import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/task';

const API_URL = 'http://localhost:5000/tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(API_URL);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${API_URL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
