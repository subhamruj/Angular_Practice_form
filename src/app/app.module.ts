import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentAppComponent } from './parent-app/parent-app.component';
import { ChildAppComponent } from './child-app/child-app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentAppComponent,
    ChildAppComponent,
    ParentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
