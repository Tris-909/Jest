import React from 'react';

const Headline = ({ header, desc }) => {
    return(
        <>
        {header ? (
            <div data-test='headline-component'>
                <h1 data-test='header'>{header}</h1>
                <p data-test='desc'>
                    {desc}
                </p>
            </div>
        ) : null}
        </>
    );
}

export default Headline;