import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeModule } from './pages/episodes/episode.module';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./pages/episodes/episode.module').then((m) => m.EpisodeModule),
  },
  {
    path: 'character-details/:id',
    loadChildren: () =>
      import(
        './pages/characters/characters-details/characters-details.module'
      ).then((m) => m.CharactersDetailsModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/characters/characters-list/characters-list.module').then(
        (m) => m.CharactersListModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
