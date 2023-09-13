import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Character } from '../../shared/interfaces/character.interfaces';
import { SpinnerService } from '../services/progress-bar/progress.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isLoading$ = this.spinnerService.isLoading$;
  characters: Character[] = [];

  constructor(
    private charactersService: DashboardService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  async getCharacters(): Promise<void> {
    (await this.charactersService.getCharacters()).subscribe((response) => {
      this.characters = response.results;
    });
  }
}
