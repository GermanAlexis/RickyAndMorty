import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import {
  Character,
  IResponseCharacter,
  Info,
} from '../../shared/interfaces/character.interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  characters: Character[] = [];
  dataPaginator!: Info;
  pageIndex: number = 0;

  constructor(private charactersService: DashboardService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  async getCharacters(page?: number): Promise<void> {
    (await this.charactersService.getCharacters(page)).subscribe(
      (response: IResponseCharacter) => {
        this.characters = response.results;
        this.dataPaginator = response.info;
      }
    );
  }
}
