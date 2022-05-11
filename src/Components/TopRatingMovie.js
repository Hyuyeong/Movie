import MovieSeed from './MovieSeed';

const TopRatingMovie = ({}) => {
  const movie = {
    rating: 8.5,
    genre: '',
    sort: 'year',
    category: 'Top Rating',
  };

  return <MovieSeed onMovie={movie} />;
};
export default TopRatingMovie;
