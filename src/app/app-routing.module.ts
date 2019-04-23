import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildAppComponent } from './child-app/child-app.component';
import { ParentAppComponent } from './parent-app/parent-app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { AppComponent } from './app.component';
import { StudentviewComponent } from './studentview/studentview.component';

const routes: Routes = [
  {path:"",component:ParentAppComponent},
  {path:"child-app",component:ChildAppComponent},
  {path:"parent-app",component:ParentAppComponent},
  {path:"parent-form",component:ParentFormComponent},
  {path:"studentview",component:StudentviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
