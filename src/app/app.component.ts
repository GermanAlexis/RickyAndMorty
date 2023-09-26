import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from './pages/services/progress-bar/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading$ = this.spinnerService.isLoading$;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  title = 'RickAndMorty';
  selectedLanguage = 'en';

  constructor(
    translateService: TranslateService,
    private spinnerService: SpinnerService
  ) {
    translateService.setDefaultLang(this.selectedLanguage);
    translateService.addLangs(['en', 'klingon']);
    translateService.use(this.selectedLanguage);
  }
}
