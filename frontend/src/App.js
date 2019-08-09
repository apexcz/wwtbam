import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from "./NavBar/NavBar";
import Questions from "./Questions/Questions";
import Question from "./Question/Question";
import Question2 from "./views/Question";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Route exact path='/' component={Questions}/>
                <Route exact path='/question/:questionId' component={Question}/>
                <Route exact path='/stage/:questionId' component={Question2}/>
            </div>
        );
    }
}
export default App;
