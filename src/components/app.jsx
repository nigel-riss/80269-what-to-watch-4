import React from 'react';
import {Main} from './main.jsx';


export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {filmName, filmGenre, releaseYear} = props;

  return <Main
    filmName={filmName}
    filmGenre={filmGenre}
    releaseYear={releaseYear}
  />;
};
