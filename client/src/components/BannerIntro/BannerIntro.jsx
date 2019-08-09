import React from 'react';

import Logo from '../Logo/Logo';
import "./BannerIntro.css";

const BannerIntro = () => (
    <div className="App-header">
        <div className="sun">
            <div className="ray ray1 ray2 ray3 ray4 ray5 ray6 ray7 ray8 ray9">
                <Logo />
            </div>
        </div>
        {/*<i className="font-awesome-home fa fa-home"></i>*/}
    </div>
);

export default BannerIntro;
