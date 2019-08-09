import React from 'react';
import { Route } from 'react-router-dom';

import { getCurrentLocation } from '../Logic';

import Header from "./Header/Header";
import BannerIntro from "./BannerIntro/BannerIntro";
import Question from "./views/Question";
import Questions from "./views/Questions";
import './App.css';

function App({ match }) {
  return (
      <div className="App">
          <Route exact path='/' component={BannerIntro} />
          {
              getCurrentLocation() !== '/' ? <Header /> : null
          }
          <Route exact path='/questions' component={Questions} />
          <Route exact path='/question/:questionId' component={Question} />
      </div>
  );
}

export default App;
