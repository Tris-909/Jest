import React from 'react';
import GuessWord from './components/GuessWords';
import Congrat from './components/Congrat';

const Jotto = () => {
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Jotto</h1>
            <Congrat success={false} />
            <GuessWord guessedWords={[
                {
                    guessedWord: 'train',
                    letterMatchCount: 3
                },
                {
                    guessedWord: 'agile',
                    letterMatchCount: 1
                },
                {
                    guessedWord: 'party',
                    letterMatchCount: 5
                }
            ]}/>
        </div>
    )
}

export default Jotto;