import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Character } from '../../shared/interfaces/character.interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  characters: Character[] = [];

  constructor(private charactersService: DashboardService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  async getCharacters(): Promise<void> {
    (await this.charactersService.getCharacters()).subscribe((response) => {
      this.characters = response.results;
    });
  }
}
