import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertTaskComponent } from './alert-task.component';
import { DisplayTaskComponentModule } from './display-task.component-module';

@NgModule({
  imports: [CommonModule, DisplayTaskComponentModule],
  declarations: [AlertTaskComponent],
  providers: [],
  exports: [AlertTaskComponent],
})
export class AlertTaskComponentModule {}
