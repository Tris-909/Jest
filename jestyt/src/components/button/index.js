import React from 'react';

const Button = ({buttonText, emitEvent}) => {
    
    const onClickHandler = () => {
        if (emitEvent) {
            emitEvent();
        }
    }
    
    return(
        <button 
            data-test='component-button'
            onClick={() => onClickHandler()}
        >
            {buttonText}
        </button>
    );
}

export default Button;