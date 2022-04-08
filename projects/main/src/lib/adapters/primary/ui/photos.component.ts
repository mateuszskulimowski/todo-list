import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosDTO } from '../../../application/ports/secondary/photos.dto';
import {
  GETS_ALL_PHOTOS_DTO,
  GetsAllPhotosDtoPort,
} from '../../../application/ports/secondary/gets-all-photos.dto-port';

@Component({
  selector: 'lib-photos',
  templateUrl: './photos.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosComponent {
  photos$: Observable<PhotosDTO[]> = this._getsAllPhotosDto.getAll();

  constructor(
    @Inject(GETS_ALL_PHOTOS_DTO) private _getsAllPhotosDto: GetsAllPhotosDtoPort
  ) {}
}
