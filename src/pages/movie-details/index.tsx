import { useParams } from 'react-router-dom';
import ErrorPage from 'components/error-page';
import LoadingSpinner from 'components/loader';
import MovieDetailsComponent from './movie-details';
import NoDataFound from 'components/no-data-found';
import { GUITexts } from 'config';
import { StatusEnum } from 'types';
import { useMovieDetails } from 'hooks';
import { HiOutlineFilm } from 'react-icons/hi';

const Index = () => {
  const { id } = useParams<{ id: string }>();
  const { movieDetails, status, error } = useMovieDetails(id);

  if (status === StatusEnum.FAILED && error)
    return <ErrorPage message={error} />;

  return (
    <>
      {status === StatusEnum.LOADING && <LoadingSpinner />}
      {movieDetails ? (
        <MovieDetailsComponent movie={movieDetails} />
      ) : (
        <NoDataFound
          infoText={GUITexts.NoMovieFound}
          icon={<HiOutlineFilm size={40} />}
        />
      )}
    </>
  );
};

export default Index;
