import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';


const init = () => {
  const settings = {
    name: `The Matrix`,
    genre: `Sci-Fi`,
    year: 1999,
  };

  ReactDOM.render(
      <App
        filmName={settings.name}
        filmGenre={settings.genre}
        releaseYear={settings.year}
      />,
      document.querySelector(`#root`)
  );
};

init();
