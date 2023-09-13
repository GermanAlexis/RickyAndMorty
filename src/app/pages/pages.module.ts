import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material/material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class PagesModule {}
