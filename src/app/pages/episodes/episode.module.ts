import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeRoutingModule } from './episode/episode-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

@NgModule({
  declarations: [EpisodeComponent, EpisodeDetailsComponent],
  imports: [CommonModule, EpisodeRoutingModule, InfiniteScrollModule],
  exports: [EpisodeComponent, EpisodeDetailsComponent, EpisodeRoutingModule],
})
export class EpisodeModule {}
