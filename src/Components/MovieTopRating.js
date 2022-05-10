import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import styles from './MovieTopRating.module.css';
import Props from './Props';

function MovieTopRating({ id, coverImg, title, summary, genres }) {
  const [idCheck, setId] = useState();
  const [movie, setMovie] = useState();

  const idHandler = e => {
    e.preventDefault();

    setId(e.target.id);
  };

  const getMovie = async function () {
    try {
      const res = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${idCheck}`
      );

      const json = await res.json();

      setMovie(json.data.movie);

      // console.log(json);
    } catch (err) {
      // console.log(err);
    }
  };

  console.log(movie);
  useEffect(() => {
    getMovie();
  }, [idCheck]);

  return (
    <div>
      <li className={styles.img}>
        <img src={coverImg} alt={title} id={id} onClick={idHandler} />
        <span>{title}</span>
      </li>
      {<div className="styles.detail">{<MovieDetail onCheck={idCheck} />}</div>}
    </div>
  );
}

MovieTopRating.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieTopRating;
