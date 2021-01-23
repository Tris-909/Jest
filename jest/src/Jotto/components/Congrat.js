import React from 'react';
import { Alert } from 'react-bootstrap';

const Congrat = ({ success }) => {
    return(
        <div data-test='congrat-component'>
            {
                success ? (
                    <Alert data-test='congrat-component-text' variant='success'>
                        Congratulations! You guessed the word !
                    </Alert>
                ) : null
            }
        </div>
    );
}

export default Congrat;