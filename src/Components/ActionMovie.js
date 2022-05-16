import Movie from './Movie';

const ActionMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'action',
    sort: 'year',
    limit: 20,
  };

  return <Movie onMovie={movie} />;
};

export default ActionMovie;
