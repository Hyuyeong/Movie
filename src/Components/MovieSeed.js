import { useState, useEffect } from 'react';
import styles from './MovieSeed.module.css';

const MovieSeed = props => {
  const [idCheck, setIdCheck] = useState();
  const [handler, setHandler] = useState();
  const [closeBtn, setCloseBtn] = useState(true);

  const [movies, setMovies] = useState([]);

  const data = props.onMovie;

  // console.log(data);

  const getMovies = async function () {
    try {
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${data.rating}&sort_by=${data.sort}&genre=${data.genre}&limit=9`
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

  // console.log(movie);

  const closeBtnHandler = () => {
    setCloseBtn(prev => !prev);
  };

  const idCheckHandler = e => {
    setIdCheck(e.target.id);
    setCloseBtn(true);
    if (!movie[0]) return;
    setHandler(
      <div className={styles.detail}>
        <img src={movie[0].large_cover_image} alt={movie[0].title} />
        <div
          className={styles.description}
          style={{
            backgroundImage: `url(${movie[0].background_image_original})`,
            backgroundSize: 'cover',
            opacity: 0.9,
          }}
        >
          <h2>{movie[0].title}</h2>
          <p>Year: {movie[0].year}</p>
          <p>Rating: {movie[0].rating}</p>
          <p>Runtime: {movie[0].runtime}</p>
          <p>Genres: {movie[0].genres.toString().replaceAll(',', ', ')}</p>
          <p>{movie[0].summary}</p>

          {/* <button>button</button> */}

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

  // console.log(movie[0].id);

  return (
    <div className={styles.genre}>
      {data.category || data.genre}
      <ul className={styles.img}>
        {movies.map(movie => (
          <img
            onClick={idCheckHandler}
            src={movie.medium_cover_image}
            id={movie.id}
            alt={movie.title}
            key={movie.id}
          />
        ))}
      </ul>
      {closeBtn && handler}
    </div>
  );
};
export default MovieSeed;
