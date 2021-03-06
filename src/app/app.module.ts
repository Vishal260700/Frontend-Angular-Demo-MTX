import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Card
import {MatCardModule} from '@angular/material/card';
// List
import {MatListModule} from '@angular/material/list';
// button
import {MatButtonModule} from '@angular/material/button';
// modal
import {MatDialogModule} from '@angular/material/dialog';
// icon
import {MatIconModule} from '@angular/material/icon';
// form
import {MatFormFieldModule} from '@angular/material/form-field'; 
// option
import {MatSelectModule} from '@angular/material/select'; 
// grid list
import {MatGridListModule} from '@angular/material/grid-list'; 

// reactive form
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AddTechComponent } from './add-tech/add-tech.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ResultCompComponent } from './result-comp/result-comp.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    AddTechComponent,
    SearchBarComponent,
    AddUserComponent,
    ResultCompComponent,
    LoginComponent,
    DashboardComponent,
    WelcomeComponent,
    ErrorComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
