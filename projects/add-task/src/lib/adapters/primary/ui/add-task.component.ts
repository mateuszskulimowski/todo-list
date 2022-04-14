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
import {
  REMOVES_ADD_TASK_DTO,
  RemovesAddTaskDtoPort,
} from '../../../application/ports/secondary/removes-add-task.dto-port';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  readonly task: FormGroup = new FormGroup({ task: new FormControl() });
  order = new Date().getTime();
  constructor(
    @Inject(ADDS_ADD_TASK_DTO) private _addsAddTaskDto: AddsAddTaskDtoPort,
    @Inject(REMOVES_ADD_TASK_DTO)
    private _removesAddTaskDto: RemovesAddTaskDtoPort
  ) {}

  onAddTaskSubmited(addTask: FormGroup): void {
    this._addsAddTaskDto.add({
      task: addTask.get('task')?.value,
      order: this.order,
    });
    this.task.reset();
  }
  cancelAnimationFrame(): void {
    this.task.reset();
  }
  orderUp() {
    this.order = this.order + 1;
    console.log(this.order);
  }
}
