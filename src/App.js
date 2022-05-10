import React, { useState } from 'react';

import Header from './Components/Layout/Header';
import Menu from './Components/Layout/Menu';

import Movies from './Components/Movies';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  // const [index, setIndex] = useState('0');

  // const handler = e => {
  //   setIndex(e.target.value);
  // };

  // console.log(index);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie/:id" element={<Detail />} /> */}
      </Routes>
    </Router>
  );
}

// <div>
//   <Movies />
//   {/* <select value={index} onChange={handler}>
//     <option value="xx">select</option>
//     <option value="1">Minute to Hour</option>
//     <option value="2"> Km to miles</option>
//   </select>

//   {index === '1' ? <MintoHour /> : null}
//   {index === '2' ? <KmToMile /> : null} */}
// </div>

/*
function App() {
  const [memuIsShown, setMenuIsShown] = useState(true);

  const showmenuHandler = () => {
    setMenuIsShown(false);
  };

  const hideMenuHandler = () => {
    setMenuIsShown(false);

    // console.log('clicked!!');
  };

  const [coffeeIsShown, setcoffeeIsShown] = useState(true);

  // const showcoffeeHandler = () => {
  //   setcoffeeIsShown(true);
  // };

  const hidecoffeeHandler = () => {
    setcoffeeIsShown(false);

    // console.log('clicked!!');
  };

  return (
    <div className="App">
      <Header
        onClose={hideMenuHandler}
        // onShow={showmenuHandler}
        // onCloseCoffee={hidecoffeeHandler}
        // onShowCoffee={showcoffeeHandler}
      />
      {memuIsShown || <Menu />}
      {coffeeIsShown || <CoffeeAtHome />}
       {setMenuIsShown && <Menu onClose={hideMenuHandler} />} }
    </div>
  );
}
*/
export default App;
