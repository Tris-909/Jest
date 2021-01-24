import moxios from 'moxios';
import { testStore } from '../Utils/UtilsTest';
import { fetchPosts } from '../store/actions/index';

describe("fetchPosts Action", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectState = [{
            title: 'string',
            body: 'string'
        },
        {
            title: 'string',
            body: 'string'
        },
        {
            title: 'string',
            body: 'string'
        }];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectState
            });
        });

        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectState);
        });
    });
});