import MovieSeed from './MovieSeed';

const ThrillerMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'thriller',
    sort: 'year',
  };

  return <MovieSeed onMovie={movie} />;
};
export default ThrillerMovie;
