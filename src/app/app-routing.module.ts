import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
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
