import { successReducer } from './successReducer';
import {actionTypes} from '../actions/index';

test("returns default initial state of `false` when no actions", () => {
    const newState = successReducer(false, {});
    expect(newState).toBe(false);
});

test("returns state of true upon receiving an action type of `CORRECT_GUESS`", () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});