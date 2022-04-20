import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTaskComponent } from './display-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule,
  ],
  declarations: [DisplayTaskComponent],
  providers: [],
  exports: [DisplayTaskComponent],
})
export class DisplayTaskComponentModule {}
