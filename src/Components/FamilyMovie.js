import MovieSeed from './MovieSeed';
const FamilyMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'family',
    sort: 'year',
  };

  return <MovieSeed onMovie={movie} />;
};
export default FamilyMovie;
