import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTaskDTO } from './add-task.dto';

export const GETS_ALL_ADD_TASK_DTO = new InjectionToken<GetsAllAddTaskDtoPort>(
  'GETS_ALL_ADD_TASK_DTO'
);

export interface GetsAllAddTaskDtoPort {
  getAll(criterion?: Partial<AddTaskDTO>): Observable<AddTaskDTO[]>;
}
