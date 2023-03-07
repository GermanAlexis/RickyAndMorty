import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersCardComponent } from './characters-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CharactersCardComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [CharactersCardComponent],
})
export class CharactersCardModule {}
