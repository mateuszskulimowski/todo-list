import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAddTaskService } from './firebase-add-task.service';
import { ADDS_ADD_TASK_DTO } from '../../../application/ports/secondary/adds-add-task.dto-port';

import { GETS_ALL_ADD_TASK_DTO } from '../../../application/ports/secondary/gets-all-add-task.dto-port';

import { SETS_ADD_TASK_DTO } from '../../../application/ports/secondary/sets-add-task.dto-port';

import { REMOVES_ADD_TASK_DTO } from '../../../application/ports/secondary/removes-add-task.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseAddTaskService,
    { provide: ADDS_ADD_TASK_DTO, useExisting: FirebaseAddTaskService },
    { provide: GETS_ALL_ADD_TASK_DTO, useExisting: FirebaseAddTaskService },
    { provide: SETS_ADD_TASK_DTO, useExisting: FirebaseAddTaskService },
    { provide: REMOVES_ADD_TASK_DTO, useExisting: FirebaseAddTaskService },
  ],
  exports: [],
})
export class FirebaseAddTaskServiceModule {}
