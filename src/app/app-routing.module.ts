import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';

const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'reg', component: RegistrationFormComponent},
  {path: 'login', component: StudentLoginComponent},
  {path: 'show', component: StudentListComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
