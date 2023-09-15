import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { CardsComponent } from './components/cards/cards.component';
import { HeadersComponent } from './components/headers/headers.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardsComponent, HeadersComponent, PaginatorComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, RouterModule],
  exports: [CardsComponent, HeadersComponent, PaginatorComponent],
})
export class SharedModule {}
