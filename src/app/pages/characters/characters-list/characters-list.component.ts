import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, HostListener, OnInit, Injectable } from '@angular/core';
import { DataServices } from '../../../services/data-service.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characters$ = this.dataServices.charactersSubject$;
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
    this.showbutton = (yOffSet || scrollTop) > 500;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown() {
    this.countPages++;
    this.dataServices.getDataPaginator(this.countPages);
  }
}
