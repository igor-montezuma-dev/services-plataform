import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './components/signup-client/signup-client.component';

const routes: Routes = [
  {path: 'register-client', component: SignupClientComponent},
  { path: 'company', loadChildren: () => import('./modules/company/company.module').then(m => m.CompanyModule) },
  { path: 'client', loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
