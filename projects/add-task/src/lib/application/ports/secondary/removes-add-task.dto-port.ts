import { InjectionToken } from '@angular/core';

export const REMOVES_ADD_TASK_DTO = new InjectionToken<RemovesAddTaskDtoPort>('REMOVES_ADD_TASK_DTO');

export interface RemovesAddTaskDtoPort {
  remove(id: string): void;
}
