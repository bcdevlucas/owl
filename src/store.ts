import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { default as thunk } from 'redux-thunk';

import { listItemsReducer } from './modules/list-items/reducer'
import { IListItemsState } from './modules/list-items/state'

export interface RootState {
    listItems: IListItemsState;
}

const reducers = {
    listItems: listItemsReducer
}

const rootReducer = combineReducers(reducers);

let thisWindow: any = window;

const composeEnhancers = thisWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({})
    )
);

const store = createStore(rootReducer, enhancers);
export default store;
