import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input } from '@angular/core';
import { DataServices } from '../../../services/data-service.service';
import { IEpisode } from '../../../shared/interfaces/data.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent {
  episodes$ = this.dataServices.episodesSubject$;
  showbutton: Boolean = false;
  countPages: number = 1;
  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private dataServices: DataServices
  ) {}

  @HostListener('window:scroll')
  onScrollWindows(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showbutton = (yOffSet || scrollTop) > 50;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown() {
    this.countPages++;
    this.dataServices.getDataPaginatorEpisodes(this.countPages);
  }
}
