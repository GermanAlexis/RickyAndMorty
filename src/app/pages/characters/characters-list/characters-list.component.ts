import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  characters$ = this.dataServices.charactersSubject$;
  episodes$ = this.dataServices.episodesSubject$;
  constructor(private dataServices: DataServiceService) {}
}
