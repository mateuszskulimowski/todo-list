import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AddTaskDTO } from '../../../application/ports/secondary/add-task.dto';
import { AddTaskDtoStoragePort } from '../../../application/ports/secondary/add-task-dto.storage-port';

@Injectable()
export class InMemoryTasksStorage
  extends ReplaySubject<AddTaskDTO>
  implements AddTaskDtoStoragePort {}
