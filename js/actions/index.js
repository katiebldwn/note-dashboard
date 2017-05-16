import React from 'react';
import ReactDOM from 'react-dom';
import Board from 'components/Board.js';
import 'css/App.css';

ReactDOM.render(
  <Board count={30} />,
  document.getElementById('react-container')
);
