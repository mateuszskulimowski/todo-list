import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { map, mapTo, Observable, takeLast } from 'rxjs';
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
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-display-task',
  templateUrl: './display-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayTaskComponent {
  displayTask$: Observable<AddTaskDTO[]> = this._getsAllAddTaskDto
    .getAll()
    .pipe(map((task: AddTaskDTO[]) => task.sort((a, b) => b.order - a.order)));
  order$: Observable<number> = this.displayTask$.pipe(
    map((taskList) => {
      return taskList.filter((task) => task.isChecked).length;
    })
  );
  readonly setTask: FormGroup = new FormGroup({ setTask: new FormControl() });
  modalRef?: BsModalRef;

  deleteTaskAlert = false;
  completeTaskAlert = false;

  constructor(
    private modalService: BsModalService,
    @Inject(GETS_ALL_ADD_TASK_DTO)
    private _getsAllAddTaskDto: GetsAllAddTaskDtoPort,
    @Inject(SETS_ADD_TASK_DTO) private _setsAddTaskDto: SetsAddTaskDtoPort,
    @Inject(REMOVES_ADD_TASK_DTO)
    private _removesAddTaskDto: RemovesAddTaskDtoPort,
    private router: Router
  ) {}

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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  showDeleteTask() {
    this.deleteTaskAlert = true;
    this.completeTaskAlert = false;
  }

  showCompleteTask(TaskChecked: boolean) {
    this.deleteTaskAlert = false;
    this.completeTaskAlert = true;
  }
}
