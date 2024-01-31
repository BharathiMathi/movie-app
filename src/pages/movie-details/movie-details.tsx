import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { FaAward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MovieDetails as MovieDetailsTypes } from 'types';
import Image from 'components/poster';
import { GUITexts } from 'config';

const {
  Year: MovieYear,
  Director: MovieDirector,
  Ratings,
  Cast,
  Released: ReleasedOn,
  Runtime,
  Back,
  Genre: MovieGenre,
  Writer: MovieWritter,
  Plot: MoviePlot,
  Language: MovieLanguage,
} = GUITexts;

type MovieDetailsProps = {
  movie: MovieDetailsTypes;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({
  movie: {
    Actors: actors,
    Awards,
    Director: director,
    Plot: plot,
    Poster,
    Released: released,
    Title,
    Runtime: Duration,
    Year: year,
    imdbRating,
    Writer: writer,
    Genre: genre,
    Language: language,
  },
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <IoIosArrowBack size={20} />
        {Back}
      </BackButton>

      <MovieWrapper>
        <MoviePosterImg url={Poster} altText={Title} />
        <MovieInfo>
          <MovieTitle>{Title}</MovieTitle>
          <MovieMiscInfo>
            <Year>
              {MovieYear} <Text>{year}</Text>
            </Year>
            <Rated>
              {Ratings} {imdbRating}
            </Rated>
            <Released>
              {ReleasedOn} <Text>{released}</Text>
            </Released>
          </MovieMiscInfo>
          <Genre>
            <b>{MovieGenre} </b>
            <span>{genre}</span>
          </Genre>
          <Writer>
            <b>{MovieWritter} </b>
            <Text>{writer}</Text>
          </Writer>
          <Actors>
            <b>{Cast} </b>
            <Text>{actors}</Text>
          </Actors>
          <Director>
            <b>{MovieDirector} </b>
            <Text>{director}</Text>
          </Director>
          <Plot>
            <b>{MoviePlot} </b>
            <Text>{plot}</Text>
          </Plot>
          <MovieAwards>
            <FaAward color='gold' />
            <p>{Awards}</p>
          </MovieAwards>
          <Language>
            <b>{MovieLanguage} </b>
            <span>{language}</span>
          </Language>
          <RunTime>
            <b>{Runtime} </b> <Text>{Duration}</Text>
          </RunTime>
        </MovieInfo>
      </MovieWrapper>
    </Container>
  );
};

export default MovieDetails;

const Container = styled.div`
  padding: 0 10%;
  @media (max-width: 640px) {
    padding: 0.5rem;
  }
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MoviePosterImg = styled(
  ({ url, altText, ...props }: { url: string; altText: string }) => (
    <Image url={url} altText={altText} {...props} />
  )
)`
  max-width: 300px;
  width: unset !important;
  margin: 0 40px;
  border: 4px solid #fff;
  @media (max-width: 640px) {
    width: 100% !important;
    max-width: unset;
    margin: 0 auto;
  }
`;

const MovieInfo = styled.div`
  color: #fff;
`;

const MovieTitle = styled.h3`
  font-size: 2rem;
  color: var(--yellow-color);
`;

const MovieMiscInfo = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 0;
  gap: 10px;
`;

const Year = styled.li`
  font-weight: 500;
`;

const Rated = styled.li`
  background-color: var(--yellow-color);
  padding: 0.4rem;
  margin: 0 0.4rem;
  border-radius: 3px;
  font-weight: 600;
`;

const Released = styled.li`
  font-size: 0.9rem;
`;

const Genre = styled.p`
  background-color: var(--light-dark-color);
  display: inline-block;
  padding: 0.5rem;
  border-radius: 3px;

  span {
    font-size: 15px;
  }
`;

const Writer = styled.p`
  margin: 1rem 0;
`;

const Actors = styled.p`
  margin: 1rem 0;
`;

const Director = styled.p``;

const Plot = styled.p`
  max-width: 500px;
  margin: 1rem 0;
`;

const MovieAwards = styled.p`
  margin: 1rem 0;
  display: flex;
  gap: 10px;

  p {
    font-size: 15px;
  }
`;

const Language = styled.p`
  color: var(--yellow-color);
  font-style: italic;

  span {
    font-size: 15px;
  }
`;

const RunTime = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  margin: 1rem 0 4rem 0;
`;

const Text = styled.span`
  font-weight: 400;
  color: #a0a0a0;
  line-height: 1.8em;
  font-size: 15px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: rgb(54 54 60);
  gap: 10px;
  padding: 10px 17px 10px 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  margin-bottom: 10px;
  background-image: linear-gradient(-180deg, #b9b2ae, #7f706d);

  @media (max-width: 640px) {
    position: fixed;
    left: -5px;
    background: none;
    font-weight: bold;
    top: 12px;
    z-index: 1000;
    gap: 0px;
    background-image: none;
  }
`;
