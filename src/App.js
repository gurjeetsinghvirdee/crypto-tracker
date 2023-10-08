import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import Homepage from './pages/HomePage';
import { makeStyles } from '@material-ui/core';

function App() {

  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor: '#011936',
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/coins/:id' element={<CoinPage />}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;