import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentAppComponent } from './parent-app/parent-app.component';
import { ChildAppComponent } from './child-app/child-app.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentAppComponent,
    ChildAppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
