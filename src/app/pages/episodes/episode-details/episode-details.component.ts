import { Component, Input } from '@angular/core';
import { IEpisode } from '../../../shared/interfaces/data.interface';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent {
  @Input() episodes!: IEpisode[];
}
