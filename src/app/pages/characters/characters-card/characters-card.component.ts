import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICharacter } from '../../../shared/interfaces/data.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersCardComponent {
  @Input()
  character!: ICharacter;
}
