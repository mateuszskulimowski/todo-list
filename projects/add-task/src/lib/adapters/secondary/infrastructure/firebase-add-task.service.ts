import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AddsAddTaskDtoPort } from '../../../application/ports/secondary/adds-add-task.dto-port';
import { AddTaskDTO } from '../../../application/ports/secondary/add-task.dto';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllAddTaskDtoPort } from '../../../application/ports/secondary/gets-all-add-task.dto-port';
import { filterByCriterion } from '@lowgular/shared';

import { SetsAddTaskDtoPort } from '../../../application/ports/secondary/sets-add-task.dto-port';

@Injectable()
export class FirebaseAddTaskService
  implements AddsAddTaskDtoPort, GetsAllAddTaskDtoPort, SetsAddTaskDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(addTask: Partial<AddTaskDTO>): void {
    this._client.collection('add-tasks').add(addTask);
  }

  getAll(criterion: Partial<AddTaskDTO>): Observable<AddTaskDTO[]> {
    return this._client
      .collection<AddTaskDTO>('add-tasks')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: AddTaskDTO[]) => filterByCriterion(data, criterion)));
  }

  set(addTask: Partial<AddTaskDTO>): void {
    this._client.doc('add-tasks/' + addTask.id).update(addTask);
  }
}
