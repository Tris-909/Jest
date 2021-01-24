import {storeFactory} from './test/Utiltests';
import {correctGuess} from './actions/index';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';


    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store =  storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful goals', () => {
                
        });

        test('updates state correctly for successful goals', () => {

        });
    });

    describe('some guessed words', () => {
        test('updates state correctly for unsucessful goals', () => {

        });

        test('updates state correctly for successful guess', () => {

        });
    });
});