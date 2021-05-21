import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormComponent } from './form/form.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { APP_BASE_HREF } from '@angular/common';
import { IconsModule } from '@progress/kendo-angular-icons';
import { UsersService } from './shared/users.service';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { NotificationModule } from '@progress/kendo-angular-notification';




const bottomNavigationRoutes = [
  { path: '', component: FormComponent, text: 'Form', icon: 'track-changes-enable', pathMatch: 'full' },
  { path: 'table', component: GridComponent, text: 'Table', icon: 'crosstab' },
];


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    InputsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    DateInputsModule,
    ButtonsModule,
    NavigationModule,
    RouterModule.forRoot(bottomNavigationRoutes),
    IconsModule,
    HttpClientModule,
    GridModule,
    NotificationModule
  ],
  providers: [UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
