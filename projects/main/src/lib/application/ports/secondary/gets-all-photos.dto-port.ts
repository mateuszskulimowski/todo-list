import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosDTO } from './photos.dto';

export const GETS_ALL_PHOTOS_DTO = new InjectionToken<GetsAllPhotosDtoPort>(
  'GETS_ALL_PHOTOS_DTO'
);

export interface GetsAllPhotosDtoPort {
  getAll(criterion?: Partial<PhotosDTO>): Observable<PhotosDTO[]>;
}
