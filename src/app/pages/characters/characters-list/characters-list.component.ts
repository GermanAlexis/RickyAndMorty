import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, HostListener, OnInit, Injectable } from '@angular/core';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characters$ = this.dataServices.charactersSubject$;
  episodes$ = this.dataServices.episodesSubject$;
  showbutton: Boolean = false;
  countPages: number = 0;
  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private dataServices: DataServiceService
  ) {}

  @HostListener('window:scroll')
  onScrollWindows(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showbutton = (yOffSet || scrollTop) > 500;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown() {
    this.countPages++;
    console.log('this.countPages: ', this.countPages);
    this.dataServices.getDataPaginator(this.countPages);
  }
}
