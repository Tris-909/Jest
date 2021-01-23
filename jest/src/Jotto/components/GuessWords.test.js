import React from 'react';
import GuessWord from './GuessWords';
import {findByTestAttribute} from '../../test/Utiltests';
import {shallow} from 'enzyme';

const setup = (props={
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
}) => { 
    return shallow(<GuessWord {...props} />);
}

describe('If there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("render without errors", () => {
        const GuessWordComponent = findByTestAttribute(wrapper, 'guessword-component');
        expect(GuessWordComponent.length).toBe(1);
    });

    test("render instructions to guess a word", () => {
        const GuessWordInstruction = findByTestAttribute(wrapper, 'guessword-instruction');
        expect(GuessWordInstruction.text().length).not.toBe(0);
    });
});

describe('If there ARE words guessed', () => {
    let wrapper;
    const guessedWords = [
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
    ];
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });


    test("render without errors",() => {
        const component = findByTestAttribute(wrapper, 'guessword-component');
        expect(component.length).toBe(1);
    });

    test('renders "guessed words" section', () => {
        const guessedWordNode = findByTestAttribute(wrapper, 'guessed-words');
        expect(guessedWordNode.length).toBe(1);
    });

    test('correct number of guesswords', () => {
        const guessedWordNodes = findByTestAttribute(wrapper, 'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});