import { InjectionToken } from '@angular/core';
import { AddTaskDTO } from './add-task.dto';

export const ADDS_ADD_TASK_DTO = new InjectionToken<AddsAddTaskDtoPort>('ADDS_ADD_TASK_DTO');

export interface AddsAddTaskDtoPort {
  add(addTask: Partial<AddTaskDTO>): void;
}
