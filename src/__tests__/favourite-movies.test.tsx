import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Movie } from 'types';
import { useFavourites } from 'hooks';
import { GUITexts } from 'config';
import FavouriteMovies from 'pages/favourite-movies';

jest.mock('hooks');

describe('FavouriteMovies', () => {
  const mockFavourites: Movie[] = [
    { imdbID: '1', Poster: 'url1', Title: 'Test Movie 1', Year: '2022' },
    { imdbID: '2', Poster: 'url2', Title: 'Test Movie 2', Year: '2022' },
  ];

  it('renders NoDataFound when there are no favourite movies', () => {
    (useFavourites as jest.Mock).mockReturnValue({
      favourites: [],
    });
    const { getByText } = render(<FavouriteMovies />);
    expect(getByText(GUITexts.NoFavourites)).toBeInTheDocument();
  });

  it('renders MovieCard for each favourite movie', () => {
    (useFavourites as jest.Mock).mockReturnValue({
      favourites: mockFavourites,
    });
    const { getAllByTestId } = render(
      <Router>
        <FavouriteMovies />
      </Router>
    );
    expect(getAllByTestId('movie-card').length).toBe(mockFavourites.length);
  });
});
