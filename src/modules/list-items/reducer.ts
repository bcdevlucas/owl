import { Reducer } from 'redux';

import * as types from './types';
import { ListItemActions } from './actions';
import { IListItemsState, initialListItemsState } from './state';

export const listItemsReducer: Reducer<
  IListItemsState,
  ListItemActions
> = (state = initialListItemsState, action) => {
  switch (action.type) {
    case types.GET_ITEMS: {
      return {
        ...state,
        // loading: true,
      };
    }
    case types.LOAD_ITEMS: {
      return {
        ...state,
        items: action.items,
        // loading: false,
      };
    }
    case types.ADD_ITEM: {
      return {
        ...state,
        // posting: true,
        items: state.items.concat(
          action.item
        ),
      };
    }
    case types.REMOVE_ITEM: {
      return {
        ...state
      };
    }
    case types.REORDER_ITEM: {
      return {
        ...state
      };
    }
    default:
      // @ts-ignore
      neverReached(action); // when a new action is created, this helps us remember to handle it in the reducer
  }
  return state;
};

// tslint:disable-next-line:no-empty
const neverReached = (never: never) => {};
