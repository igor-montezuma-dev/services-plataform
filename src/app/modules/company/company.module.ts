import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { ComanyDashboardComponent } from './pages/comany-dashboard/comany-dashboard.component';


@NgModule({
  declarations: [
    CompanyComponent,
    ComanyDashboardComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
