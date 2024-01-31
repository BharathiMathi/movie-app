import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFromAPI } from 'api-service';
import { Movie, MovieDetails, MoviesList, StatusEnum } from 'types';
import { errorHandler } from 'utils';

type MovieState = {
  movies: Movie[];
  movieDetails: MovieDetails | null;
  status: StatusEnum;
  error: string | null;
  totalResults: number;
}

const initialState: MovieState = {
  movies: [],
  movieDetails: null,
  status: StatusEnum.IDLE,
  error: null,
  totalResults: 0,
};

 export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (params: string) => {
    try {
      const data = await fetchFromAPI(params);

      if (data.Search && data.totalResults) {
        return data as MoviesList;
      } else {
        throw new Error('Unexpected response structure');
      }
    } catch (error) {
      errorHandler(error);
    }
  }
);

 export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async (params: string) => {
    try {
      const data = await fetchFromAPI(params);

      if (data) {
        return data as MovieDetails;
      } else {
        throw new Error('Unexpected response structure');
      }
    } catch (error) {
      errorHandler(error);
    }
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = [...state.movies, ...action.payload];
    },
    resetMovies: (state) => {
      state.movies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = StatusEnum.LOADING;
        state.error = null;
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<MoviesList | undefined>) => {
          if (action.payload) {
            state.status = StatusEnum.SUCCEEDED;
            state.movies = state.movies.concat(action.payload.Search);
            state.totalResults = +action.payload.totalResults;
          }
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = StatusEnum.FAILED;
        state.error = action?.error?.message ? action.error.message : null;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = StatusEnum.LOADING;
        state.error = null;
      })
      .addCase(
        fetchMovieDetails.fulfilled,
        (state, action: PayloadAction<MovieDetails | undefined>) => {
          if (action.payload) {
            state.status = StatusEnum.SUCCEEDED;
            state.movieDetails = action.payload;
          }
        }
      )
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = StatusEnum.FAILED;
        state.error = action?.error?.message ? action.error.message : null;
      });
  },
});

export const { setMovies, resetMovies } = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
