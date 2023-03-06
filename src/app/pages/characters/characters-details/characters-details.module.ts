import { HostListener, Inject, NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { CharactersDetailsRoutingModule } from './characters-details-routing.module';
import { CharactersDetailsComponent } from './characters-details.component';
import { CharactersCardModule } from '../characters-card/characters-card.module';
import { EpisodeModule } from '@app/pages/episodes/episode.module';

@NgModule({
  declarations: [CharactersDetailsComponent],
  imports: [
    CommonModule,
    CharactersDetailsRoutingModule,
    CharactersCardModule,
    EpisodeModule,
  ],
})
export class CharactersDetailsModule {}
