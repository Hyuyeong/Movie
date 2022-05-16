import Movie from './Movie';

const ThrillerMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'thriller',
    sort: 'year',
    limit: 20,
  };

  return <Movie onMovie={movie} />;
};
export default ThrillerMovie;
