import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'profile', component: StudentProfileComponent},
  {path: 'login', component: RegistrationFormComponent},
  {path: 'all', component: StudentListComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
