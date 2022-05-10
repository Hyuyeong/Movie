// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import styles from './MovieDetail.module.css';

const MovieDetail = props => {
  const [movie, setMovie] = useState([]);
  const [closeBtn, setCloseBtn] = useState(true);

  const closeBtnHandler = () => {
    setCloseBtn(prev => !prev);
    console.log('clicked');
  };

  console.log(closeBtn);
  const id = props.onCheck;
  console.log(id);

  const getMovie = async function () {
    try {
      const res = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );

      const json = await res.json();

      setMovie(json.data.movie);

      // console.log(json);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  console.log(movie.id);
  // const genres = movie.genres.map(g => g);
  // console.log(movie.genres[0]);
  // console.log(genres);

  if (closeBtn && id) {
    return (
      <div className={styles.detail}>
        <img src={movie.large_cover_image} alt={movie.title} />
        <div className={styles.description}>
          <h2>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Rating: {movie.rating}</p>
          <p>Runtime: {movie.runtime}</p>
          <p>Genres: {movie.genres}</p>
          <p>{movie.description_intro}</p>
          <button>button</button>
          <button onClick={closeBtnHandler}>Close</button>
        </div>
      </div>
    );
  }
};

export default MovieDetail;

// MovieDetail.propTypes = {
//   id: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
