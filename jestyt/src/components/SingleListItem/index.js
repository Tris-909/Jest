import React from 'react';

const ListItem = ({ title, paragraph }) => {

    if (!title || !paragraph) {
        return null;
    }

    return( 
        <div data-test='single-listitem' className="border">
            <h2 data-test='title' className='title'>{title}</h2>
            <p data-test='paragraph'>{paragraph}</p>
        </div>
    );
}

export default ListItem;