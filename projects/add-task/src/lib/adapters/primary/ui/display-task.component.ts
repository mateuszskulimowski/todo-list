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
import {
  AlertDtoStoragePort,
  ALERT_DTO_STORAGE,
} from '../../../application/ports/secondary/alert-dto.storage-port';
import {
  AddTaskDtoStoragePort,
  ADD_TASK_DTO_STORAGE,
} from '../../../application/ports/secondary/add-task-dto.storage-port';
// import { transition } from '@angular/animations';

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
  // confirmDelete$: Observable<AddTaskDTO> =
  //   this._getTaskFromMemoryStorage.asObservable();
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
    private router: Router,
    @Inject(ADD_TASK_DTO_STORAGE)
    private _getTaskFromMemoryStorage: AddTaskDtoStoragePort,
    @Inject(ALERT_DTO_STORAGE) private _alertDtoStorage: AlertDtoStoragePort
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
  goHome(displayTask: AddTaskDTO[]): void {
    if (displayTask.length == 1) {
      this.router.navigate(['/']);
      console.log('dellete');
    }
    console.log(displayTask.length);
  }
  async confirm(id: string): Promise<void> {
    this._alertDtoStorage.next({ alertId: id });
    await delay(4000);
    this._alertDtoStorage.next(undefined);
  }
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
