import React, {Fragment} from 'react';

import logo from "../../who-wants-to-be-a-millionaire.svg";

import "./BannerIntro.css";

const BannerIntro = () => (
    <div className="banner-intro">
        <div className="banner-input">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="username"
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Enter Username"
                    />
                </div>
            </form>
        </div>
        <div className="banner-image">
            <div className="ray ray1 ray2 ray3 ray4 ray5 ray6 ray7 ray8 ray9">
                <img src={logo} className="ray_box App-logo" alt="logo" />
            </div>
        </div>
        <div className="banner-button">
            <button type="button" className="btn btn-light btn-lg btn-block">Start</button>
        </div>
    </div>
);

export default BannerIntro;
{/*<i className="font-awesome-home fa fa-home"></i>*/}
