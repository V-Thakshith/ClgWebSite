import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SisComponent } from './components/sis/sis.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path:'sis',component: SisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
