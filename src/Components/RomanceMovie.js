import Movie from './Movie';
const RomanceMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'romance',
    sort: 'year',
  };

  return <Movie onMovie={movie} />;
};
export default RomanceMovie;
