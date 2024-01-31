import { configureStore, Store } from '@reduxjs/toolkit';
import { renderHook, act } from '@testing-library/react-hooks';
import {
  Provider,
  useDispatch as useDispatchUntyped,
  useSelector,
} from 'react-redux';
import {
  fetchMovies,
  store as MovieStore,
  movieReducer,
  RootState,
  AppDispatch,
  setMovies,
  resetMovies,
  fetchMovieDetails,
} from 'state';
import fetchMock from 'jest-fetch-mock';
import { Movie, MovieDetails, MoviesList, StatusEnum } from 'types';
import { PropsWithChildren } from 'react';

fetchMock.enableMocks();

const useDispatch = () => useDispatchUntyped<AppDispatch>();

describe('movie slice', () => {
  let store: Store;

  beforeEach(() => {
    store = MovieStore;
    fetchMock.resetMocks();
  });

  it('fetchMovies updates state correctly on fulfilled', async () => {
    const mockData: MoviesList = {
      Search: [
        {
          Title: 'Test Movie',
          Year: '2021',
          imdbID: 'tt1',
          Poster: 'https://example.com/poster1.jpg',
        },
      ],
      totalResults: '1',
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result } = renderHook(
      () => ({
        dispatch: useDispatch(),
        movies: useSelector<RootState, Movie[]>((state) => state.movie.movies),
      }),
      {
        wrapper: ({ children }: PropsWithChildren<{}>) => (
          <Provider store={store}>{children}</Provider>
        ),
      }
    );

    await act(async () => {
      await result.current.dispatch(fetchMovies('query'));
    });

    expect(result.current.movies).toEqual(mockData.Search);
  });

  it('fetchMovieDetails updates state correctly on fulfilled', async () => {
    const mockData: MovieDetails = {
      Title: 'Test Movie',
      Year: '2021',
      Poster: 'https://example.com/poster1.jpg',
      Actors: 'Blanca ',
      Director: 'Álex',
      Plot: 'In bustling downtown Madrid, a loud gunshot and two mysterious deaths trap a motley assortment of common urbanites in a decrepit central bar, while paranoia and suspicion force the terrified regulars to turn on each other.',
      Released: '24 Mar 2017',
      Runtime: '102 min',
      imdbRating: '6.3',
      Writer: 'Jorge',
      Genre: 'Horror, Thriller',
      Language: 'Spanish',
      Awards: '3 awards',
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result } = renderHook(
      () => ({
        dispatch: useDispatch(),
        movieDetails: useSelector<RootState, MovieDetails | null>(
          (state) => state.movie.movieDetails
        ),
      }),
      {
        wrapper: ({ children }: PropsWithChildren<{}>) => (
          <Provider store={store}>{children}</Provider>
        ),
      }
    );

    await act(async () => {
      await result.current.dispatch(fetchMovieDetails('tt1'));
    });

    expect(result.current.movieDetails).toEqual(mockData);
  });

  it('fetchMovies updates state correctly on pending', async () => {
    fetchMock.mockResponseOnce(() => new Promise(() => {}));

    const { result } = renderHook(
      () => ({
        dispatch: useDispatch(),
        status: useSelector<RootState, StatusEnum>(
          (state) => state.movie.status
        ),
      }),
      {
        wrapper: ({ children }: PropsWithChildren<{}>) => (
          <Provider store={store}>{children}</Provider>
        ),
      }
    );

    act(() => {
      result.current.dispatch(fetchMovies('query'));
    });

    expect(result.current.status).toEqual(StatusEnum.LOADING);
  });
});

describe('movieReducer', () => {
  const initialState = {
    movies: [],
    movieDetails: null,
    status: StatusEnum.IDLE,
    error: null,
    totalResults: 0,
  };

  it('should handle initial state', () => {
    expect(movieReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setMovies', () => {
    const movies: Movie[] = [
      { imdbID: '1', Poster: 'url', Title: 'Test Movie', Year: '2022' },
    ];
    const actual = movieReducer(initialState, setMovies(movies));
    expect(actual.movies).toEqual(movies);
  });

  it('should handle resetMovies', () => {
    const stateWithMovies = {
      ...initialState,
      movies: [
        { imdbID: '1', Poster: 'url', Title: 'Test Movie', Year: '2022' },
      ],
    };
    const actual = movieReducer(stateWithMovies, resetMovies());
    expect(actual.movies).toEqual([]);
  });
});
