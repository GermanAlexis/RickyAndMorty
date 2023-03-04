export interface IEpisode {
  name: string;
  episode: string;
}

export interface ICharacter {
  name: string;
  id: string;
  status: string;
  image: string;
}

export interface ApiResponse<T> {
  results: T;
}

export interface Dataresponse {
  characters: ApiResponse<ICharacter[]>;
  episodes: ApiResponse<IEpisode[]>;
}
