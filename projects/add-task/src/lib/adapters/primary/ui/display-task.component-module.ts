import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTaskComponent } from './display-task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [DisplayTaskComponent],
  	providers: [],
  	exports: [DisplayTaskComponent] })
export class DisplayTaskComponentModule {
}
