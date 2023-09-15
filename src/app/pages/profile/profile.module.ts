import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material/material.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class ProfileModule {}
