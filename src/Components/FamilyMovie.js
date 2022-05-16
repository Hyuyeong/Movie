import Movie from './Movie';
const FamilyMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'family',
    sort: 'year',
    limit: 20,
  };

  return <Movie onMovie={movie} />;
};
export default FamilyMovie;
