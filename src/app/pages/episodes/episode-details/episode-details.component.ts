import { Component, Input } from '@angular/core';
import { DataServices } from '@app/services/data-service.service';
import { IEpisode } from '../../../shared/interfaces/data.interface';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent {
  @Input() episodes!: IEpisode[];
  characters: any;

  constructor(private dataServices: DataServices) {}

  showModal = false;

  openModal(id: string) {
    this.showModal = true;
    this.dataServices
      .getDetailsEpisode(id)
      .valueChanges.subscribe((response) => {
        this.characters = response.data.episodesByIds[0].characters;
      });
  }

  closeModal() {
    this.showModal = false;
  }
}
