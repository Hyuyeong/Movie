import MovieSeed from './MovieSeed';

const DocumentaryMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'documentary',
    sort: 'year',
  };

  return <MovieSeed onMovie={movie} />;
};
export default DocumentaryMovie;
