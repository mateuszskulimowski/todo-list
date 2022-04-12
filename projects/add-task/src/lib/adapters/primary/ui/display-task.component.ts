import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, takeLast } from 'rxjs';
import { AddTaskDTO } from '../../../application/ports/secondary/add-task.dto';
import {
  GETS_ALL_ADD_TASK_DTO,
  GetsAllAddTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-add-task.dto-port';
import {
  SETS_ADD_TASK_DTO,
  SetsAddTaskDtoPort,
} from '../../../application/ports/secondary/sets-add-task.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  REMOVES_ADD_TASK_DTO,
  RemovesAddTaskDtoPort,
} from '../../../application/ports/secondary/removes-add-task.dto-port';

@Component({
  selector: 'lib-display-task',
  templateUrl: './display-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayTaskComponent {
  displayTask$: Observable<AddTaskDTO[]> = this._getsAllAddTaskDto.getAll();
  readonly setTask: FormGroup = new FormGroup({ setTask: new FormControl() });

  constructor(
    @Inject(GETS_ALL_ADD_TASK_DTO)
    private _getsAllAddTaskDto: GetsAllAddTaskDtoPort,
    @Inject(SETS_ADD_TASK_DTO) private _setsAddTaskDto: SetsAddTaskDtoPort,
    @Inject(REMOVES_ADD_TASK_DTO)
    private _removesAddTaskDto: RemovesAddTaskDtoPort
  ) {}

  // onSetTaskCheckeded(setTask: FormGroup): void {
  //   this._setsAddTaskDto.set({});
  // }

  onItemClicked(setTask: any): void {
    if (setTask.isChecked === false) {
      this._setsAddTaskDto.set({
        id: setTask.id,
        isChecked: true,
      });
    } else {
      this._setsAddTaskDto.set({
        id: setTask.id,
        isChecked: false,
      });
    }
  }

  removeTask(taskId: string): void {
    this._removesAddTaskDto.remove(taskId);
  }
}
