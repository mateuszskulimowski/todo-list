import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAddTaskService } from './firebase-add-task.service';
import { ADDS_ADD_TASK_DTO } from '../../../application/ports/secondary/adds-add-task.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseAddTaskService,
    { provide: ADDS_ADD_TASK_DTO, useExisting: FirebaseAddTaskService },
  ],
  exports: [],
})
export class FirebaseAddTaskServiceModule {}
