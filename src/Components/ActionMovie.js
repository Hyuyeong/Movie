import MovieSeed from './MovieSeed';

const ActionMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'action',
    sort: 'year',
  };

  return <MovieSeed onMovie={movie} />;
};

export default ActionMovie;
