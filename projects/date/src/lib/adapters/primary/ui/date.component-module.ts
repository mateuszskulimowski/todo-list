import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateComponent } from './date.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [DateComponent],
  providers: [DatePipe],
  exports: [DateComponent],
  bootstrap: [DateComponent],
})
export class DateComponentModule {}
