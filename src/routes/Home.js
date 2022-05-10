import { Fragment, useState, useEffect } from 'react';
import Header from '../Components/Header';
// import styles from './Movies.module.css';

import Movie from '../Components/Movie';
import Main from '../Components/Main';
import MovieTopRating from '../Components/MovieTopRating';
import Movie1 from '../Components/Movie1';

import Row from '../Components/Row';

const Home = ({}) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async function () {
    try {
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      );

      const json = await res.json();

      setMovies(json.data.movies);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  // const data = movies.filter(function (movie) {
  //   return movie.id === 37384;
  // });

  // console.log(data);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Header />
          <Main />

          <Movie1 onMovies={movies} />

          {/* {movies.map(movie => (
            <MovieTopRating
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))} */}

          {/* {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))} */}
        </div>
      )}
    </div>
  );
};
export default Home;
