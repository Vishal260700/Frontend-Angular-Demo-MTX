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
    ErrorComponent
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
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
