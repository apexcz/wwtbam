import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = () => (
    <div className="board-panel">
        <div className="life-lines">
            <div className="life-line">
                <span className="fifty-fifty">50:50</span>
            </div>
            <div className="life-line">
                <i className="phone-friend fa fa-phone"></i>
            </div>
            <div className="life-line">
                <i className="ask-audience fa fa-users"></i>
            </div>
        </div>

        <ul>
            <li>$1,000</li>
            <li>$900</li>
            <li>$800</li>
            <li>$700</li>
            <li>$600</li>

            <li>$500</li>
            <li>$400</li>
            <li>$300</li>
            <li>$200</li>
            <li>$100</li>

            <li>$50</li>
            <li>$40</li>
            <li>$30</li>
            <li>$20</li>
            <li>$10</li>
        </ul>
    </div>
);

export default ScoreBoard;
