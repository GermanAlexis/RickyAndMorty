import { Component, Inject, OnInit, inject } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getInformationOfProfile();
  }

  async getInformationOfProfile() {
    console.log(this.data);
    (await this.dashboardService.getCharacterById(this.data)).subscribe(
      (response) => {
        console.table(response.episode);
      }
    );
  }
}
