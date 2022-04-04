import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AddsAddTaskDtoPort } from '../../../application/ports/secondary/adds-add-task.dto-port';
import { AddTaskDTO } from '../../../application/ports/secondary/add-task.dto';

@Injectable()
export class FirebaseAddTaskService implements AddsAddTaskDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(addTask: Partial<AddTaskDTO>): void {
    this._client.collection('add-tasks').add(addTask);
  }
}
