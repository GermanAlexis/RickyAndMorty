import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeadersComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [HeadersComponent],
})
export class SharedModule {}
