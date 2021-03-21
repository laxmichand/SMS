import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from "./aboutus/aboutus.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'student', component: StudentComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'student-view', component: StudentViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'enrollment', component: EnrollmentComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'feecode', component: FeecodeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'fee', component: FeeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'fee-view', component: FeeViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'fee/:id', component: FeeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'marks', component: MarksComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'marks-view', component: MarksViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'marks/:id', component: MarksComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'markscode', component: MarkscodeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'voucher', component: VoucherComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'assignments', component: AssignmentsComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'assignments-view', component: AssignmentsViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'homework', component: HomeworkComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'homework-view', component: HomeworkViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'tutorials', component: TutorialsComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'tutorials-view', component: TutorialsViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'classes', component: ClassesComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'classes-view', component: ClassesViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'salarycode', component: SalaryCodeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'salary/:id', component: SalaryComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  // { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService] },
  // { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
