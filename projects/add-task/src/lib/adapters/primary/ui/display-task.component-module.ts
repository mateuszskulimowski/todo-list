import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTaskComponent } from './display-task.component';

@NgModule({ imports: [CommonModule],
  	declarations: [DisplayTaskComponent],
  	providers: [],
  	exports: [DisplayTaskComponent] })
export class DisplayTaskComponentModule {
}
