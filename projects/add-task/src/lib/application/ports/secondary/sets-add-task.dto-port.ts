import { InjectionToken } from '@angular/core';
import { AddTaskDTO } from './add-task.dto';

export const SETS_ADD_TASK_DTO = new InjectionToken<SetsAddTaskDtoPort>('SETS_ADD_TASK_DTO');

export interface SetsAddTaskDtoPort {
  set(addTask: Partial<AddTaskDTO>): void;
}
