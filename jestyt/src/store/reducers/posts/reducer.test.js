import {types} from '../../actions/types';
import postReducer from './reducer';

describe('Posts Reducer', () => {
    test("Should return default state", () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);    
    });

    test("Return newState when receive correct type", () => {
        const posts = [{
            title: 'Test1'
        },
        {
            title: 'Test2'
        },
        {
            title: 'Test3'
        }];
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
});