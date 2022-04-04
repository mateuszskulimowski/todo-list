import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AddTaskDTO } from '../../../application/ports/secondary/add-task.dto';
import {
  GETS_ALL_ADD_TASK_DTO,
  GetsAllAddTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-add-task.dto-port';

@Component({
  selector: 'lib-display-task',
  templateUrl: './display-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayTaskComponent {
  displayTask$: Observable<AddTaskDTO[]> = this._getsAllAddTaskDto.getAll();

  constructor(
    @Inject(GETS_ALL_ADD_TASK_DTO)
    private _getsAllAddTaskDto: GetsAllAddTaskDtoPort
  ) {}
}
