export type MoviesList = {
  Search: Movie[];
  totalResults: string;
};

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
};

export type MovieDetails = {
  Actors: string;
  Awards: string;
  Director: string;
  Plot: string;
  Poster: string;
  Released: string;
  Title: string;
  Runtime: string;
  Year: string;
  imdbRating: string;
  Writer: string;
  Genre: string;
  Language: string;
}

export enum StatusEnum  {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED= 'failed',
};