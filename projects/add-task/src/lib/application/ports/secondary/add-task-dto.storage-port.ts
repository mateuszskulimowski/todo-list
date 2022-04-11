import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTaskDTO } from './add-task.dto';

export const ADD_TASK_DTO_STORAGE = new InjectionToken<AddTaskDtoStoragePort>('ADD_TASK_DTO_STORAGE');

export interface AddTaskDtoStoragePort {
  next(item: Partial<AddTaskDTO | undefined>): void;
  asObservable(): Observable<AddTaskDTO>;
}
