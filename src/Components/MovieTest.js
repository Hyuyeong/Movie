import { useState, useEffect, Fragment } from 'react';
import styles from './MovieTest.module.css';

const MovieTest = props => {
  const [movies, setMovies] = useState([]);
  const [closeBtn, setCloseBtn] = useState(true);
  const [idCheck, setIdCheck] = useState();
  // const [handler, setHandler] = useState();

  // const data = props.onMovie;

  // console.log(data);

  const getMovies = async function () {
    try {
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&genre=action&limit=20`
      );

      const json = await res.json();
      setMovies(json.data.movies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const movie = movies.filter(function (movie) {
    return movie.id === +idCheck;
  });

  // console.log(movie[0].id);

  const movieDetail = function (movie) {
    return (
      <div className={styles.detail}>
        <img key={movie.id} src={movie.large_cover_image} alt={movie.title} />
        <div
          className={styles.description}
          style={{
            backgroundImage: `url(${movie.background_image_original})`,
            backgroundSize: 'cover',
            opacity: 0.9,
          }}
        >
          <h2>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Rating: {movie.rating}</p>
          <p>Runtime: {movie.runtime}</p>
          <p>Genres: {movie.genres.toString().replaceAll(',', ', ')}</p>
          <p>
            {movie.summary.length > 1078
              ? `${movie.summary.slice(0, 1077)}...`
              : movie.summary}
          </p>

          <button onClick={closeBtnHandler} className={styles.closeBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const closeBtnHandler = () => {
    setCloseBtn(prev => !prev);
  };

  const idCheckHandler = e => {
    setIdCheck(e.target.id);

    // console.log(e.target.id);

    setCloseBtn(true);
  };
  return (
    <Fragment>
      {movies.map(movie => (
        <div>
          <img
            onClick={idCheckHandler}
            src={movie.medium_cover_image}
            id={movie.id}
            alt={movie.title}
            key={movie.id}
          />
        </div>
      ))}
      {closeBtn && idCheck ? movieDetail(movie[0]) : null}
    </Fragment>
  );
};
export default MovieTest;
