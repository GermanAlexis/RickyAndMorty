export interface IEpisode {
  name: string;
  id: string;
}

export interface ICharacter {
  name: string;
  gender: string;
  id: string;
  image: string;
  species: string;
  status: string;
  episode: IEpisode[];
}

export interface ApiResponse<T> {
  results: T;
}

export interface Dataresponse {
  characters: ApiResponse<ICharacter[]>;
  episodes: ApiResponse<IEpisode[]>;
}
