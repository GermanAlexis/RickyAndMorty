import { Injectable } from '@angular/core';
import {
  Dataresponse,
  ICharacter,
} from '@app/shared/interfaces/data.interface';
import { Apollo, gql } from 'apollo-angular';
import {
  BehaviorSubject,
  find,
  mergeMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs';
import { IEpisode } from '../shared/interfaces/data.interface';

const QUERY = gql`
  {
    characters {
      results {
        name
        id
        status
        image
        gender
        species
        episode {
          name
          id
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class DataServices {
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
          const { characters } = data;
          this.charactersSubject.next(characters.results);
        })
      )
      .subscribe();
  }

  public getDataPaginator(pagesNum: number): void {
    const QUERYBYPAGE = gql`
    {
      characters(page: ${pagesNum}) {
        results {
            name
            id
            status
            image
            gender
            species
            episode {
              name
              id
            }
        }
      }
    }
`;
    this.apollo
      .watchQuery<Dataresponse>({
        query: QUERYBYPAGE,
      })
      .valueChanges.pipe(
        take(1),
        withLatestFrom(this.charactersSubject$),
        tap(([data, characters]) => {
          characters = [...characters, ...data.data.characters.results];

          this.charactersSubject.next(characters);
        })
      )
      .subscribe();
  }

  getDetails(id: string): any {
    return this.charactersSubject$.pipe(
      mergeMap((characters: ICharacter[]) => characters),
      find((character: ICharacter) => character?.id === id)
    );
  }
}
