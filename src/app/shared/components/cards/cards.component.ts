import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() character!: Character;

  constructor(public dialog: MatDialog) {}

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ProfileComponent, {
      data: id,
    });

    dialogRef.close;
  }
}
