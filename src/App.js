import React, { useState, useEffect } from 'react';

import styles from './App.module.css';

import Main from './Components/Main';
import Header from './Components/Header';
import RomanceMovie from './Components/RomanceMovie';
import ComedyMovie from './Components/ComedyMovie';
import FamilyMovie from './Components/FamilyMovie';
import DocumentaryMovie from './Components/DocumentaryMovie';
import ThrillerMovie from './Components/ThrillerMovie';
import HorrorMovie from './Components/HorrorMovie';
import TopRatingMovie from './Components/TopRatingMovie';
import ActionMovie from './Components/ActionMovie';
import AnimationMovie from './Components/AnimationMovie';

function App() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  const getMovieAPI = async function () {
    setError(null);
    try {
      const res = await fetch(`https://yts.mx/api/v2/list_movies.json?`);

      const json = await res.json();

      setLoading(json.status);
      // if (json.status !== 'ok') {
      //   throw new Error('Something went worng!!');
      // }
    } catch (error) {
      setError(error.message);
      // console.log(error);
    }
  };

  useEffect(() => {
    getMovieAPI();
  }, []);

  // console.log(movies);

  return (
    <div>
      {loading !== 'ok' ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div>
          <Header />
          <Main />
          <TopRatingMovie />
          <RomanceMovie />
          <ComedyMovie />
          <ActionMovie />
          <FamilyMovie />
          <DocumentaryMovie />
          <ThrillerMovie />
          <HorrorMovie />
          <AnimationMovie />
        </div>
      )}
      {loading !== 'ok' && error && (
        <p className={styles.errMessage}>{error}</p>
      )}
    </div>
  );
}

export default App;
