import {actionTypes} from '../actions/index';
export const successReducer = (state=true, action) => {
    switch(action.type) {
        case actionTypes.CORRECT_GUESS:
            return true
        default:
            return state;
    }
}

