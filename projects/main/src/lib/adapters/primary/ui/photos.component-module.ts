import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PhotosComponent],
  providers: [],
  exports: [PhotosComponent],
})
export class PhotosComponentModule {}
