import { Injectable } from '@angular/core';
import {
  Dataresponse,
  ICharacter,
} from '@app/shared/interfaces/data.interface';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';
import { IEpisode } from '../shared/interfaces/data.interface';

const QUERY = gql`
  {
    episodes {
      results {
        id
        name
      }
    }
    characters {
      results {
        name
        id
        status
        image
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private episodesSubject = new BehaviorSubject<IEpisode[]>([]);
  episodesSubject$ = this.episodesSubject.asObservable();

  private charactersSubject = new BehaviorSubject<ICharacter[]>([]);
  charactersSubject$ = this.charactersSubject.asObservable();

  constructor(private apollo: Apollo) {
    this.getData();
  }

  private getData(): void {
    this.apollo
      .watchQuery<Dataresponse>({
        query: QUERY,
      })
      .valueChanges.pipe(
        take(1),
        tap(({ data }) => {
          const { characters, episodes } = data;
          this.episodesSubject.next(episodes.results);
          this.charactersSubject.next(characters.results);
        })
      )
      .subscribe();
  }
}
