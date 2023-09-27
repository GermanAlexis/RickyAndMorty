import { Component, Inject, OnInit, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/shared/interfaces/character.interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  character!: Character;
  numberCharacter: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getInformationOfProfile();
  }

  async getInformationOfProfile() {
    (await this.dashboardService.getCharacterById(this.data)).subscribe(
      (response: Character) => {
        if (response) {
          this.character = response;
          this.numberCharacter = response.episode.map(
            (episode) => episode.split('/')[5]
          );
        }
      }
    );
  }
}
