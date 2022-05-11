import MovieSeed from './MovieSeed';

const AnimationMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'animation',
    sort: 'year',
  };

  return <MovieSeed onMovie={movie} />;
};

export default AnimationMovie;
