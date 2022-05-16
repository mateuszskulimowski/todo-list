import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { DateComponentModule } from '@date';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebasePhotosServiceModule, PhotosComponentModule } from '@main';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertTaskComponentModule } from 'projects/add-task/src/lib/adapters/primary/ui/alert-task.component-module';
import { InMemoryAlertStorageModule } from '@add-task';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DateComponentModule,
    AngularFireModule.initializeApp(environment.firebase),
    PhotosComponentModule,
    FirebasePhotosServiceModule,
    ModalModule.forRoot(),
    AlertTaskComponentModule,
    InMemoryAlertStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
