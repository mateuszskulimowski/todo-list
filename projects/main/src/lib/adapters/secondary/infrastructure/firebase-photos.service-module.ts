import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebasePhotosService } from './firebase-photos.service';

import { GETS_ALL_PHOTOS_DTO } from '../../../application/ports/secondary/gets-all-photos.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebasePhotosService,
    { provide: GETS_ALL_PHOTOS_DTO, useExisting: FirebasePhotosService },
  ],
  exports: [],
})
export class FirebasePhotosServiceModule {}
