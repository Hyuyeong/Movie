import Movie from './Movie';

const TopRatingMovie = ({}) => {
  const movie = {
    rating: 8.5,
    genre: '',
    sort: 'year',
    category: 'Top Rating',
    limit: 20,
  };

  return <Movie onMovie={movie} />;
};
export default TopRatingMovie;
