import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'sonner';
import { GUITexts } from 'config';
import MovieCard from 'pages/movie-list/movie-card';
import { Movie } from 'types';
import { FavouritesProvider } from 'state';
import { useFavourites } from 'hooks';
import { PropsWithChildren } from 'react';

jest.mock('hooks', () => ({
  useFavourites: jest.fn(),
  FavouritesProvider: ({ children }: PropsWithChildren<{}>) => (
    <div>{children}</div>
  ),
}));

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe('MovieCard ', () => {
  it('renders correctly, displays the movie title and year, checks the movie details page link  and adds and removes a movie from favourites ', async () => {
    const movie: Movie = {
      imdbID: '1',
      Poster: 'url',
      Title: 'Test Movie',
      Year: '2022',
    };
    const favourites: Movie[] = [];
    const addToFavourites = jest.fn();
    const removeFromFavourites = jest.fn();

    (useFavourites as jest.Mock).mockReturnValue({
      favourites,
      addToFavourites,
      removeFromFavourites,
    });

    const { container, getByTitle, getByTestId } = render(
      <FavouritesProvider>
        <Router>
          <MovieCard movie={movie} />
        </Router>
      </FavouritesProvider>
    );

    expect(container.firstChild).toMatchSnapshot();

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();

    expect(getByTestId('movie-link').getAttribute('href')).toBe(
      `/${movie.imdbID}`
    );

    fireEvent.click(getByTitle(GUITexts.AddToFavourites));
    expect(addToFavourites).toHaveBeenCalledWith(movie);
    expect(toast.success).toHaveBeenCalledWith(GUITexts.MovieAddedToFavourites);

    (useFavourites as jest.Mock).mockReturnValue({
      favourites: [movie],
      addToFavourites,
      removeFromFavourites,
    });

    // Re-render the component with the updated mock
    const { getByTitle: getByTitleAfterAddingToFavourites } = render(
      <FavouritesProvider>
        <Router>
          <MovieCard movie={movie} />
        </Router>
      </FavouritesProvider>
    );

    const removeButton = await screen.findByTitle(GUITexts.RemoveFromFavouites);
    fireEvent.click(removeButton);
    expect(removeFromFavourites).toHaveBeenCalledWith(movie.imdbID);
    expect(toast.success).toHaveBeenCalledWith(
      GUITexts.MovieRemovedFromFavourites
    );
  });
});
