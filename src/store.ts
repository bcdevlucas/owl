import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { default as thunk, ThunkAction as _ThunkAction } from 'redux-thunk';
// import { default as api, API } from './api';

import { registerReducer as listItemsReducer, ListItemsState } from './modules/list-items/reducer';

const api = null;

export interface ThunkExtra {
    api?: object;
}

export type Thunk<TResponse = void> = _ThunkAction<Promise<TResponse>, RootState, ThunkExtra>;
export type ThunkAction<TRequest, TResponse = void> = (args?: TRequest) => Thunk<TResponse>;

export interface RootState {
    sheriffs: SheriffModuleState;
}

const reducers = {
    dutyRoster: dutyRosterReducer
};

registerSheriffReducer(reducers);

const rootReducer = combineReducers(reducers);

let thisWindow: any = window;

const composeEnhancers = thisWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({ api })
    )
);

const store = createStore(rootReducer, enhancers);

/* export const initStore = async () => {
    // Wire up the Token change event to the store
    (api as Client).onTokenChanged.on(async (t) => {
        console.log('[token changed] dispatch updateUserToken and await...');
        await store.dispatch(updateUserToken(t));
        console.log('[token changed] dispatch getCurrentUser and await...');
        await store.dispatch(getCurrentUser());
        console.log('... done!');
    });

    // Request the initial token
    console.log('[init] dispatch getUserToken');
    await store.dispatch(getUserToken());
}; */

export default store;
