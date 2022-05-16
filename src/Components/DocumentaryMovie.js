import Movie from './Movie';

const DocumentaryMovie = () => {
  const movie = {
    rating: 8.0,
    genre: 'documentary',
    sort: 'year',
    limit: 20,
  };

  return <Movie onMovie={movie} />;
};
export default DocumentaryMovie;
