import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllPhotosDtoPort } from '../../../application/ports/secondary/gets-all-photos.dto-port';
import { PhotosDTO } from '../../../application/ports/secondary/photos.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebasePhotosService implements GetsAllPhotosDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<PhotosDTO>): Observable<PhotosDTO[]> {
    return this._client
      .collection<PhotosDTO>('image')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: PhotosDTO[]) => filterByCriterion(data, criterion)));
  }
}
