import MovieSeed from './MovieSeed';
const RomanceMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'romance',
    sort: 'year',
  };

  return <MovieSeed onMovie={movie} />;
};
export default RomanceMovie;
