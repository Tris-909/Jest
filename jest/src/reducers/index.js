import {combineReducers} from 'redux';
import {successReducer} from './successReducer';
import guessWordReducer from './guessedWord';

export default combineReducers({
    success: successReducer,
    guessWords: guessWordReducer
});