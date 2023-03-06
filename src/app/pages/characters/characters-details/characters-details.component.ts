import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { DataServices } from '../../../services/data-service.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss'],
})
export class CharactersDetailsComponent implements OnInit {
  characterId!: string;
  character$!: Observable<any>;
  showbutton: Boolean = false;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private route: ActivatedRoute,
    private dataSvc: DataServices
  ) {
    this.route.params
      .pipe(
        take(1),
        tap(({ id }) => (this.character$ = this.dataSvc.getDetails(id)))
      )
      .subscribe();
  }

  @HostListener('window:scroll')
  onScrollWindows(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showbutton = (yOffSet || scrollTop) > 50;
    console.log('this.showbutton: ', this.showbutton);
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
  ngOnInit(): void {}
}
