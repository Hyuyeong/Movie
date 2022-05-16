import Movie from './Movie';

const AnimationMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'animation',
    sort: 'year',
    limit: 20,
  };

  return <Movie onMovie={movie} />;
};

export default AnimationMovie;
