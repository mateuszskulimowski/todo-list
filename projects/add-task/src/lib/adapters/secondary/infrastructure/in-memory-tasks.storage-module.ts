import { NgModule } from '@angular/core';
import { InMemoryTasksStorage } from './in-memory-tasks.storage';
import { ADD_TASK_DTO_STORAGE } from '../../../application/ports/secondary/add-task-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryTasksStorage, { provide: ADD_TASK_DTO_STORAGE, useExisting: InMemoryTasksStorage }],
  	exports: [] })
export class InMemoryTasksStorageModule {
}
