import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_ADD_TASK_DTO,
  AddsAddTaskDtoPort,
} from '../../../application/ports/secondary/adds-add-task.dto-port';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  readonly task: FormGroup = new FormGroup({ task: new FormControl() });

  constructor(
    @Inject(ADDS_ADD_TASK_DTO) private _addsAddTaskDto: AddsAddTaskDtoPort
  ) {}

  onAddTaskSubmited(addTask: FormGroup): void {
    this._addsAddTaskDto.add({
      task: addTask.get('task')?.value,
    });
    this.task.reset();
  }
}
