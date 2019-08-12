import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ text }) => {
    return (
        <button type="button" className="btn btn-success btn-lg">
            <Link to="/questions">{text}</Link>
        </button>
    );
}

export default LinkButton;
