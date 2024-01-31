import MovieCard from 'pages/movie-list/movie-card';
import { MovieContainer } from 'pages/movie-list/movie-list';
import NoDataFound from 'components/no-data-found';
import { useFavourites } from 'hooks';
import { GUITexts } from 'config';
import { MdFavorite } from 'react-icons/md';

const FavouriteMovies = () => {
  const { favourites } = useFavourites();

  return (
    <>
      {favourites.length ? (
        <MovieContainer>
          {favourites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </MovieContainer>
      ) : (
        <NoDataFound
          infoText={GUITexts.NoFavourites}
          icon={<MdFavorite size={40} />}
        />
      )}
    </>
  );
};

export default FavouriteMovies;
