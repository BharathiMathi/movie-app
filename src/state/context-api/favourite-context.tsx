import React, { ReactNode, useReducer } from 'react';
import { Movie } from 'types';

type FavouritesState = Movie[];

const ADD = 'ADD';
const REMOVE = 'REMOVE';

type FavouritesAction =
  | { type: typeof ADD; movie: Movie }
  | { type: typeof REMOVE; imdbID: string };

type FavouritesProviderProps = {
  children: ReactNode;
};

type FavouritesContextType = {
  favourites: Movie[];
  addToFavourites: (movie: Movie) => void;
  removeFromFavourites: (imdbID: string) => void;
};

export const FavouritesContext = React.createContext<
  FavouritesContextType | undefined
>(undefined);

export const FavouritesProvider: React.FC<FavouritesProviderProps> = ({
  children,
}) => {
  const [favourites, dispatch] = useReducer(favouritesReducer, []);

  const addToFavourites = (movie: Movie) => {
    dispatch({ type: ADD, movie });
  };

  const removeFromFavourites = (imdbID: string) => {
    dispatch({ type: REMOVE, imdbID });
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

const favouritesReducer = (
  state: FavouritesState,
  action: FavouritesAction
) => {
  switch (action.type) {
    case ADD:
      return [...state, action.movie];
    case REMOVE:
      return state.filter((movie) => movie.imdbID !== action.imdbID);
    default:
      return state;
  }
};
