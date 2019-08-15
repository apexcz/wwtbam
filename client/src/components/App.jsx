import React from 'react';
import { Route } from 'react-router-dom';

import { getCurrentLocation } from '../Logic';

import Header from "./Header/Header";
import BannerIntro from "./BannerIntro/BannerIntro";
import Question from "./views/Question";
import Questions from "./views/Questions";
import './App.css';
import ScoreBoard from './ScoreBoard/ScoreBoard';

function App({ match }) {
  return (
      <div className="App">
          <Route exact path='/' component={BannerIntro} />
          {
              getCurrentLocation() !== '/' ? <Header /> : null
          }
          <Route exact path='/questions' component={Questions} />
          <Route exact path='/question/:questionId' component={Question} />
          <Route exact path='/scoreboard' component={ScoreBoard} />
      </div>
  );
}

export default App;
