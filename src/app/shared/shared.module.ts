import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeadersComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeadersComponent],
})
export class SharedModule {}
