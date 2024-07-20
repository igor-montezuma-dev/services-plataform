import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { SignupCompanyComponent } from './components/signup-company/signup-company.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'cadastro-cliente', component: SignupClientComponent},
  {path: 'cadastro-empresa', component: SignupCompanyComponent},
  {path: 'login', component: LoginComponent},
  { path: 'company', loadChildren: () => import('./modules/company/company.module').then(m => m.CompanyModule) },
  { path: 'client', loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
