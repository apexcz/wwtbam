import React from 'react';

import logo from "../../who-wants-to-be-a-millionaire.svg";

import "./BannerIntro.css";
import Link from "../Link/LinkButton";

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
        <div className="banner-image sun">
            <div className="ray ray1 ray2 ray3 ray4 ray5 ray6 ray7 ray8 ray9">
                <img src={logo} className="ray_box App-logo" alt="logo" />
            </div>
        </div>
        <div className="banner-button">
            <Link text="Start"/>
        </div>
    </div>
);

export default BannerIntro;
{/*<i className="font-awesome-home fa fa-home"></i>*/}
