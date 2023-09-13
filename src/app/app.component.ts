import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RickAndMorty';
  selectedLanguage = 'en';

  constructor(translateService: TranslateService) {
    translateService.setDefaultLang(this.selectedLanguage);
    translateService.addLangs(['en', 'klingon']);
    translateService.use(this.selectedLanguage);
  }
}
