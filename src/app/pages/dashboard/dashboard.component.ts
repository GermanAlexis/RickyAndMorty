import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import {
  Character,
  IResponseCharacter,
  Info,
} from '../../shared/interfaces/character.interfaces';
import { SpinnerService } from '../services/progress-bar/progress.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isLoading$ = this.spinnerService.isLoading$;
  characters: Character[] = [];
  dataPaginator!: Info;
  pageIndex: number = 0;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(
    private charactersService: DashboardService,
    private spinnerService: SpinnerService
  ) {}

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
