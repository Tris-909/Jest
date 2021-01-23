import React from 'react';

const Congrat = ({ success }) => {
    return(
        <div data-test='congrat-component'>
            {
                success ? "Congratulations! You guessed the word !" : ""
            }
        </div>
    )
}

export default Congrat;