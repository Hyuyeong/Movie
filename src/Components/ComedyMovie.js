import MovieSeed from './MovieSeed';

const ComedyMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'comedy',
    sort: 'year',
  };

  return <MovieSeed onMovie={movie} />;
};

export default ComedyMovie;
