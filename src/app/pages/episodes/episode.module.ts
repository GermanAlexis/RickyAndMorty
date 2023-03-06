import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [EpisodeComponent],
  imports: [CommonModule],
  exports: [EpisodeComponent],
})
export class EpisodeModule {}
