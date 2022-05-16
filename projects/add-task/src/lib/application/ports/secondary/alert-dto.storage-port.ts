import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertDTO } from './alert.dto';

export const ALERT_DTO_STORAGE = new InjectionToken<AlertDtoStoragePort>('ALERT_DTO_STORAGE');

export interface AlertDtoStoragePort {
  next(item: Partial<AlertDTO | undefined>): void;
  asObservable(): Observable<AlertDTO>;
}
