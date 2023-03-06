import { Component, Input } from '@angular/core';
import { DataServices } from '../../../services/data-service.service';
import { IEpisode } from '../../../shared/interfaces/data.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent {
  @Input()
  episode!: IEpisode[];
}
