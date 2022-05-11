import MovieSeed from './MovieSeed';

const HorrorMovie = ({}) => {
  const movie = {
    rating: 8.0,
    genre: 'horror',
    sort: 'year',
  };

  return <MovieSeed onMovie={movie} />;
};
export default HorrorMovie;
