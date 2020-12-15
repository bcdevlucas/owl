import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as types  from './types';

function _getListItems () {
    return []
}

export type ListItemActions =
    | types.IGetListItemsAction
    | types.ILoadListItemsAction
    | types.IAddListItemAction
    | types.IRemoveListItemAction
    | types.IReorderListItemAction

export const getListItems: ActionCreator<
    ThunkAction<
        Promise<types.ILoadListItemsAction>, any, null, types.ILoadListItemsAction>
    > = () => {
  return async (dispatch: Dispatch) => {
    const getListItemsAction: types.IGetListItemsAction = {
        type: types.GET_ITEMS,
    } as types.IGetListItemsAction;


    dispatch(getListItemsAction);

    const listItems = await _getListItems();
    const loadListItemsAction: types.ILoadListItemsAction = {
        type: types.LOAD_ITEMS,
        items: listItems
    } as types.ILoadListItemsAction;

    return dispatch(loadListItemsAction);
  };
};

export const addListItem: ActionCreator<
    ThunkAction<
        Promise<types.IAddListItemAction>, any, null, types.IAddListItemAction>
    > = ({ item }) => {
  return async (dispatch: Dispatch) => {
    const addListItemAction: types.IAddListItemAction = {
        type: types.ADD_ITEM,
        item: item
    } as types.IAddListItemAction;

    return dispatch(addListItemAction);
  };
};

export const removeListItem: ActionCreator<
    ThunkAction<
        Promise<types.IRemoveListItemAction>, any, null, types.IRemoveListItemAction>
    > = (key) => {
  return async (dispatch: Dispatch) => {
    debugger;
    const removeListItemAction: types.IRemoveListItemAction = {
        type: types.REMOVE_ITEM,
        key: key
    } as types.IRemoveListItemAction;

    return dispatch(removeListItemAction);
  };
};


export const reorderListItem: ActionCreator<
    ThunkAction<
        Promise<types.IReorderListItemAction>, any, null, types.IReorderListItemAction>
    > = ({ key, order }) => {
  return async (dispatch: Dispatch) => {
    const reorderListItemAction: types.IReorderListItemAction = {
        type: types.REORDER_ITEM,
        key: key,
        order: order,
    } as types.IReorderListItemAction;

    return dispatch(reorderListItemAction);
  };
};
