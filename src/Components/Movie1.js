import { Fragment, useState } from 'react';
import styles from './Movie1.module.css';

const Movie1 = props => {
  const movies = props.onMovies;

  const [idCheck, setIdCheck] = useState();
  const [handler, setHandler] = useState();
  const [closeBtn, setCloseBtn] = useState(true);

  const movie = movies.filter(function (movie) {
    return movie.id === +idCheck;
  });

  console.log(movie);

  const closeBtnHandler = () => {
    setCloseBtn(prev => !prev);
  };

  const idCheckHandler = e => {
    setIdCheck(e.target.id);
    setCloseBtn(true);
    setHandler(
      <div className={styles.detail}>
        <img src={movie[0].large_cover_image} alt={movie[0].title} />
        <div className={styles.description}>
          <h2>{movie[0].title}</h2>
          <p>Year: {movie[0].year}</p>
          <p>Rating: {movie[0].rating}</p>
          <p>Runtime: {movie[0].runtime}</p>
          <p>Genres: {movie[0].genres.toString().replaceAll(',', ', ')}</p>
          <p>{movie[0].summary}</p>
          <button>button</button>
          <button onClick={closeBtnHandler}>Close</button>
        </div>
      </div>
    );
  };

  // console.log(movie[0].id);

  return (
    <div>
      <ul className={styles.img}>
        {movies.map(movie => (
          <img
            onClick={idCheckHandler}
            src={movie.medium_cover_image}
            id={movie.id}
            alt={movie.title}
          />
        ))}
      </ul>
      {closeBtn && handler}
    </div>
  );
};
export default Movie1;
