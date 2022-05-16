import Movie from './Movie';

const HorrorMovie = ({}) => {
  const movie = {
    rating: 8.0,
    genre: 'horror',
    sort: 'year',
  };

  return <Movie onMovie={movie} />;
};
export default HorrorMovie;
