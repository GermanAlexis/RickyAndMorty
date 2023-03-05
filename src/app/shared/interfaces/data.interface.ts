export interface IEpisode {
  name: string;
  episode: string;
}

export interface ICharacter {
  name: string;
  gender: string;
  id: string;
  image: string;
  species: string;
  status: string;
}

export interface ApiResponse<T> {
  results: T;
}

export interface Dataresponse {
  characters: ApiResponse<ICharacter[]>;
  episodes: ApiResponse<IEpisode[]>;
}
