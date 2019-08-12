import React from 'react';
import { Route } from 'react-router-dom';

import BannerIntro from "./BannerIntro/BannerIntro";
import Question from "./views/Question/Question";
import Questions from "./views/Questions/Questions";
import './App.css';

function App({ match }) {
  return (
      <div className="App">
          <Route exact path='/' component={BannerIntro} />
          <Route exact path='/question/:questionId' component={Question} />
          <Route exact path='/questions' component={Questions} />
      </div>
  );
}

export default App;
