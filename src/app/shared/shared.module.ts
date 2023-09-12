import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { CardsComponent } from './components/cards/cards.component';
import { HeadersComponent } from './components/headers/headers.component';

@NgModule({
  declarations: [CardsComponent, HeadersComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CardsComponent, HeadersComponent],
})
export class SharedModule {}
