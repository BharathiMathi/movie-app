import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Movie } from 'types';
import { useFavourites } from 'hooks';
import Image from 'components/poster';
import { GUITexts } from 'config';
import { toast } from 'sonner';

const {
  RemoveFromFavouites,
  AddToFavourites,
  MovieAddedToFavourites,
  MovieRemovedFromFavourites,
} = GUITexts;

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = React.forwardRef<HTMLDivElement, MovieCardProps>(
  ({ movie }, ref) => {
    const { imdbID, Poster: url, Title, Year } = movie;

    const { favourites, addToFavourites, removeFromFavourites } =
      useFavourites();

    const isFavourite = favourites.some(
      (favourite) => favourite.imdbID === imdbID
    );

    const handleFavouriteClick = () => {
      if (isFavourite) {
        removeFromFavourites(imdbID);
        toast.success(MovieRemovedFromFavourites);
      } else {
        addToFavourites(movie);
        toast.success(MovieAddedToFavourites);
      }
    };

    return (
      <CardItem ref={ref} data-testid='movie-card'>
        <CardTop>
          <StyledLink to={`/${imdbID}`} data-testid='movie-link'>
            <Image url={url} altText={Title} />
          </StyledLink>
        </CardTop>
        <CardBottom>
          <CardInfo>
            <CardTitleWrapper>
              <MovieTitle>{Title}</MovieTitle>
              <HeartIcon
                onClick={handleFavouriteClick}
                title={isFavourite ? RemoveFromFavouites : AddToFavourites}
              >
                {isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
              </HeartIcon>
            </CardTitleWrapper>
            <MovieYear>{Year}</MovieYear>
          </CardInfo>
        </CardBottom>
      </CardItem>
    );
  }
);

export default MovieCard;

const CardItem = styled.div`
  background: #1a242f;
  transition: all 0.3s;

  padding: 5px;
  border-radius: 5px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s;
  }
`;

const CardTop = styled.div`
  cursor: pointer;
  height: 300px;

  @media (max-width: 640px) {
    height: 100%;
  }
`;

const CardBottom = styled.div`
  padding: 20px 10px;
`;

const CardInfo = styled.div`
  color: #ffffff;
`;

const MovieTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 1.4;
`;

const MovieYear = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const HeartIcon = styled.div`
  cursor: pointer;
  color: #ff0000;
  font-size: 22px;
`;

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
