import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInfiniteScroll, useMovies } from 'hooks';
import ErrorPage from 'components/error-page';
import NoDataFound from 'components/no-data-found';
import { Movie, StatusEnum } from 'types';
import MovieCard from './movie-card';
import { GUITexts } from 'config';
import { HiOutlineFilm } from 'react-icons/hi';
import { FaSpinner } from 'react-icons/fa';

const { StartExploringMovies, NoMovieFound } = GUITexts;

type MovieListProps = {
  searchText: string;
};

const MovieList: React.FC<MovieListProps> = ({ searchText }) => {
  const { movies, status, error, totalResults, pageNo, setPageNo } =
    useMovies(searchText);

  const lastMovieElementRef = useInfiniteScroll({
    status,
    totalPages: Math.ceil(totalResults / 10),
    pageNo,
    setPageNo,
  });

  const renderMovieCard = (movie: Movie, index: number) => {
    return (
      <MemoizedMovieCard
        ref={movies.length === index + 1 ? lastMovieElementRef : null}
        key={movie.imdbID}
        movie={movie}
      />
    );
  };

  if (error) return <ErrorPage message={error} />;
  return (
    <>
      {movies.length ? (
        <>
          <MovieContainer>{movies.map(renderMovieCard)}</MovieContainer>
          {status === StatusEnum.LOADING && (
            <SpinnerWrapper>
              <SpinnerStyled />
            </SpinnerWrapper>
          )}
        </>
      ) : (
        <NoDataFound
          icon={<HiOutlineFilm size={50} />}
          infoText={searchText ? NoMovieFound : StartExploringMovies}
        />
      )}
    </>
  );
};

const MemoizedMovieCard = memo(MovieCard);

export default MovieList;

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 15px;
  justify-content: center;
  padding: 1.5rem 10%;
  @media (max-width: 640px) {
    padding: 1rem 0 4rem 0;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerStyled = styled(FaSpinner)`
  animation: ${spin} 2s linear infinite;
  font-size: 40px;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  @media (max-width: 640px) {
    margin-bottom: 4rem;
  }
`;
