import React from 'react';
import { Table } from 'react-bootstrap';

const GuessWord = ({guessedWords}) => {
    return(
        <div data-test='guessword-component'>
            <h3 style={{textAlign: 'center'}} data-test='guessword-instruction'>
                { guessedWords.length === 0 ? (
                    "Please Insert Your GuessWord !"
                ) : null }
            </h3>
            <Table striped bordered hover data-test='guessed-words'>
                <thead>
                    <tr>
                        <th>Guessed Words</th>
                        <th>Letter Match Count</th>
                    </tr>
                </thead>
                <tbody>
                    {guessedWords.map((guessWord, index) => {
                        return(
                            <tr key={index} data-test='guessed-word'>
                                <td>{guessWord.guessedWord}</td>
                                <td>{guessWord.letterMatchCount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default GuessWord;