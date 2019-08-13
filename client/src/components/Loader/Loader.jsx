import React, {Fragment} from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <Fragment>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </Fragment>
    );
}

export default Loader;
