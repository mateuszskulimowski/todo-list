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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
