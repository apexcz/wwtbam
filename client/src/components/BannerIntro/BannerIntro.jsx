import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from "../../who-wants-to-be-a-millionaire.svg";

import { getQuestionPath, } from "../../Logic";
import "./BannerIntro.css";

const BannerIntro = ({ history }) => (
    <div className="banner-intro">
        <div className="banner-image sun">
            <div className="ray ray1 ray2 ray3 ray4 ray5 ray6 ray7 ray8 ray9">
                <img src={logo} className="ray_box App-logo" alt="logo" />
            </div>
        </div>
        <div className="banner-form">
            <form className="banner-input" onSubmit={() => history.push(getQuestionPath(1)) }>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="username"
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Enter Username"
                        required
                    />
                </div>
                <div className="banner-button">
                    <button className="btn btn-success btn-lg btn-block" type="submit">Start</button>
                </div>
            </form>
        </div>
    </div>
);

export default withRouter(BannerIntro);
