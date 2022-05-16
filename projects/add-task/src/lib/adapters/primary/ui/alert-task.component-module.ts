import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertTaskComponent } from './alert-task.component';
import { DisplayTaskComponentModule } from './display-task.component-module';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [CommonModule, DisplayTaskComponentModule, AlertModule.forRoot()],
  declarations: [AlertTaskComponent],
  providers: [],
  exports: [AlertTaskComponent],
})
export class AlertTaskComponentModule {}
