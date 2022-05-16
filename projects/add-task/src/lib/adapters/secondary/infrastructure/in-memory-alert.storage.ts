import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AlertDTO } from '../../../application/ports/secondary/alert.dto';
import { AlertDtoStoragePort } from '../../../application/ports/secondary/alert-dto.storage-port';

@Injectable()
export class InMemoryAlertStorage
  extends ReplaySubject<AlertDTO>
  implements AlertDtoStoragePort {}
