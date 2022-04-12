import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTaskComponent } from './display-task.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [DisplayTaskComponent],
  providers: [],
  exports: [DisplayTaskComponent],
})
export class DisplayTaskComponentModule {}
