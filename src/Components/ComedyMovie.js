import Movie from './Movie';

const ComedyMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'comedy',
    sort: 'year',
    limit: 20,
  };

  return <Movie onMovie={movie} />;
};

export default ComedyMovie;
